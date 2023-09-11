export const useDarkMode = () => {
  //load สถานะเดิมจาก localStorage
  const getDefault = () => {
    let status = localStorage.getItem("darkMode") == "true";
    setTheme(status);
    return status;
  };

  //แก้ไขคลาสใน css
  const setTheme = (status) => {

    const body = document.getElementsByTagName("body")[0];
    const light = document.getElementById("light");
    const dark = document.getElementById("dark");
    // css index.html สีขาว/ดำ
    if (status === true) {
      //switch css table index page
      dark.removeAttribute("disabled");
      light.setAttribute("disabled", "disabled");
      body.setAttribute("data-layout-mode", "dark");
      body.setAttribute("data-sidebar", "dark");
      localStorage.setItem("darkMode", status);
    } else {
      //switch css table index page
      light.removeAttribute("disabled");
      dark.setAttribute("disabled", "disabled");
      body.setAttribute("data-layout-mode", "light");
      body.setAttribute("data-sidebar", "light");
      localStorage.setItem("darkMode", status);
    }
  };
  return { getDefault, setTheme };
};
