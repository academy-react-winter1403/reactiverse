export const DarkMode = () => {
    const elements = document.querySelectorAll(".light , .dark");

    elements.forEach(Element => {
      if(Element.classList.contains("light")){
        Element.classList.add("bg-gray-700","text-white","dark");
        Element.classList.remove("bg-gray-200","text-black", "light");
        document.body.classList.add("bg-gray-900");
        document.getElementById("image").src = "../../../public/4.png"}
      else{
        Element.classList.add("bg-gray-200","text-black", "light");
        Element.classList.remove("bg-gray-700","text-white", "dark");
        document.body.classList.remove("bg-gray-900",);
        document.getElementById("image").src = "../../../public/2.png"}
    })


  }