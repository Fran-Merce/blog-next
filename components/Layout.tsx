import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Navbar } from './Navbar/Navbar';
import { Header } from './Header';
const darkTheme = createTheme({
  palette: {
    mode:'dark',
    primary: {
      main: '#ffdd44ff',
    },
    secondary: {
      main: '#494949ff',
      dark: '#7c7a7aff',
    },
    background: {
      default: '#fffafbff',
      paper:'#000000ff',
    },
    text: {
      primary: '#000000',
      secondary: '#fff',

    },
  },
});


interface LayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <>
        <CssBaseline />
        <Navbar />

        {children}
      </>
    </ThemeProvider>
  );
};
