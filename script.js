const users = [
  {
    fullname: "Rahul Sharma",
    image: "https://images.unsplash.com/photo-1683649527322-bf531e396d50?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
    profession: "Frontend Developer",
    description: "Passionate about building modern and responsive web interfaces.",
    tags: ["JavaScript", "React", "CSS"]
  },
  {
    fullname: "Priya Patel",
    image: "https://images.unsplash.com/photo-1788801246836-7885e34eb33e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3N3x8fGVufDB8fHx8fA%3D%3D",
    profession: "UI/UX Designer",
    description: "Creative designer focused on simple and user-friendly experiences.",
    tags: ["Figma", "UI Design", "UX"]
  },
  {
    fullname: "Aman Khan",
    image: "https://images.unsplash.com/photo-1543150682-5df7f27613f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
    profession: "Backend Developer",
    description: "Develops scalable APIs and server-side applications.",
    tags: ["Node.js", "MongoDB", "Express"]
  },
  {
    fullname: "Sneha Verma",
    image: "https://media.istockphoto.com/id/2254081470/photo/mysterious-woman-in-dramatic-lighting-portrait.webp?a=1&b=1&s=612x612&w=0&k=20&c=Je_jK20PkJfPnVsS4-pBnN4Ukwx-s-6u506zu2TZFHE=",
    profession: "Data Analyst",
    description: "Turns data into useful insights to support better decisions.",
    tags: ["Python", "Excel", "SQL"]
  },
  {
    fullname: "Arjun Mehta",
    image: "https://i.pravatar.cc/150?img=5",
    profession: "Full Stack Developer",
    description: "Builds complete web applications from frontend to backend.",
    tags: ["JavaScript", "React", "Node.js"]
  }
];


sum = ''
users.forEach(function(elem){

    sum = sum + `<div class="card">
            <img src="${elem.image}" alt="">
            <h1>${elem.fullname}</h1>
            <h3>${elem.profession}</h3>
            <h5>${elem.description}</h5>
        </div>`

})
var main =document.querySelector('main')
main.innerHTML = sum



