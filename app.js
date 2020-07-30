let section = document.querySelectorAll("section");

const options = {
    root: null,
    threshold: 0,
    rootMargin: "0px 0px -150px 0px"
};
const renderSections = (num) => {

    const main = document.querySelector("main");

    return new Promise((resolve, reject) => {
        for (let i = 0; i < num; i++) {
            const section = document.createElement("section");
            const h1_text = document.createElement("h1");
            h1_text.textContent = "This is a section";
            section.append(h1_text);
            main.append(section);

            section = document.querySelectorAll("section");
            
            resolve("success");
        }
    });
};

renderSections(5).then((res)=>console.log(res));

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry)=>{
        if(entry.isIntersecting)
        {
            // entry.setAttribute("class", "transformed");
            // console.log("hello");
            //we are console logging entry to see that entry.target is the section that we are targetting 
            console.log(entry);
        //    entry.target.setAttribute("class", "transformed");
        entry.target.classList.toggle("transformed");
        const entry_text = entry.target.querySelector("h1")
        entry_text.textContent = "Activated";
        observer.unobserve(entry.target);
        }
        else{
            console.log("hello");
        }
    });
},options);


section.forEach((section)=>{observer.observe(section)});