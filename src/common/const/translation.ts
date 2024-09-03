const es = {
    admin: {
        hello: 'Hola',
        title: 'Administración'
    },
    home: {
        title: 'Inicio'
    }
}

const en = {
    admin: {
        hello: 'Hola',
        title: 'Administration'
    },
    home: {
        title: 'Home'
    }
}

export const translations: {[key:string]: Record<string, Record<string, string>>} = {
    en,
    es
}