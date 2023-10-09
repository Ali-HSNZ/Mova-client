import { type MantineThemeOverride } from '@mantine/core'

const customMantineTheme: MantineThemeOverride = {
    breakpoints: {
        xs: '576px',
        sm: '768px',
        md: '1024px',
        lg: '1280px',
        xl: '1440px',
    },
    fontFamily: 'unset',
    primaryColor: 'blue',
    primaryShade: { light: 5, dark: 5 },
}

// used 'stylis-plugin-rtl' Package For Set Mantine RTL Direction
const customLtrCache = {
    key: 'mantine-ltr',
}

export { customMantineTheme, customLtrCache }
