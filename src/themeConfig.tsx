import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

type ThemeProp = {
  children: JSX.Element;
};

export enum ThemePalette {
  customWhite = "#f5f5f5",
  customGray= '#E6E8E9',
  btnDark = "#3A4451",
  fontDark = "#091625",
  fontGrey='#535C67'
}

const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: ThemePalette.customWhite,
    },
    primary: {
      main: ThemePalette.fontDark,
    },
    secondary:{
      main:ThemePalette.customGray
    }
  },
  components:{
    MuiTextField:{
     defaultProps:{
      style:{
        background:ThemePalette.customWhite,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius:'100px',
        outlineWidth:0,
        height:'40px',
        padding:'0 10px',
        width:'550px',
        
      }
     }
    },
    MuiButton:{
    
      defaultProps:{
        style:{
          color:ThemePalette.customWhite,
          fontWeight:"400",
          textTransform:'capitalize'
        },
      },

      
    }
  }
});

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
