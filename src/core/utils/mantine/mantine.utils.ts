import { type MantineThemeOverride } from '@mantine/core'
import stylisRTLPlugin from 'stylis-plugin-rtl'

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
const customRtlCache = {
    key: 'mantine-rtl',
    stylisPlugins: [stylisRTLPlugin],
}

export { customMantineTheme, customRtlCache }
