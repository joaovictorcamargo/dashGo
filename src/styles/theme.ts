import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
       gray: {
           "900": "#eff3f7",
           "800": "#FFF",
           "700": "#0098ff",
           "600": "#0098ff",
           "500": "#000",
           "400": "#797D9A",
           "300": "#000",
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
                bg: 'gray.900',
                color: 'gray.50'
            }
        }
    }
})