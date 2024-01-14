const reg = new RegExp(pattern);

if(!reg.test(value)){
    alert(`Field ${label} is invalid`);
    setError(valParent, `${label} jest niepoprawny`)
    errors.push('error');
}


export const validatePIN = (value) => (value.length !== 4 ? 'PIN must be exactly 4 characters' : '')
export const validatePESEL = (value) => (value.length !== 11 ? 'PESEL must be exactly 11 characters' : '')
