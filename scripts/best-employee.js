(function () {
  // Sample data for best employees. Replace this array with your actual bestEmployeesData.
  const bestEmployeesData = [
    {
      image: "../assets/images/LoginPage/user/1.jpg",
      title: "John Smith",
      monthYear: "March 2024",
      description:
        "Exceptional performance in sales, consistently exceeding targets and providing outstanding customer service.",
    },
    {
      image: "../assets/images/LoginPage/user/2.jpg",
      title: "Emily Johnson",
      monthYear: "March 2024",
      description:
        "Demonstrated strong leadership skills and teamwork, leading the team to successful project completion ahead of schedule.",
    },
    {
      image: "../assets/images/LoginPage/user/3.jpg",
      title: "Michael Williams",
      monthYear: "March 2024",
      description:
        "Innovative problem-solver, implementing creative solutions resulting in significant cost savings for the company.",
    },
    {
      image: "../assets/images/LoginPage/user/4.jpg",
      title: "Sophia Brown",
      monthYear: "March 2024",
      description:
        "Consistently displays a positive attitude and strong work ethic, contributing to a positive team environment.",
    },
    {
      image: "../assets/images/LoginPage/user/5.jpg",
      title: "Matthew Davis",
      monthYear: "March 2024",
      description:
        "Exceptional attention to detail and quality, ensuring all projects are delivered to the highest standards.",
    },
    {
      image: "../assets/images/LoginPage/user/6.jpg",
      title: "Olivia Wilson",
      monthYear: "March 2024",
      description:
        "Outstanding communication skills, effectively collaborating with cross-functional teams to achieve company goals.",
    },
    {
      image: "../assets/images/LoginPage/user/7.jpg",
      title: "Daniel Martinez",
      monthYear: "March 2024",
      description:
        "Consistently exceeds expectations, demonstrating dedication and commitment to achieving excellence in all tasks.",
    },
    {
      image: "../assets/images/LoginPage/user/8.jpg",
      title: "Isabella Anderson",
      monthYear: "March 2024",
      description:
        "Exceptional problem-solving abilities, quickly identifying issues and implementing effective solutions.",
    },
    {
      image: "../assets/images/LoginPage/user/9.jpg",
      title: "Alexander Taylor",
      monthYear: "March 2024",
      description:
        "Proven track record of leadership and mentorship, inspiring and motivating team members to reach their full potential.",
    },
    {
      image: "../assets/images/LoginPage/user/1.jpg",
      title: "Mia Thomas",
      monthYear: "March 2024",
      description:
        "Consistently demonstrates initiative and resourcefulness, always going above and beyond in assigned tasks.",
    },
  ];

  // Select the swiper wrapper where slides will be appended.
  const swiperWrapper = document.querySelector(
    ".bestEmployee_swiper .swiper-wrapper"
  );

  // Create a slide for each employee.
  bestEmployeesData.forEach((item) => {
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide");

    // Insert the image card markup into the slide.
    slide.innerHTML = `
        <div class="imageCard">
          <img src="${item.image}" alt="${item.title}" />
          <div class="imageCard_TextContainer">
            <h4>${item.title}</h4>
            ${item.monthYear ? `<h5>${item.monthYear}</h5>` : ""}
            ${item.date ? `<h5>${item.date}</h5>` : ""}
            <p>${item.description}</p>
          </div>
        </div>
      `;
    swiperWrapper.appendChild(slide);
  });

  // Initialize Swiper with your options.
  const swiper = new Swiper(".bestEmployee_swiper", {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1.8,
        spaceBetween: 20,
      },
      700: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      900: {
        slidesPerView: 3.5,
        spaceBetween: 20,
      },
      1100: {
        slidesPerView: 5.5,
        spaceBetween: 30,
      },
    },
  });
})();
