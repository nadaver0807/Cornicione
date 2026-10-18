export const LEAD_TYPE_SELECT_EVENT = 'cornicione:lead-type-select';
export const LEAD_SECTION_ANCHOR = 'lead-section';

/** בוחר סוג פנייה בטופס הלידים וגולל אליו. */
export const selectLeadType = (leadType: string): void => {
  window.dispatchEvent(new CustomEvent(LEAD_TYPE_SELECT_EVENT, { detail: leadType }));
  document.getElementById(LEAD_SECTION_ANCHOR)?.scrollIntoView({ behavior: 'smooth' });
};
