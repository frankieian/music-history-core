/**
 * Makes sure at least one in zod schema is defined
 * @param obj 
 * @returns 
 */
export const atLeastOneDefined = (obj: Record<string | number | symbol, unknown>) => Object.values(obj).some(v => v !== undefined);
