export type WorkInfo = {
    url: string,
    author: string,
    publicationDate: string
}

export type Pennames = {
    name: string,
    description: string,
    avatarSrc: string,
    avatarAltText: string,
    authorUrl: string
}

export type AmazonWork = {
    title: string,
    author: string,
    coverUrl: string,
    blurb: string,
    url: string,
    publicationDate: Date,
    description: string,
}

export type AmazonMetaData = {
    title: string,
    description: string,
    images: string[],
    url: string,
    sitename: string,
    favicon: string,
    duration: string,
    domain: string
}