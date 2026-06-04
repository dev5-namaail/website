export const DAYS = 250;

export function fmt(n) {
  return Math.round(n).toLocaleString();
}

export function fmtS(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(2) + 'M';
  if (n >= 1000) return fmt(n);
  return Math.round(n).toString();
}

export function calculate(formData) {
  const {
    totEmp,
    retEmp,
    daily,
    envM = 1,
    mins,
    rp,
    failP,
    refileM = 1,
    rate,
  } = formData;

  // Requests and time per request
  const annualRequests = daily * DAYS;
  const hoursPerRequest = mins / 60;

  // Retry adds extra search time
  const retryFactor = 1 + (rp / 100) * 0.5;
  const requestHoursWithRetry = hoursPerRequest * retryFactor;

  // Environment multiplier increases search time
  const effectiveHoursPerRequest = requestHoursWithRetry * envM;

  // Annual time from normal requests
  const baseAnnualHours = annualRequests * effectiveHoursPerRequest;

  // Failures add extra hours and cost
  const failureHours = annualRequests * (failP / 100) * hoursPerRequest * 1.8;

  // Misfiling multiplies the total hours
  const totalHours = (baseAnnualHours + failureHours) * refileM;
  const totalCost = totalHours * rate;

  const hoursPerEmployee = retEmp ? totalHours / retEmp : 0;
  const costPerEmployee = retEmp ? totalCost / retEmp : 0;

  // Breakdown values for reporting
  const baseHours = annualRequests * hoursPerRequest;
  const retryHours = baseHours * (retryFactor - 1);
  const envExtraHours = (baseHours + retryHours) * (envM - 1);
  const envSubtotalHours = (baseHours + retryHours) * envM;
  const misfileHours = (envSubtotalHours + failureHours) * (refileM - 1);

  return {
    totEmp,
    retEmp,
    daily,
    rate,
    envM,
    mins,
    rp,
    failP,
    refileM,
    annReq: annualRequests,
    totalH: totalHours,
    totalC: totalCost,
    perEmpH: hoursPerEmployee,
    perEmpC: costPerEmployee,
    h1_pure: baseHours,
    h1_cost: baseHours * rate,
    h2_pure: retryHours,
    h2_cost: retryHours * rate,
    retryFrac: retryFactor - 1,
    h3_envGain: envExtraHours,
    h3_cost: envExtraHours * rate,
    h3_envSubtotal: envSubtotalHours,
    h4_pure: failureHours,
    h4_cost: failureHours * rate,
    subtotalH: envSubtotalHours + failureHours,
    subtotalC: (envSubtotalHours + failureHours) * rate,
    h5_misgain: misfileHours,
    h5_cost: misfileHours * rate,
  };
}

export function getSeverity(totalC, retEmp) {
  const perEmpC = retEmp ? totalC / retEmp : 0;
  if (perEmpC < 3000) return 'low';
  if (perEmpC < 8000) return 'mid';
  return 'high';
}
