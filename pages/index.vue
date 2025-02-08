<script setup lang="ts">
const jobs = [
  {
    title: 'Programmer',
    titleIcon: 'fa-solid fa-laptop-code',
    company: 'Modern Networks Co.,Ltd.',
    location: 'Ladprao 130, Bangkok.',
    start: 'January 2023',
    end: 'Present',
    descriptions: [
      {
        head: 'Design, Develop, and Maintain Frontend, Backend, and Database Systems.',
        details: [
          'Network Device Management System.',
          'IoT Solutions and Access Control Systems.',
          'User Authentication Systems for Public Internet Access.',
        ]
      },
      {
        head: 'Design and Backup Power Solutions for Network Infrastructure.',
        details: [
          'Configure and optimize network devices for seamless operation.',
        ]
      },
      {
        head: 'Deploy and Manage Server Environments.',
        details: [
          'Install, configure, and maintain Ubuntu Server and Windows Server.',
          'Set up and manage Active Directory (AD) for centralized user and resource management.',
        ]
      },
      {
        head: 'Virtualization and System Deployment.',
        details: [
          'Proficient in deploying and managing operating systems on virtualization platforms such as VMware and VirtualBox.',
        ]
      }
    ]
  },
  {
    title: 'Electronic Software Engineer',
    titleIcon: 'fa-solid fa-microchip',
    company: 'Mitsubishi Electric Automation (Thailand) Co.Ltd.',
    location: 'Bangchan, Bangkok',
    start: 'June 2017',
    end: 'December 2022',
    descriptions: [
      {
        head: 'Embedded Systems & Firmware.',
        details: [
          'Developed and maintained C code for microcontrollers, optimizing performance and reliability.',
        ]
      },
      {
        head: 'Software Development.',
        details: [
          'Built Windows apps using C# and Android apps using Java/Kotlin, focusing on usability and performance.',
        ]
      },
      {
        head: 'Electrical & Electronics.',
        details: [
          'Designed electrical wiring systems and conducted hardware testing.',
          'Analyzed and optimized electronic circuits for efficiency and functionality.',
        ]
      }
    ]
  },
] as IJob[];

const freelanceJobs = [
  {
    title: 'Spinforce Controller',
    titleIcon: 'pi pi-desktop',
    image: '/images/spinforce.jpg',
    company: 'Spinforce Technologies Pte. Ltd.',
    location: 'Singapore',
    start: 'July 2024',
    end: 'Present',
    descriptions: [
      {
        head: 'Built a Cross-Platform Inverter Control App with Rust and Nuxt.js.',
        details: [
          'Developed a Windows/Linux desktop app for inverter control using Rust (backend) and Nuxt.js (frontend).',
          'Refactored and integrated core logic from existing software for a modern, scalable solution.',
          'Ensured high performance, safety, and seamless frontend-backend communication.',
          'Delivered a user-friendly interface for industrial automation.',
        ]
      }
    ]
  },
  {
    title: 'A-Math Online',
    titleIcon: 'pi pi-android',
    image: '/images/amath.svg',
    company: 'EduPLOYS Game and Toy Co.,Ltd.',
    location: 'Rama III, Bangkok',
    start: 'June 2022',
    end: 'June 2023',
    descriptions: [
      {
        head: 'Developed a real-time multiplayer A-Math game using Flutter (frontend) and Golang (backend), connected via gRPC for low-latency communication.',
      },
      {
        head: 'Integrated Firebase Authentication for secure login and Firebase Realtime Database for real-time gameplay synchronization.',
      },
      {
        head: 'Implemented game logic, matchmaking, and real-time interactions, ensuring a seamless user experience.',
      },
      {
        head: 'Optimized backend performance using Golang’s concurrency model, reducing latency and improving scalability.',
      },
      {
        head: 'Delivered a polished, user-friendly app with modular code for future scalability.',
      },
    ]
  }
] as IJob[];

const skills = [
  'C/C++',
  'C#',
  'Java',
  'Kotlin',
  'Flutter/Dart',
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Node.js',
  'Vue.js',
  'Nuxt.js',
  'React.js',
  'Next.js',
  'PHP Laravel',
  'Golang',
  'Rust',
  'REST API',
  'GRPC',
  'Git',
  'SQL',
  'MongoDB',
  'Circuit Analysis',
  'Electronic Measuring',
  'IT technical errors solving',
];

const educations = [
  {
    title: 'Electrical Engineering, KMITL',
    titleIcon: 'pi pi-bolt',
    company: "King Mongkut's Institute of Technology Ladkrabang",
    location: 'Bangkok, Thailand',
    start: '2013',
    end: '2017',
    cert: 'Bachelor of Engineering in Electrical Engineering',
    result: 'GPA: 3.70/4.00'
  },
  {
    title: 'Science Program, MWIT',
    titleIcon: 'fa-solid fa-flask-vial',
    company: 'Mahidol Wittayanusorn School',
    location: 'Nakhon Pathom, Thailand',
    start: '2010',
    end: '2013',
    cert: 'Certificate of Secondary Education',
    result: 'GPA: 3.27/4.00',
  }
] as IEducation[];
</script>

