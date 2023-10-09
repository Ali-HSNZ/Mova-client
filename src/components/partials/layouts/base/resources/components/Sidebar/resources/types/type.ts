interface ISidebarLinkDetail {
    id: number
    title: string
    href: string
    icon: JSX.Element
}

type TSidebarLink = {
    id: number
    links: ISidebarLinkDetail[] // Specify that 'items' is an array of TabItem
    title: string
}

export type { TSidebarLink, ISidebarLinkDetail }
