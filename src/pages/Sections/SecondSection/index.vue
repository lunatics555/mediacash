<!-- @format -->

<template>
  <div class="flex py-10 space-x-4 lg:flex-col">
    <validation-observer
      v-slot="{ invalid }"
      class="w-1/2 flex flex-col items-center lg:w-full"
    >
      <div class="flex flex-col" id="demande-form">
        <div class="grid grid-cols-2 gap-3 shadow-m-sm p-4 bg-white">
          <m-input
            label="Prénom"
            placeholder="Prénom"
            :rules="'required'"
            v-model="form.prenom"
            type="text"
          />
          <m-input
            label="Nom"
            placeholder="Nom"
            :rules="'required'"
            v-model="form.nom"
            type="text"
          />
          <m-input
            label="E-mail"
            placeholder="Ex:mediacash@contact.com"
            :rules="'required'"
            v-model="form.email"
            type="text"
          />
          <m-input
            label="N°Portable"
            placeholder="N°Portable"
            :rules="'required'"
            v-model="form.numero_portable"
            type="text"
          />
          <m-input
            class="col-span-2"
            label="Adresse"
            placeholder="Adresse"
            :rules="'required'"
            v-model="form.adresse"
            type="text"
          />
          <div class="flex flex-col col-span-2 mb-2">
            <span> Type d'appareil(s)</span>
            <div class="grid grid-cols-6 gap-2 mt-2 lg:grid-cols-3">
              <div
                v-for="(device, index) in devices"
                :key="index"
                class="cursor-pointer"
                @click="changeActiveDevice(device)"
              >
                <div
                  class="flex flex-col items-center border-2 rounded-md"
                  :class="
                    device.is_active
                      ? ' border-m-orange-300 bg-m-orange-300'
                      : ' border-gray-500'
                  "
                >
                  <div
                    class="
                      bg-white
                      rounded-md
                      flex
                      justify-center
                      items-center
                      w-14
                      h-14
                      lg:w-full
                    "
                  >
                    <img
                      :src="`/images/${device.icon}.png`"
                      class="w-9 h-auto"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <span style="font-size: 10px"> {{ device.nom }}</span>
                </div>
              </div>
            </div>
          </div>
          <div
            v-for="(produit, index) in form.produits"
            :key="index"
            class="grid grid-cols-2 gap-3 col-span-2"
          >
            <div v-for="(item, key, index2) in produit" :key="`sub-${index2}`">
              <m-input
                :label="labels_devices[key]"
                :placeholder="labels_devices[key]"
                :rules="'required'"
                v-model="produit[key]"
                type="text"
              />
            </div>
            <div
              class="flex space-x-2 items-center cursor-pointer"
              @click="removeProduit"
              v-if="form.produits.length > 1"
            >
              <div
                class="
                  border
                  text-lg
                  font-extrabold
                  rounded-full
                  w-5
                  h-5
                  flex
                  justify-center
                  items-center
                  border-red-500
                  text-red-500
                "
              >
                -
              </div>
              <span> supprimer </span>
            </div>
          </div>
          <div
            class="flex space-x-2 items-center cursor-pointer"
            @click="pushProduit"
          >
            <div
              class="
                border
                text-lg
                font-extrabold
                rounded-full
                w-5
                h-5
                flex
                justify-center
                items-center
                border-m-blue-200
                text-m-blue-200
              "
            >
              +
            </div>
            <span> Ajouter un produit</span>
          </div>
          <m-input
            class="col-span-2"
            label="Votre disponibilité"
            placeholder=""
            :rules="'required'"
            v-model="form.disponibilite"
            type="text"
          />
          <div class="flex flex-col">
            <span> étes vous deja client ? </span>
            <div class="flex space-x-2 mt-1">
              <m-radio
                label="oui"
                :value="form.is_client"
                @change="change($event)"
              >
                Oui
              </m-radio>
              <m-radio
                label="non"
                :value="form.is_client"
                @change="change($event)"
              >
                Non
              </m-radio>
            </div>
          </div>
          <div class="col-span-2 flex justify-end">
            <m-button @click.prevent="submit(invalid)" outline round>
              Envoyer votre demande
            </m-button>
          </div>
        </div>
        <div class="flex flex-col mt-6 space-y-2">
          <m-radio
            label="_majeur"
            :value="form.is_accept_majeur"
            @change="form.is_accept_majeur = $event"
          >
            Je confirme que je suis majeur(e)
          </m-radio>
          <m-radio
            label="condition"
            :value="form.is_accpet_condition"
            @change="form.is_accpet_condition = $event"
          >
            <p class="flex-1">
              <span> En utilisant notre service , vous acceptez nos </span>
              <span class="text-m-blue-200">
                Conditions générales d’utilisation du service
              </span>
            </p>
          </m-radio>
        </div>
      </div>
    </validation-observer>

    <div class="flex flex-col w-1/2 items-center lg:hidden">
      <div class="shadow-m-sm p-6">
        <div class="flex flex-col text-2xl leading-6 text-center mb-3">
          <span class="font-bold"> Revendez vos appareils </span>
          <span>en remplissant le formulaire </span>
        </div>
        <p class="text-center mb-[50px]">
          <span>
            Si vous avez des téléphones, tablettes ordinateurs, consoles ou des
            jeux vidéos, que vous voulez revendre,
          </span>
          <span class="font-bold">
            Medicash met à votre disposition un service de récupération à
            domicile
          </span>
        </p>
        <div class="flex justify-center">
          <img
            class="w-[20rem] h-auto"
            src="/images/moneyProducts.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        prenom: null,
        nom: null,
        email: null,
        numero_portable: null,
        adresse: null,
        produits: [],
        disponibilite: null,
        is_client: true,
        is_accept_majeur: false,
        is_accpet_condition: false,
      },
      devices: [
        {
          nom: "Téléphone",
          slug: "telephone",
          icon: "telephone",
          is_active: true,
        },
        {
          nom: "Ordinateur",
          slug: "ordinateur",
          icon: "ordinateur",
          is_active: false,
        },
        {
          nom: "Tablette",
          slug: "tablette",
          icon: "tablette",
          is_active: false,
        },
        {
          nom: "Console",
          slug: "console",
          icon: "console",
          is_active: false,
        },
        {
          nom: "Vinyles",
          slug: "vinyles",
          icon: "vinyles",
          is_active: false,
        },
        {
          nom: "Figurines",
          slug: "figurines",
          icon: "figurines",
          is_active: false,
        },
      ],
      labels_devices: {
        //labels telephone
        marque_telephone: "Marque du téléphones",
        modele_telephone: "Modèle",
        capacite_telephone: "Capacité",
        couleur_telephone: "Couleur",
        //labels ordinateur
        marque_ordinateur: "Marque du ordinateur",
        modele_ordinateur: "Modèle",
        capacite_ordinateur: "Capacité",
        couleur_ordinateur: "Couleur",

        //labels tablette
        marque_tablette: "Marque du tablette",
        modele_tablette: "Modèle",
        capacite_tablette: "Capacité",
        couleur_tablette: "Couleur",

        //labels console
        marque_console: "Marque du console",
        modele_console: "Modèle",
        capacite_console: "Capacité",
        couleur_console: "Couleur",

        //labels vinyles
        marque_vinyles: "Marque du vinyles",
        modele_vinyles: "Modèle",
        capacite_vinyles: "Capacité",
        couleur_vinyles: "Couleur",

        //labels figurines
        marque_figurines: "Marque du figurines",
        modele_figurines: "Modèle",
        capacite_figurines: "Capacité",
        couleur_figurines: "Couleur",
      },
      devices_form: {
        telephone: {
          marque_telephone: null,
          modele_telephone: null,
          capacite_telephone: null,
          couleur_telephone: null,
        },
        ordinateur: {
          marque_ordinateur: null,
          modele_ordinateur: null,
          capacite_ordinateur: null,
          couleur_ordinateur: null,
        },
        tablette: {
          marque_tablette: null,
          modele_tablette: null,
          capacite_tablette: null,
          couleur_tablette: null,
        },
        console: {
          marque_console: null,
          modele_console: null,
          capacite_console: null,
          couleur_console: null,
        },
        vinyles: {
          marque_vinyles: null,
          modele_vinyles: null,
          capacite_vinyles: null,
          couleur_vinyles: null,
        },
        figurines: {
          marque_figurines: null,
          modele_figurines: null,
          capacite_figurines: null,
          couleur_figurines: null,
        },
        client_id:
          "745945640591-4obbanncdmuh6am0pn8bic7312tnkp69.apps.googleusercontent.com",
        api_key: "AIzaSyAjxyp1n5bINUbKzym6NajJMokUNwmpDQ8",
        discovery_doc:
          "https://sheets.googleapis.com/$discovery/rest?version=v4",
        tokenClient: "",
        gapiInited: false,
        gisInited: false,
      },
    };
  },
  mounted() {
    this.resetProduits();
  },
  computed: {
    activeDevice() {
      return this.devices.find((device) => device.is_active);
    },
  },

  methods: {
    submit(invalid) {
      this.$router.push({ name: "ConfirmationDemand" });
      //   !invalid
      //     ? console.log("Tous les champs sont obligatoires.")
      //     : this.$router.push({ name: "ConfirmationDemand" });
    },
    change(label) {
      this.form.is_client = label;
    },
    resetProduits() {
      this.form.produits = [];
      this.pushProduit();
    },
    pushProduit() {
      this.form.produits.push(
        Object.assign({}, this.devices_form[this.activeDevice.slug])
      );
    },
    removeProduit(index) {
      this.form.produits.splice(index, 1);
    },
    changeActiveDevice(device) {
      this.devices.forEach((item) => {
        item.is_active = item.slug === device.slug;
      });
      this.resetProduits();
    },
  },
};
</script>
