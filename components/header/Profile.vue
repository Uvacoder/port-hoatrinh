<template>
  <!--Header-->
  <header
    class="main-header"
    :style="{ backgroundImage: `url(${familyImage})` }"
  >
    <div class="container">
      <div class="row personal-profile">
        <div class="md:m-w-4/12 personal-profile__avatar">
          <img class="" src="~/assets/img/kyle-bw.png" alt="avatar" />
        </div>
        <div class="md:w-8/12 w-full relative px-3">
          <p class="personal-profile__name">Trinh Hai Hoa_</p>
          <p class="personal-profile__work">
            WordPress Speed Expert, Full Stack Developer
          </p>
          <div class="personal-profile__contacts">
            <dl class="contact-list contact-list__opacity-titles">
              <dt>A.k.a:</dt>
              <dd>Kyle</dd>
              <dt>Age:</dt>
              <dd>{{ age }}</dd>
              <dt>Email:</dt>
              <dd>
                <a :href="`mailto:${email}`">{{ email }}</a>
              </dd>
              <dt>Live:</dt>
              <dd>Hanoi, Vietnam</dd>
            </dl>
          </div>
          <p class="personal-profile__social">
            <a :href="github" target="_blank">
              <FaIcon :icon="['fab', 'github']" />
            </a>
            <a :href="facebook" target="_blank">
              <FaIcon :icon="['fab', 'facebook-square']" />
            </a>
            <a :href="skype" target="_blank">
              <FaIcon :icon="['fab', 'skype']" />
            </a>
          </p>
        </div>
      </div>
    </div>
  </header>
  <!--Header-->
</template>

<script setup lang="ts">
import { usePersonalStore } from "~~/store/personal";
import familyImage from "~/assets/img/family.jpeg";

const personalStore = usePersonalStore();
const age = computed(() => personalStore.age);
const email = computed(() => personalStore.email);
const facebook = computed(() => personalStore.facebook);
const github = computed(() => personalStore.github);
const skype = computed(() => personalStore.skype);
</script>

<style scoped lang="postcss">
header.main-header {
  @apply bg-green-50 h-full bg-no-repeat bg-cover relative mb-12 lg:mb-0;

  &:before {
    background: linear-gradient(
      54deg,
      rgb(20 158 24 / 95%) 34%,
      rgb(59 130 246 / 50%)
    );
    content: "";
    @apply h-full left-0 right-0 absolute z-0;
  }

  .personal-profile {
    @apply flex flex-wrap text-white font-heading pt-28;

    &__avatar {
      @apply hidden lg:inline-block flex-auto;

      img {
        @apply rounded shadow-md object-cover mt-3 relative top-12;
        height: 380px;
      }
    }

    &__name {
      @apply text-5xl leading-10 font-bold mt-12 mb-3;
    }

    &__work {
      @apply text-base leading-7 mb-12;
    }

    &__contacts {
      @apply mb-6;

      .contact-list {
        @apply text-base leading-7 font-heading;

        &__opacity-titles dt {
          @apply opacity-40;
        }

        dt {
          @apply float-left font-bold uppercase;
        }

        dd {
          @apply pl-28 mb-4 ml-0;

          a {
            @apply text-white;
          }
        }
      }
    }

    &__social {
      @apply mb-10 float-left;

      a {
        @apply text-2xl mr-5 opacity-40 text-white;

        &:hover {
          @apply opacity-100;
        }

        .upwork-icon {
          width: 1em;
          height: 1em;
          margin-bottom: 4px;
          @apply inline-block;
        }
      }
    }
  }
}
</style>
