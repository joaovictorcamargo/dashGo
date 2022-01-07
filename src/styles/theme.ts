import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
       gray: {
           "900": "#eff3f7",
           "800": "rgba(255, 255, 255, 1)",
           "700": "#0098ff",
           "600": "#0098ff",
           "500": "#0098ff",
           "400": "#797D9A",
           "300": "#0098ff",
           "200": "#B3B5C6",
           "100": "#0098ff",
           "50": "rgba(11, 40, 110, 1)",
       }
    },
    fonts: {
        heading: 'Roboto',
        body: 'Roboto',
    },
    styles: {
        global: {
            body: {
                bg: 'rgba(239, 243, 247, 1)',
                color: 'gray.50'
            }
        }
    }
})