<template>
  <div class="flex flex-col gap-8 p-6 md:p-8">
    <div class="w-full flex flex-col gap-4 items-center">
      <img src="/images/me.jpg" alt="me" class="w-48 md:w-72 rounded-full border-8" :style="{'border-color': 'var(--p-primary-color)'}" />
      <label class="text-xl md:text-3xl lg:text-4xl font-semibold text-center">Hi, I’m
        <label :style="{
          color: 'color-mix(in srgb, var(--p-primary-color) 50%, var(--p-text-color))'
        }">Suriya Kuernkuob.</label>
      </label>
      <label class="text-xl md:text-3xl font-semibold text-center" :style="{
          color: 'color-mix(in srgb, var(--p-primary-color) 80%, var(--p-text-color))'
        }">A software developer.</label>
      <label class="w-full md:w-96 lg:w-[30rem]">Since my childhood, technology has always felt magical to me, sparking a deep attraction. This wonder inspired me to focus on science and math. When I first learned programming, I was amazed by its limitless potential—It goes beyond human memory, improves accuracy, and speeds up computation. Most importantly, it transforms ideas into reality and makes life incredibly easier.</label>
      <ButtonGroup>
        <Button icon="pi pi-discord" icon-class="scale-[1.5]" severity="contrast" as="a" href="https://discordapp.com/users/geminids14" target="_blank"></Button>
        <Button icon="bi bi-line" icon-class="scale-[1.5] translate-y-[1.5px]" severity="contrast" as="a" href="https://line.me/ti/p/qvQ3zsvsQK" target="_blank"></Button>
        <Button icon="pi pi-github" icon-class="scale-[1.25]" severity="contrast" as="a" href="https://github.com/kokoa14" target="_blank"></Button>
      </ButtonGroup>
    </div>
    <div class="flex flex-col gap-4">
      <div class="flex justify-center items-center gap-2">
        <i class="pi pi-briefcase text-xl md:text-3xl"></i>
        <label class="text-xl md:text-3xl font-semibold">Jobs</label>
      </div>
      <div class="flex flex-wrap justify-center gap-4">
        <Job v-for="job in jobs" :job="job" />
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <div class="flex justify-center items-center gap-2">
        <i class="pi pi-briefcase text-xl md:text-3xl"></i>
        <label class="text-xl md:text-3xl font-semibold">Freelance Jobs</label>
      </div>
      <div class="flex flex-wrap justify-center gap-4">
        <Job v-for="job in freelanceJobs" :job="job" />
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <div class="flex justify-center items-center gap-2">
        <i class="pi pi-lightbulb text-xl md:text-3xl"></i>
        <label class="text-xl md:text-3xl font-semibold">Skills</label>
      </div>
      <div class="flex justify-center">
        <div class="flex flex-wrap w-full md:w-96 lg:w-[48rem] justify-center gap-4">
          <Message v-for="skill in skills" severity="contrast">{{skill}}</Message>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <div class="flex justify-center items-center gap-2">
        <i class="pi pi-graduation-cap text-xl md:text-3xl"></i>
        <label class="text-xl md:text-3xl font-semibold">Education</label>
      </div>
      <div class="flex flex-wrap justify-center gap-4">
        <Education v-for="edu in educations" :edu="edu" />
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <div class="flex justify-center items-center gap-2">
        <i class="pi pi-address-book text-xl md:text-3xl"></i>
        <label class="text-xl md:text-3xl font-semibold">Contact</label>
      </div>
      <div class="flex justify-center">
        <Card class="w-full md:w-96 lg:w-[48rem]">
          <template #content>
            <div class="flex flex-col">
              <label class="text-lg md:text-xl font-semibold">
                <i class="pi pi-map-marker me-1"></i>
                Address
              </label>
              <label>No. 2-2/7, PM. Mansion, Ramkhamhaeng 52/2 alley, Ramkhamhaeng road, Hua Mak sub-district, Bang Kapi district, Bangkok, Thailand</label>
              <label class="text-lg md:text-xl font-semibold mt-2">
                <i class="pi pi-phone me-1"></i>
                Phone Number
              </label>
              <a href="tel:0963953845" class="hover:underline">0963953845</a>
              <label class="text-lg md:text-xl font-semibold mt-2">
                <i class="pi pi-envelope me-1"></i>
                E-Mail
              </label>
              <a href="mailto:geminids14@gmail.com" class="hover:underline">geminids14@gmail.com</a>
            </div>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<style scoped>
:deep(.p-message-text) {
  @apply text-xs md:text-base;
}
</style>