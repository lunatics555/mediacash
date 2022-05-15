<template>
  <div class="flex justify-between py-4 lg:flex-col lg:space-y-4">
    <div class="flex flex-col">
      <p class="text-2xl font-bold">
        <span>media</span><span class="text-m-orange-300">cash</span>.ma
      </p>
      <p class="flex flex-col">
        <span> Mediacash est votre destination pour acheter, </span>
        <span>Vendre ou réparer des produits hight-tech,</span>
        <span>Gaming et Pop-culture à Casablanca</span>
      </p>
    </div>
    <div class="flex flex-col">
      <div class="flex flex-col">
        <p>
          <span> 307. Boulevard Ziraoui, Casablanca </span>
          <img src="" alt="" />
        </p>
        <p><span> 05 22 20 50 / 06 11 20 02 55 </span> <img src="" alt="" /></p>
        <p>
          <span> mediacash.ziraoui@cashandretail.com </span>
          <img src="" alt="" />
        </p>
      </div>

      <p class="flex space-x-1 mt-2">
        <a
          v-for="(reseau_social, index) in reseaux_social"
          :key="index"
          :href="reseau_social.link"
        >
          <img
            :src="`/images/${reseau_social.icon}.png`"
            class="w-8 h-8"
            alt=""
          />
        </a>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      reseaux_social: [
        {
          icon: "facebook",
          link: "#",
        },
        {
          icon: "instagram",
          link: "#",
        },
        {
          icon: "linkedin",
          link: "#",
        },
        {
          icon: "tiktok",
          link: "#",
        },
        {
          icon: "whatsapp",
          link: "#",
        },
        {
          icon: "youtube",
          link: "#",
        },
      ],
    };
  },
};
</script>