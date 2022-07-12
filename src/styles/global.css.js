import { createGlobalStyle } from "styled-components";

// Standard colors
// const red = "#8E0E0E";
const red = "#AE412F";
const blue = "#2B2D42";
const light = "#E8F1F2";

export default createGlobalStyle`
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  main {
    margin-top: 110px;
    margin-left: auto;
    margin-right: auto ;
    width: 80%;
    
  }

  // Font colors
  .color_red {
    color: ${red};
  }
  .color_blue {
    color: ${blue};
  }
  .color_light {
    color: ${light};
  }

  // Back 
  .bk_red {
    background-color: ${red};
  }
  .bk_blue {
    background-color: ${blue};
  }
  .bk_light {
    background-color: ${light};
  }

  //Form
  form {
    width: 400px;
    height: 330px;
    background-color: red;
    margin-left: auto;
    margin-right: auto;
    div button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 30px;
      margin-top: 30px;
      margin-left: auto;
      margin-right: auto ;
      border: none;
      font-weight: bold;
      cursor: pointer;
    }
    h2 {
      text-align: center;
      padding-top: 10px;
    }
  }
  
  .form-group {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;

    label {
      margin-left: 10px ;
      margin-top: 10px;
      height: 20px;
    }

    input {
      margin-top: 10px;
      margin-right: 10px ;
      height: 20px;
      min-width: 170px ;
    }

    textarea {
      margin-top: 10px;
      margin-right: 10px ;
      min-width: 170px ;
    }

  }
`;
