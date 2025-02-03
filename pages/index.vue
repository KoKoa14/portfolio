<script setup lang="ts">
const jobs = [
  {
    title: 'Programmer',
    titleIcon: 'pi pi-user',
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
    titleIcon: 'pi pi-user',
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
    titleIcon: 'pi pi-bolt',
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
        <Button class="!px-1.5 !py-0" severity="contrast" as="a" href="https://line.me/ti/p/qvQ3zsvsQK" target="_blank">
          <svg class="h-6 translate-y-[1px]" viewBox="0 0 24 24">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C17.5141 2 22 5.6405 22 10.1152C22 11.9059 21.3056 13.5189 19.8565 15.1083H19.8569C17.7589 17.5229 13.0673 20.4642 12 20.914C10.9622 21.3513 11.0824 20.6672 11.1299 20.3969C11.1312 20.3892 11.1325 20.3819 11.1337 20.3749C11.1592 20.2245 11.2765 19.5188 11.2765 19.5188C11.3101 19.2634 11.345 18.8673 11.2441 18.6146C11.1321 18.3363 10.6888 18.1918 10.3632 18.1214C5.55755 17.4864 2 14.1267 2 10.1152C2 5.6405 6.48633 2 12 2ZM9.97218 7.95281H9.2631C9.15766 7.95281 9.07208 8.03839 9.07208 8.14374V12.508C9.07208 12.6135 9.15766 12.699 9.2631 12.699H9.97218C10.0777 12.699 10.1631 12.6135 10.1631 12.508V8.14374C10.1631 8.03839 10.0777 7.95281 9.97218 7.95281ZM8.47184 12.508C8.47184 12.6135 8.38636 12.6989 8.28091 12.6989H5.47142C5.36598 12.6989 5.2805 12.6135 5.2805 12.508V8.14381C5.2805 8.03836 5.36598 7.95288 5.47142 7.95288H6.18069C6.28566 7.95288 6.37152 8.03874 6.37152 8.14381V11.6079H8.28091C8.38589 11.6079 8.47184 11.6938 8.47184 11.7987V12.508ZM15.8637 12.6989H18.6732C18.7787 12.6989 18.8641 12.6135 18.8641 12.508V11.7987C18.8641 11.6938 18.7782 11.6079 18.6732 11.6079H16.7639V10.8715H18.6732C18.7787 10.8715 18.8641 10.786 18.8641 10.6805V9.97128C18.8641 9.8663 18.7782 9.78035 18.6732 9.78035H16.7639V9.0439H18.6732C18.7787 9.0439 18.8641 8.95842 18.8641 8.85297V8.14381C18.8641 8.03874 18.7782 7.95288 18.6732 7.95288H15.8637C15.7583 7.95288 15.6728 8.03836 15.6728 8.14381V12.508C15.6728 12.6135 15.7583 12.6989 15.8637 12.6989ZM14.091 7.95281H14.8001C14.9056 7.95281 14.9911 8.03839 14.9911 8.14374V12.508C14.9911 12.6135 14.9056 12.699 14.8001 12.699H14.0949C14.0776 12.699 14.0609 12.6964 14.045 12.6922L14.0437 12.692L14.0422 12.6916C14.0377 12.6903 14.0333 12.6888 14.029 12.6873L14.023 12.6851C14.0198 12.6839 14.0168 12.6826 14.0136 12.6811C14.0105 12.6797 14.0075 12.6782 14.0045 12.6766C14.0025 12.6757 14.0007 12.6746 13.9988 12.6736C13.9948 12.6713 13.9907 12.6689 13.9868 12.6663L13.9847 12.6648C13.966 12.6521 13.9492 12.6362 13.9354 12.6167L11.9361 9.91675V12.508C11.9361 12.6135 11.8506 12.699 11.7452 12.699H11.036C10.9306 12.699 10.8451 12.6135 10.8451 12.508V8.14374C10.8451 8.03839 10.9306 7.95281 11.036 7.95281H11.7412C11.7435 7.95281 11.7456 7.95309 11.7479 7.95318C11.7513 7.95328 11.7546 7.95337 11.758 7.95375L11.7683 7.95487L11.7764 7.95618L11.7877 7.95862L11.7946 7.9604C11.7985 7.96153 11.8023 7.96274 11.8062 7.96415L11.8124 7.9664C11.8161 7.9679 11.8199 7.96949 11.8235 7.97118L11.8296 7.97418C11.8332 7.97596 11.8367 7.97793 11.8401 7.97999L11.8459 7.98346C11.8495 7.9858 11.8529 7.98805 11.8561 7.9904L11.8613 7.99424C11.8649 7.99714 11.8682 8.00005 11.8716 8.00305L11.8752 8.00633C11.8792 8.01008 11.883 8.01411 11.8867 8.01823L11.8879 8.01964C11.8934 8.02583 11.8986 8.03239 11.9033 8.03932L13.9 10.7359V8.14374C13.9 8.03839 13.9855 7.95281 14.091 7.95281Z" fill="currentColor"></path>
          </svg>
        </Button>
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