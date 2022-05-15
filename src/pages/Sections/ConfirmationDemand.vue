<template>
  <MContainer class="h-full justify-center" BGpath="bg-confirmation1.png">
    <div class="flex w-full text-white items-center lg:flex-col">
      <div class="flex flex-col flex-1 space-y-5 py-6 pr-4 lg:items-center">
        <div
          class="flex flex-col text-2xl leading-7 text-m-orange-200 font-medium"
        >
          <div>Nous vous remercions d’avoir</div>
          <div>rempli notre formulaire</div>
        </div>
        <div class="flex flex-col space-y-4">
          <p>
            Notre équipe vous contactera dans les plus brefs délais pour
            confirmer votre rendez vous.
          </p>
          <p>
            Le service de récupération. De vos appareils comprend. Trois phrases
            :
          </p>
        </div>
        <div class="flex flex-col space-y-3">
          <div class="flex space-x-2">
            <div
              class="
                w-5
                h-5
                bg-m-orange-300
                text-black
                rounded-full
                flex
                justify-center
                items-center
              "
            >
              I
            </div>
            <span> La récupération. De vos appareils à votre domicile </span>
          </div>
          <div class="flex space-x-2">
            <div
              class="
                w-5
                h-5
                bg-m-orange-300
                text-black
                rounded-full
                flex
                justify-center
                items-center
              "
            >
              II
            </div>
            <span>
              l’estimation de ces appareils par nos. Experts au magasin
            </span>
          </div>
          <div class="flex space-x-2">
            <div
              class="
                w-5
                h-5
                bg-m-orange-300
                text-black
                rounded-full
                flex
                justify-center
                items-center
              "
            >
              III
            </div>
            <span>
              Un devis, sans engagement d’achat, vous sera proposé le jour meme
              de 24h
            </span>
          </div>
        </div>
        <MButton> <span> Contactez-nous </span> </MButton>
      </div>
      <div class="relative lg:hidden">
        <img
          src="/images/bg-confirmation2.png"
          class="w-[25rem] h-auto"
          alt=""
        />
      </div>
    </div>
  </MContainer>
</template>