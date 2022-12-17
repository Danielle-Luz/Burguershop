export interface iTheme {
  colors: {
    brand: {
      primary: string[],
      secondary: string[]
    },
    gray: string[],
    status: {
      negative: string,
      warning: string,
      sucess: string,
      information: string
    }
  },
  fontSizes: string[],
  radius: string[]
}

export const theme: iTheme = {
  colors: {
    brand: {
      primary: ["#EB5757", "F95D5D"],
      secondary: ["#27AE60", "#93D7AF", "#27ae6010"]
    },
    gray: ["#333333", "#828282", "#E0E0E0", "#F5F5F5", "#BDBDBD"],
    status: {
      negative: "#E60000",
      warning: "#FFCD07",
      sucess: "#168821",
      information: "#155BCB"
    }
  },
  fontSizes: ["26px", "22px", "18px", "16px", "14px", "12px"],
  radius: ["5px", "8px"]
}