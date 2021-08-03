export interface NavProps {
    navigation: any
}

export interface LanguageModalProps {
    visibility: boolean,
    languages: {key: string, name: string, tag: string}[],
    closeLangModal: Function
}
