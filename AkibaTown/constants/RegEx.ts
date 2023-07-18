export const validMail = new RegExp(
    /^.+\@.+$/
);

export const validName = new RegExp(
    /^[a-z]+[ \-']?[[a-z]+[ \-']?]*[a-z]+$/
);

export const validPassword = new RegExp(
    /^[a-zA-Z0-9_\-\\/#!@*]{8,20}$/
);

export function validateMail(mail: string) {
    return validMail.test(mail);
}

export function validateName(name: string) {
    return validName.test(name);
}

export function validatePassword(password: string) {
    return validPassword.test(password);
}