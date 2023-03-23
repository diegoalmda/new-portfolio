const pt = {
  selected: "pt",
  goToPage: {
    back: "Voltar",
    forward: "Mais"
  },
  menu: {
    selectlanguage: "Escolha o idioma",
    items: [{ title: "Home", link: "/" }, { title: "Sobre mim", link: "about" }, { title: "Tecnologias", link: "skills" }, { title: "Projetos", link: "projects" }, { title: "Contato", link: "contact" }],
  },
  home: {
    greetings: "Olá !",
    beforeName: "Eu sou",
    message: "Saiba mais...",
    description: "Um desenvolvedor Full Stack apaixonado por criar aplicações interativas e proporcionar ótimas experiências aos usuários.",
    doc: "Currículo",
    file: "curriculo_diego_almeida.pdf",
    goToPage: {
      back: "",
      forward: "about"
    },
  },
  about: {
    title: "Sobre mim",
    subtitle: "Um pouco",
    secondTitle: "Formação acadêmica e cursos",
    message: "Veja mais...",
    text: "Sou tecnólogo em Telemática, com mais de 3 anos de experiência atuando como desenvolvedor web. Tenho conhecimento em desenvolvimento de sistemas para Web e mobile com foco na linguagem JavaScript e bibliotecas React, React Native e Node.js. Conheço técnicas avançadas de SEO para otimização de sites e de acessibilidade, permitindo que a experiência do usuário se torne mais inclusiva. Também domino os recursos de responsividade da web. Já trabalhei com diversos mecanismos e bibliotecas de manipulação de dados no Node.js, sejam query builders, ORMs, ou até mesmo queries SQL nativas. Possuo conhecimento avançado em Next.js, Node.js, Typescript, criação e consumo de APIs REST ou GraphQL e com desenvolvimento orientado a testes. Consigo criar uma aplicação desde o projeto do design em ferramentas como o Figma, utilizando técnicas de UX/UI, até a integração do front com o back-end e o deploy com integração e entregas contínuas.",
    coursesData: [
      { 
        id: "ifpb",
        title: "Instituto Federal de Educação Ciência e Tecnologia da Paraíba",
        courses: ["Tecnologia em Telemática"]
      },
      { 
        id: "rocketseat",
        title: "Rocketseat",
        courses: ["Programa de treinamento Ignite trilhas React, React Native e Node.js"]
      },
      { 
        id: "udemy",
        title: "Udemy",
        courses: ["Curso de Javascript Completo do iniciante ao mestre", "Curso Completo do Desenvolvedor NodeJS"]
      },
    ],
    goToPage: {
      back: "/",
      forward: "skills"
    },
  },
  contact: {
    title: "Contato",
    subtitle: "Entre em",
    message: "Resido na cidade de Curitiba e estou aberto a propostas de trabalho em período integral. Estou disponível para trabalho presencial, híbrido ou remoto. Entre em contato.",
    form: {
      name: "Nome",
      subject: "Assunto",
      message: "Mensagem",
      button: "Enviar",
      success: "Mensagem enviada!", 
      successMessage: "Em breve retornarei o contato!"
    },
    goToPage: {
      back: "projects",
      forward: ""
    },
  },
  projects: {
    title: "Projetos",
    subtitle: "Alguns",
    message1: "Você pode ver mais informações sobre mim no ",
    message2: " e o repositório de outros projetos no ",
    list: [
      {
        name: "Projeto Petshop",
        live: "https://www.figma.com/file/XlutnqhOjVf8PRRpm32MGt/PetShop?node-id=3%3A9&t=4yeRYg5vEhO9le9O-1",
        repo: "",
        message: "Código em breve!",
        image: "projects/petshop.png",
        technologies: ["Figma"],
        text: "Projeto de um website de petshop com cadastro de clientes e calendário de agendamento de banho, tosa e hospedagem."
      },
      {
        name: "Agência de Viagens",
        live: "",
        repo: "",
        message: "Em breve!",
        image: "projects/travelagency.png",
        technologies: ["HTML", "CSS", "ReactJS", "React Router Dom", "Context API", "Styled components", "Phosphor icons", "Date-fns", "Node.js", "Express Framework", "JWT"],
        text: "É um projeto Full Stack para uma agência de viagens. São 2 front-ends React que se comunicam com uma API criada em Node.js, para cadastrar promoções, grupos de viagens, usuários do sistema, entre outros. Um front será a página principal da agência, onde os clientes irão acessar e verificar promoções e grupos disponíveis de viagem, a partir de informações trazidas via requisições REST à API. O outro front, se trata de um portal administrativo, onde será feito o controle de todo o conteúdo não-estático que irá aparecer no site."
      },
      {
        name: "Ignite Call",
        live: "https://nextjs-ignite-call.vercel.app/",
        repo: "https://github.com/diegoalmda/nextjs-ignite-call",
        message: "",
        image: "projects/ignitecall.png",
        technologies: ["Next.js", "TypeScript", "ReactJS", "Node.js", "Prisma.io", "Google APIs", "Google Cloud Platform", "Phosphor icons", "Docker", "ESLint", "Date-fns", "Zod", "Axios", "Stitches (CSS-in-JS)", "Next Auth", "NExt Seo", "Nookies", "React Hook Form", "Design System"],
        text: "O projeto Ignite Call é um projeto Full Stack que construído para agendamentos de compromissos a partir de um calendário com integração com o Google Agenda. O usuário pode se cadastrar no app a partir de sua conta do Google e indicar seus dias da semana e horários em que estará disponível para agendar compromissos. Todo agendamento cadastrado na aplicação tem integração com o Google Agenda, o que possibilita ao usuário verificar seus novos compromissos direto na plataforma do Google."
      },
      {
        name: "Timer",
        live: "https://ignite-timer-sepia.vercel.app/",
        repo: "https://github.com/diegoalmda/ignite-timer",
        message: "",
        image: "projects/timer.png",
        technologies: ["HTML", "CSS", "Vite", "TypeScript", "ReactJS", "React Router Dom", "Context API", "useReducer", "Styled components", "Phosphor icons", "Immer JS", "ESLint", "Date-fns", "Zod"],
        text: "O projeto Timer foi idealizado para seguir a técnica de gerenciamento de tempo chamada Pomodoro. Esta técnica tem como objetivo o aumento da produtividade ao realizar uma determinada tarefa, utilizando um timer e fazendo pequenos intervalos entre cada finalização da contagem do tempo até concluir as tarefas programadas para serem finalizadas em cada timer."
      },
      {
        name: "IgNews",
        live: "https://ignews-challenge-diegoalmda.vercel.app/",
        repo: "https://github.com/diegoalmda/rjs-ignite-ignews",
        message: "",
        image: "projects/ignews.png",
        technologies: ["HTML", "CSS", "ReactJS", "Next.js", "TypeScript", "SASS", "Next-Auth", "Stripe", "FaunaDB", "Prismic CMS", "Github Authentication"],
        text: "O projeto tem como objetivo o estudo e desenvolvimento de uma aplicação com ReactJS e NextJS para listagem de posts e sistema de assinatura em um blog de notícias. Onde os usuários pagam para ter acesso. O acesso às postagens é liberado quando há uma inscrição ativa no Stripe. Caso não exista assinatura ativa para o usuário logado a partir do Github, só será exibido apenas um resumo das notícias ao usuário. Os meios de pagamento da aplicação são integrados com a API do Stripe, e utilizado o FaunaDB para armazenar as informações. As postagens são exibidas a partir do CMS Prismic.io. A aplicação foi construída com modelo Serveless, sem necessidade de criar uma API externa para manipular os dados."
      },      
    ],
    goToPage: {
      back: "skills",
      forward: "contact"
    },
  },
  skills: {
    title: "Tecnologias",
    subtitle: "Meu trabalho",
    message1: "Logo abaixo estão mais das algumas tecnologias que uso para construir meus projetos.",
    message2: "Veja a página de projetos.",
    text: "Crio sites responsivos com foco em usabilidade, experiência do usuário e boas práticas. A principal área de minha experiência é desenvolvimento front-end, HTML, CSS, JS, ReactJS e React Native, construindo aplicativos web de pequeno e médio porte, apps para dispositivos móveis, implantação de novos recursos e codificação de layouts interativos. Também tenho experiência como desenvolvedor full-stack com Node.js. Tenho um perfil flexível, o que me permite atuar em diversas áreas e atividades ao mesmo tempo de forma organizada, sabendo distinguir entre tarefas mais urgentes e tarefas secundárias. Atuando desta forma, consigo me manter focado quando estou sob muita demanda, o que me possibilita entregar os projetos dentro dos prazos.",
    goToPage: {
      back: "about",
      forward: "projects"
    },
  }
}

