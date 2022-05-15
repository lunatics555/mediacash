<template>
  <div class="py-4 flex text-white lg:flex-col">
    <div class="flex flex-col w-1/2 space-y-5 py-6 lg:w-full">
      <div class="flex flex-col text-2xl leading-7">
        <div class="text-m-orange-200 font-medium">
          Gagnez de l’argent a domicile
        </div>
        <div>En revendant vos appareils</div>
        <div>height-tech</div>
      </div>
      <p>
        Le service de reprise a domicile de Mediacash est un service de
        recuperation a domicile des produits et appareils height-tech que vous
        souhaitez revendre, . Pour commencer , veuillez remplir le formulaire
        ci-dessous.
      </p>
      <MButton class="lg:hidden" @click="scrollToForm"
        >Remplir le formulaire</MButton
      >
    </div>
    <div class="flex w-1/2 justify-center items-center lg:w-full">
      <img src="/images/delivery.png" class="w-[18.5rem] h-[18.5rem]" alt="" />
    </div>
    <div class="hidden lg:flex w-full justify-end">
      <MButton round class="mb-4" @click="scrollToForm"> formulaire</MButton>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    scrollToForm() {
      // element which needs to be scrolled to
      var element = document.querySelector("#demande-form");

      // scroll to element
      element.scrollIntoView();
    },
  },
};
</script>