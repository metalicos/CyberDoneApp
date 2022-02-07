export const PASSWORD_PATTERN = new RegExp('(?!.*\\s)^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9$&+,:;=?@#|\'<>.^*()%!\\-]+$');
export const NAME_PATTERN = new RegExp('([А-ЩЬЮЯҐЄІЇ][А-ЩЬЮЯҐЄІЇа-щьюяґєії \'-]+)|([A-ZÀ-ÿ][-,a-z. \']+)');
export const UUID_PATTERN = new RegExp('^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$', 'i');