const en = {
  selected: "en",
  goToPage: {
    back: "Back",
    forward: "More"
  },
  menu: {
    selectlanguage: "Choose language",
    items: [{ title: "Home", link: "/" }, { title: "About", link: "about" }, { title: "My Skills", link: "skills" }, { title: "Projects", link: "projects" }, { title: "Contact", link: "contact" }],
  },
  home: {
    greetings: "Hi There !",
    beforeName: "I'm",
    message: "See more...",
    description: "A Full Stack Developer passionate about creating interactive applications and providing great user experiences.",
    doc: "Resumé",
    file: "resume_diego_almeida.pdf",
    goToPage: {
      back: "",
      forward: "about"
    },
  },
  about: {
    title: "About me",
    subtitle: "Some info",
    secondTitle: "Education",
    message: "See more...",
    text: "I am a technologist in Telematics, with more than 3 years of experience working in Front-end. I have knowledge in web and mobile applications development focusing on JavaScript language and React and React Native libraries. I know advanced SEO techniques for website optimization and accessibility, allowing the user experience to become more inclusive. I also master web responsiveness resources, favoring the use of applications on devices with different screen sizes while maintaining a great user experience. I have advanced knowledge in Next.js, Typescript, REST APIs or GraphQL and with test-oriented development. I can create an application from the design project in tools such as Figma, using UX/UI techniques, to deployment with continuous integration and deliveries, always focusing on good practices. I have a flexible profile, which allows me to work in different areas and activities at the same time in an organized way, knowing how to distinguish between more urgent tasks and non-urgent tasks. Working this way, I can stay focused when I'm under a lot of demand, which allows me to deliver projects on time.",
    coursesData: [
      { 
        id: "ifpb",
        title: "Instituto Federal de Educação Ciência e Tecnologia da Paraíba",
        courses: ["Telematics Technologist"]
      },
      { 
        id: "rocketseat",
        title: "Rocketseat",
        courses: ["React, React Native and Node.js"]
      },
      { 
        id: "udemy",
        title: "Udemy",
        courses: ["Complete course of Javascript from beginner to master (2020)", "Complete course of NodeJS"]
      },
    ],
    goToPage: {
      back: "/",
      forward: "skills"
    },
  },
  contact: {
    title: "Contact",
    subtitle: "E-mail me",
    message: "I'm a Brazilian developer who lives in the state of Paraná. I am open to full-time positions. Contact me.",
    form: {
      name: "Name",
      subject: "Subject",
      message: "Message",
      button: "Send",
      success: "Your message has been sent!", 
      successMessage: "I'll get back to you soon!"
    },
    goToPage: {
      back: "projects",
      forward: ""
    },
  },
  projects: {
    title: "Projects",
    subtitle: "Some of my",
    message1: "You can see more information about me on ",
    message2: " and some other project's code on ",
    list: [
      {
        name: "Petshop",
        live: "https://www.figma.com/file/XlutnqhOjVf8PRRpm32MGt/PetShop?node-id=3%3A9&t=4yeRYg5vEhO9le9O-1",
        repo: "",
        message: "Coming soon!",
        image: "projects/petshop.png",
        technologies: ["Figma"],
        text: "Petshop website with customer registration and scheduling of bathing, grooming and accommodation."
      },
      {
        name: "Travel agency",
        live: "",
        repo: "",
        message: "Coming soon!",
        image: "projects/travelagency.png",
        technologies: ["HTML", "CSS", "ReactJS", "React Router Dom", "Context API", "Styled components", "Phosphor icons", "Date-fns", "Node.js", "Express Framework", "JWT"],
        text: "It's a Full Stack project for a travel agency. There are 2 React front-ends that communicate with an API created in Node.js, to register promotions, travel groups, system users, among other functionalities. One front will be the agency's main page, where customers will be able to access and check available promotions and travel groups, based on information brought by REST requests to the API. The other front is an administrative portal, where all non-static content will be controlled."
      },
      {
        name: "Ignite Call",
        live: "https://nextjs-ignite-call.vercel.app/",
        repo: "https://github.com/diegoalmda/nextjs-ignite-call",
        message: "",
        image: "projects/ignitecall.png",
        technologies: ["Next.js", "TypeScript", "ReactJS", "Node.js", "Prisma.io", "Google APIs", "Google Cloud Platform", "Phosphor icons", "Docker", "ESLint", "Date-fns", "Zod", "Axios", "Stitches (CSS-in-JS)", "Next Auth", "NExt Seo", "Nookies", "React Hook Form", "Design System"],
        text: "The Ignite Call project is a Full Stack project that was built for scheduling appointments from a calendar with Google Calendar integration. Users can register for the app using their Google account and indicate their days of the week and times when they will be available to schedule appointments. Every schedule registered in the application has integration with Google Calendar, which allows the user to check their new appointments directly on the Google platform."
      },
      {
        name: "Timer",
        live: "https://ignite-timer-sepia.vercel.app/",
        repo: "https://github.com/diegoalmda/ignite-timer",
        message: "",
        image: "projects/timer.png",
        technologies: ["HTML", "CSS", "Vite", "TypeScript", "ReactJS", "React Router Dom", "Context API", "useReducer", "Styled components", "Phosphor icons", "Immer JS", "ESLint", "Date-fns", "Zod"],
        text: "The Timer project was conceived to follow the time management technique called Pomodoro. This technique aims to increase productivity when performing a certain task, using a timer and making small intervals between each completion of the time count until completing the tasks scheduled to be completed in each timer."
      },
      {
        name: "IgNews",
        live: "https://ignews-challenge-diegoalmda.vercel.app/",
        repo: "https://github.com/diegoalmda/rjs-ignite-ignews",
        message: "",
        image: "projects/ignews.png",
        technologies: ["HTML", "CSS", "ReactJS", "Next.js", "TypeScript", "SASS", "Next-Auth", "Stripe", "FaunaDB", "Prismic CMS", "Github Authentication"],
        text: "The project aims to study and develop an application with ReactJS and NextJS to list posts and subscribe to a news blog. Where users pay for access. The access to posts is granted when there is an active Stripe subscription. If there is no active subscription for the user logged into Github, only a news summary will be shown to the user. The app's payment methods are integrated with the Stripe API, and FaunaDB is used to store the information. Posts are displayed on CMS Prismic.io. The application was built using a Serveless model, without the need to create an external API to manipulate the data."
      },      
    ],
    goToPage: {
      back: "skills",
      forward: "contact"
    },
  },
  skills: {
    title: "My Skills",
    subtitle: "Check out my",
    message1: "Right below are some more technologies I use to build my projects.",
    message2: "See my projects's section.",
    text: "I create successful responsive websites with focus on usability, user experience and best practices. The main area of my expertise is front-end development, HTML, CSS, JS, ReactJS and React Native, building small and medium web apps, mobile apps, features, animations, and coding interactive layouts. I also have full-stack developer experience with Node.js.",
    goToPage: {
      back: "about",
      forward: "projects"
    },
  },
}

export const portfolioContent = { pt, en }