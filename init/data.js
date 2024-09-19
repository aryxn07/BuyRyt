const sampleCourses = [
    {
        "title": "JavaScript for Beginners",
        "description": "Introduction to JavaScript for building interactive web applications and dynamic web content.",
        "image": "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F5xtfavzdsdydctb0c83x.jpg",
        "price": 2000,
        "author": "Emily Brown",
        "rating": 4.2,
        "language": "English"
    },
    {
        "title": "Mastering Python",
        "description": "Comprehensive guide to Python programming for all levels.",
        "image": "https://media.licdn.com/dms/image/D5612AQHKxMy1MQPj7w/article-cover_image-shrink_720_1280/0/1719933907453?e=2147483647&v=beta&t=hlQziTK40AqtjKCsSLa8hTuGOujt0_WyN6q0rEm8E4I",
        "price": 3999,
        "author": "John Doe",
        "rating": 4.5,
        "language": "English"
    },
    {
        "title": "HTML & CSS from Scratch",
        "description": "Learn HTML and CSS to build responsive websites.",
        "image": "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/306233498/original/f30a28f1a5e3ff340c308105f1bc30cb37674cec/create-a-website-using-html-css-and-javascript.jpg",
        "price": 1500,
        "author": "Jane Smith",
        "rating": 4.3,
        "language": "English"
    },
    {
        "title": "Advanced React.js",
        "description": "A deep dive into React.js for building scalable web apps.",
        "image": "https://miro.medium.com/v2/resize:fit:1400/0*YHAEQEA2amk1Q-z-",
        "price": 2200,
        "author": "Michael Lee",
        "rating": 4.6,
        "language": "English"
    },
    {
        "title": "Introduction to Machine Learning",
        "description": "Understand the basics of machine learning and artificial intelligence.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAZ9HHpbdpHfnOny5fyvWwYy_5v5HC9ac104aTbmjoy6excj9N5f1xfO7KlAZl1-T05dQ",
        "price": 2400,
        "author": "Sophia Johnson",
        "rating": 4.7,
        "language": "English"
    },
    {
        "title": "Django for Web Development",
        "description": "Learn Django to create powerful web applications.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGsoIERAoAG8IkV5hHiXx6dY-Epze4J6zmLQ&s",
        "price": 1999,
        "author": "David Kim",
        "rating": 4.4,
        "language": "English"
    },
    {
        "title": "Understanding Algorithms",
        "description": "A comprehensive guide to algorithms and data structures.",
        "image": "https://www.98thpercentile.com/hs-fs/hubfs/Understanding%20Algorithms%20and%20Logic%20(1).png?width=1200&height=628&name=Understanding%20Algorithms%20and%20Logic%20(1).png",
        "price": 1800,
        "author": "Chris White",
        "rating": 4.1,
        "language": "English"
    },
    {
        "title": "Vue.js Essentials",
        "description": "Learn Vue.js to build dynamic front-end applications.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8myiJi2pc5ihJY5Y6-1Aj9YQLLK-A0C1eCA&s",
        "price": 1890,
        "author": "Anna Garcia",
        "rating": 4.5,
        "language": "English"
    },
    {
        "title": "Web Development with Ruby on Rails",
        "description": "Master Ruby on Rails for building high-performance web apps.",
        "image": "https://graffersid.com/wp-content/uploads/2024/07/How-to-develop-web-application-using-ruby-on-rails.jpg",
        "price": 2100,
        "author": "Paul Harris",
        "rating": 4.6,
        "language": "English"
    },
    {
        "title": "Node.js and Express for Beginners",
        "description": "Create back-end services using Node.js and Express.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQktia7SvXfoawu5w7iRSaGAdVaEIGteRyQfw&s",
        "price": 1650,
        "author": "Rachel Clark",
        "rating": 4.3,
        "language": "English"
    },
    {
        "title": "Building APIs with Flask",
        "description": "Learn to develop RESTful APIs using Flask and Python.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDUq-bB_RY6MfKa-JUlibXKqSU2Xnwx8cQuA&s",
        "price": 1400,
        "author": "Kevin Parker",
        "rating": 4.2,
        "language": "English"
    },
    {
        "title": "React Native for Mobile Development",
        "description": "Build mobile apps using React Native for Android and iOS.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT20J0eUJic_o13CuCPQQpQacJfYR98tuhm5w&s",
        "price": 2300,
        "author": "Emily Watson",
        "rating": 4.5,
        "language": "English"
    },
    {
        "title": "Angular for Front-End Development",
        "description": "A complete guide to building dynamic web apps with Angular.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD6u3nqEJ8cqzDufs8SPNc9TDsA60ra8no3g&s",
        "price": 2200,
        "author": "Robert Evans",
        "rating": 4.4,
        "language": "English"
    },
    {
        "title": "Mastering GraphQL",
        "description": "Learn GraphQL for efficient querying of APIs.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfj4yzQxWnI4BEN-CYkVDQc0Qvqko7hJeRrg&s",
        "price": 2450,
        "author": "Laura Adams",
        "rating": 4.6,
        "language": "English"
    },
    {
        "title": "Data Science with Python",
        "description": "Learn Python libraries like Pandas and NumPy for data science.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyxKVRxQ0ZKF0MXQO5NL80jkRspKI51pI4LQ&s",
        "price": 2700,
        "author": "Brian Martin",
        "rating": 4.8,
        "language": "English"
    },
    {
        "title": "DevOps and CI/CD Pipelines",
        "description": "Master DevOps practices and continuous integration techniques.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrlOaUbxyOXn9qwZc42JeJnVzysT8arKdviw&s",
        "price": 1950,
        "author": "Sophia Turner",
        "rating": 4.7,
        "language": "English"
    },
    {
        "title": "Mobile App Development with Swift",
        "description": "Learn Swift to develop iOS applications.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLjHWOe9AKNO-biR3xxIwEYHxAr3ebOs5uhQ&s",
        "price": 4000,
        "author": "David Scott",
        "rating": 4.5,
        "language": "English"
    },
    {
        "title": "Fundamentals of Cybersecurity",
        "description": "Understand cybersecurity principles and protect your applications.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Wv6K6vjc7dR9wDKyrLj_Jw9xpt0IFDPKUw&s",
        "price": 6000,
        "author": "Matthew Collins",
        "rating": 4.9,
        "language": "English"
    },
    {
        "title": "Full-Stack JavaScript with MERN",
        "description": "Learn full-stack development using MongoDB, Express, React, and Node.js.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSlaCz9GJADvEU1tTvQfv7DsgXVNwJe3ZNFw&s",
        "price": 8000,
        "author": "Megan Hughes",
        "rating": 4.8,
        "language": "English"
    },
    {
        "title": "Kotlin for Android Development",
        "description": "Build Android apps with Kotlin.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkM-eIRL7wHj2fqZmM5aiV4q26LDH6JDSYtw&s",
        "price": 1500,
        "author": "Emma Brooks",
        "rating": 4.3,
        "language": "English"
    },
    {
        "title": "Introduction to Blockchain",
        "description": "Understand blockchain technology and its applications.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBKHEhmyYycGFfu4gJhXs6MA3ubC9cqNFcUA&s",
        "price": 2300,
        "author": "Michael Taylor",
        "rating": 4.5,
        "language": "English"
    },
    {
        "title": "Cloud Computing with AWS",
        "description": "Learn to work with Amazon Web Services (AWS) for cloud solutions.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD4BrBZMV6DpBcGYnjZoBn8hLHXL2gaUwrfQ&s",
        "price": 2600,
        "author": "Isabella Ward",
        "rating": 4.7,
        "language": "English"
    },
    {
        "title": "Data Structures with Java",
        "description": "Master data structures and algorithms in C++.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn5QdDCnEAfP_2EbKy3ty-_X2Dkv2kGjSScg&s",
        "price": 1600,
        "author": "Aryan",
        "rating": 4.9,
        "language": "English"
    } 
]

module.exports={data:sampleCourses};