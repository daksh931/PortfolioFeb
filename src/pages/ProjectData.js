import recotech from "../assets/img/ProjectRecotech/Login.png";
import MusicSchool from "../assets/img/ProjectMusicSchool/Home.png";
import signoracucina from "../assets/img/ProjectSignoracucina/Home.png";
import design from "../assets/img/design.png";

import image1 from "../assets/Recotech_Screenshots/1.png";
import image2 from "../assets/Recotech_Screenshots/2.png";
import image3 from "../assets/Recotech_Screenshots/3.png";
import image4 from "../assets/Recotech_Screenshots/4.png";
import image5 from "../assets/Recotech_Screenshots/5.png";
import image6 from "../assets/Recotech_Screenshots/6.png";



import sig_image1 from "../assets/signorvino_wineSite/1.png";
import sig_image2 from "../assets/signorvino_wineSite/2.png";
import sig_image3 from "../assets/signorvino_wineSite/3.png";
import sig_image4 from "../assets/signorvino_wineSite/4.png";
import sig_image5 from "../assets/signorvino_wineSite/5.png";
const projectData = {
    recotech: [{
        title: "Recotech",
        description: "Recotech is a multi-role management system designed to streamline operations across different user roles, including SUPER_ADMIN, ADMIN, OPERATOR, RECEPTION, STORAGE, PARTS, and SALES. Admins can add and manage users, assigning specific roles with restricted access to the dashboard and operations based on their responsibilities. Operators can check inventory availability for tools, while receptionists can generate total bill amounts seamlessly. The platform ensures efficient workflow management by providing role-based access control, enhancing operational transparency and efficiency.",
        image: recotech,
    },
    {
        title: "Feature 1",
        description:
            "Recotech features a Project Dashboard with role-based access control, ensuring that only authorized users can interact with project data. While some roles have full access to add, edit, or delete projects, others are restricted to view-only mode. Additionally, access to project details varies—certain users can see comprehensive project insights, while others have limited visibility. Clicking on a project in the dashboard redirects users to a detailed view, displaying team members involved, project progress, and financial aspects like expenses, providing a structured and efficient project management experience.",
        image: image1,
    },
    {
        title: "Feature 2",
        description:
            "Recotech also includes a Statement Page, accessible only to specific roles based on permissions. This feature allows users to track statements, including assigned operators, deadlines, and completion status. Some roles have the ability to modify or delete statements, while others are limited to view-only access. This ensures controlled management of critical data, enabling seamless tracking of deadlines and task responsibilities while maintaining role-based security and operational efficiency.",
        image: image2,
    },
    {
        title: "Feature 3",
        description:
            "Recotech also provides a User Management System, where only authorized roles, such as Super Admin, can create and manage users. While adding a new user, details like assigned projects, email, and role (e.g., Operator, Reception, Storage, etc.) are specified. Some roles can modify or remove users, while others have view-only access. This structured approach ensures that user assignments and roles are managed efficiently, maintaining a clear hierarchy and controlled access within the system.",
        image: image3,
    },
    {
        title: "Feature 4",
        description:
            "Recotech also features a Parts Management System, where users with the appropriate roles can view, manage, and order spare parts for repairs and maintenance. The Parts Page displays essential details such as Part Code, Name, Quantity, Brand/Model, Fuel Type, Power (KW), Engine Code, Chassis, and Location (e.g., Warehouse). Based on availability, parts can be ordered and used for servicing and repairs, ensuring smooth inventory tracking and efficient resource management.",
        image: image4,
    },
    {
        title: "Feature 5",
        description:
            "Recotech also features a Document Management System, allowing users to upload, manage, and organize documents based on specific projects and clients. Users with the appropriate permissions can select templates, associate documents with projects, and assign them to clients. Some roles have the ability to modify or delete documents, while others are limited to view-only access. This ensures secure and efficient document storage, making it easier to track and manage important files within the platform.",
        image: image5,
    },
    {
        title: "Feature 6",
        description:
            "In Recotech, login and authentication are handled efficiently on the frontend, ensuring a smooth and secure user experience. The system dynamically verifies user credentials and restricts access based on role-based permissions. The UI adapts in real-time, showing only the relevant sections and functionalities for each user. Unauthorized users are automatically redirected, enhancing security and usability while maintaining a seamless workflow across different roles.",
        image: image6,
    },


    // Add below details also.
//     Recotech implements Role-Based Access Control (RBAC) across all features and the dashboard, ensuring a highly secure and structured user experience. Each role—Super Admin, Admin, Operator, Reception, Storage, Parts, Sales—has granular access permissions.

// Some users have full control (create, update, delete), while others have limited permissions (view-only or add-only).
// The dashboard dynamically adapts based on the user’s role, restricting access to unauthorized sections.
// Features like Projects, Statements, Inventory, and Documents are all role-gated, ensuring users only see and modify what they are authorized to.
// This structured RBAC implementation enhances security, prevents unauthorized actions, and streamlines operations within Recotech.








    
    ],



    signoracucina: [{
        title: "Signora Cucina - A Premium Food Delivery Experience",
        description:
            "Signora Cucina is a modern and seamless food delivery application designed to bring delicious meals straight to your doorstep. Developed by our team using React.js, Node.js, and other cutting-edge technologies, this platform ensures a smooth and intuitive user experience.With a focus on efficiency",
        image: signoracucina,
    },
    {
        title: "Feature 1",
        description:
            "This feature allows users to manage tasks efficiently, track progress, and collaborate seamlessly.",
        image: sig_image1,
    },
    {
        title: "Feature 2",
        description:
            "Advanced security features ensure that your data is protected at all times.",
        image: sig_image2,
    },
    {
        title: "Feature 3",
        description:
            "Seamless integration with multiple platforms for enhanced productivity.",
        image: sig_image3,
    },
    {
        title: "Feature 4",
        description:
            "Advanced security features ensure that your data is protected at all times.",
        image: sig_image4,
    },
    {
        title: "Feature 5",
        description:
            "Seamless integration with multiple platforms for enhanced productivity.",
        image: sig_image5,
    },
    ],

    "music-school": [{
        title: "Music School",
        description: "This is the Music School project description...",
        image: MusicSchool,
    },
    ],

    slabpro: [{
        title: "Slab Pro",
        description: "This is the Slab Pro project description...",
        image: design,
    },
    ],
};

export default projectData;