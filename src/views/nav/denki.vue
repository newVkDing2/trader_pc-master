<template>
  <div>
    <main data-s-0c961333-e816-43f7-8ba0-a706342614a8="" class="sd appear">
      <div data-s-d7321b07-2e27-45a0-be32-78c07dad332e="" class="sd appear"><img
        data-s-a2937385-521d-4253-8531-d1610213b117="" class="sd appear" alt=""
        src="https://assets.coincheck.com/images/lp/denki/main_img.svg" loading="lazy">
        <p data-s-68ebee98-6d81-4c45-a6f4-03e98391b3fa="" data-r-1_0_1_68ebee98-6d81-4c45-a6f4-03e98391b3fa=""
           class="text sd appear">{{ $t('denki.mainTitle') }}<br>{{ $t('denki.mainTitle2') }} <br>{{ $t('denki.mainTitle3') }}</p>
        <div data-s-3c0b1c4b-2217-47c9-81de-b93d7e83046c="" class="sd appear"><p
          data-s-cc10479f-6ec8-44c3-8b12-97307f228c5a="" data-r-0_2_0_1_cc10479f-6ec8-44c3-8b12-97307f228c5a=""
          class="text sd appear">{{ $t('denki.mainTitle') }}<br>{{ $t('denki.mainTitle2') }}<br>{{ $t('denki.mainTitle3') }}</p></div>
        <a  @click="$router.push({ path: '/user/register' })"
            rel="noopener" target="_blank"
           data-s-dfdd0ce3-9fc6-4c9c-ae59-bc54a8d53357=""
            class="sd appear"
            style="cursor: pointer"
        >
          <p
          data-s-48b25eed-4052-4964-a478-b0abaef6db83=""
          data-r-0_3_0_1_48b25eed-4052-4964-a478-b0abaef6db83=""
          class="text sd appear">
          {{ $t('denki.register') }}
          </p>
        </a>
        <div data-s-5b551e06-8d43-4a97-adc2-fa7010788a68="" class="sd appear">
        <a
          style="cursor: pointer"
           @click="$router.push({ path: '/user/login' })" rel="noopener" target="_blank"
          data-s-9b49e601-3687-4850-81d4-385deb374387="" data-r-0_4_0_1_9b49e601-3687-4850-81d4-385deb374387=""
          class="text sd appear">{{ $t('denki.existingAccount') }}
        </a></div>
        <div data-s-75f30bd3-062e-49e2-944f-9d6254bfd713="" class="sd appear">
          <div data-s-c9065889-b02a-412a-8132-83cc717f6e5d="" class="sd appear"><p
            data-s-4f938bb5-7452-4dd9-b2ad-149c4104d7bc="" data-r-0_0_5_0_1_4f938bb5-7452-4dd9-b2ad-149c4104d7bc=""
            class="text sd appear">
            {{ $t('denki.termsAgreement') }}</p><a
             @click="handleClick"
            data-s-2a6e9af8-4a6e-4049-983d-1f6e2c7852fb="" data-r-1_0_5_0_1_2a6e9af8-4a6e-4049-983d-1f6e2c7852fb=""
            class="text sd appear">{{ $t('denki.terms') }}</a>
            <p data-s-4cd32eac-20ba-412b-943d-04617e446916="" data-r-2_0_5_0_1_4cd32eac-20ba-412b-943d-04617e446916=""
               class="text sd appear">{{ $t('denki.and') }}</p><a
               @click="handleClick"
              data-s-b1bd69ad-ffdb-44ee-a5cc-d2594ac7a5db="" data-r-3_0_5_0_1_b1bd69ad-ffdb-44ee-a5cc-d2594ac7a5db=""
              class="text sd appear">{{ $t('denki.privacyPolicy') }}</a></div>
          <p data-s-043a542f-7fe4-4777-babb-8f82b816f5f5="" data-r-1_5_0_1_043a542f-7fe4-4777-babb-8f82b816f5f5=""
             class="text sd appear">{{ $t('denki.agreeTerms') }}</p></div>
        <div data-s-36fb2034-165c-41fc-9eef-99b92ef5c4c1="" class="sd appear">
          <div data-s-cd02206b-faa7-4502-a7dc-236b6092cd71="" class="sd appear"><p
            data-s-32d28329-8edc-4c2f-ae1f-01313e20f921="" data-r-0_0_6_0_1_32d28329-8edc-4c2f-ae1f-01313e20f921=""
            class="text sd appear">{{ $t('denki.termsAgreement') }}</p><a
             @click="handleClick"
            data-s-99971bf0-1644-4487-9f3d-0f2f7c16617a="" data-r-1_0_6_0_1_99971bf0-1644-4487-9f3d-0f2f7c16617a=""
            class="text sd appear">{{ $t('denki.terms') }}</a>
            <p data-s-261f02e6-8636-4d8d-bfec-f9f6fbd6c66b="" data-r-2_0_6_0_1_261f02e6-8636-4d8d-bfec-f9f6fbd6c66b=""
               class="text sd appear">と</p></div>
          <div data-s-b2b7eeda-e39b-433f-9609-665b0fe28c48="" class="sd appear"><a
             @click="handleClick"
            data-s-263a2b7f-d961-439d-92bb-d45913e2f326="" data-r-0_1_6_0_1_263a2b7f-d961-439d-92bb-d45913e2f326=""
            class="text sd appear">{{ $t('denki.privacyPolicy') }}</a>
            <p data-s-3a3ab199-fe68-4f96-92c1-93c885782267="" data-r-1_1_6_0_1_3a3ab199-fe68-4f96-92c1-93c885782267=""
               class="text sd appear">{{ $t('denki.agreeTerms') }}</p></div>
        </div>
      </div>
      <div data-s-e13ec274-3b5a-4b76-8bc1-5552becd3eda="" class="sd appear"><img
        data-s-69082a17-e118-4a65-ba48-e668daea0a03="" class="sd" alt=""
        src="https://assets.coincheck.com/images/lp/denki/main_img.svg" loading="lazy"></div>
    </main>
    <div data-s-6513b9ad-9f7a-4fee-bbcb-d58456ef9824="" class="sd appear"></div>
    <main data-s-226d9f29-04d6-4017-b7a6-c2b6498d9e64="" class="sd appear">
      <div data-s-af49a239-5a2e-4b3c-898c-8ddf70ad5b84="" class="sd appear">
        <p data-s-ddd9ae52-c849-49d8-bf65-10e0e81b2c2e="" data-r-0_0_3_ddd9ae52-c849-49d8-bf65-10e0e81b2c2e=""
           class="text sd appear">{{ $t('denki.features') }}</p></div>
      <div data-s-abf03083-8dd5-4100-a414-621108e23ca6="" class="sd appear">
        <div data-s-ef9ce7bb-585f-4c07-b7eb-8adbfa7bbd34="" class="sd appear">
          <div data-s-cb7f1a70-8ba3-4574-9a57-e35711147abd="" class="sd appear">
            <div data-s-3818e2a6-5b47-4968-80b3-16e8f9867c94="" data-r-0_0_0_1_3_3818e2a6-5b47-4968-80b3-16e8f9867c94=""
                 class="image sd">
            </div>
            <p data-s-e52c5fa7-f73c-4fe8-a4f7-b19d97a5adb0="" data-r-1_0_0_1_3_e52c5fa7-f73c-4fe8-a4f7-b19d97a5adb0=""
               class="text sd appear">{{ $t('denki.bitcoinRewardPlan') }}</p>
            <p data-s-b3a5bf2f-0e0e-4699-b8c2-782bb73fa117="" data-r-2_0_0_1_3_b3a5bf2f-0e0e-4699-b8c2-782bb73fa117=""
               class="text sd appear">{{ $t('denki.rewardRate') }}
               <br>{{ $t('denki.rewardRate2') }}</p></div>
        </div>
        <div data-s-bf970e80-a040-4bd2-ab7d-faeedfd2dd26="" class="sd appear">
          <div data-s-5910c5ee-8be7-46fa-8ec8-7f9eeb16a885="" class="sd appear">
            <div data-s-5bdb173c-2ba7-42f4-8665-628252079a7b="" data-r-0_0_1_1_3_5bdb173c-2ba7-42f4-8665-628252079a7b=""
                 class="image sd">
            </div>
            <p data-s-11cf952a-86cc-4200-8833-2c6acaf90088="" data-r-1_0_1_1_3_11cf952a-86cc-4200-8833-2c6acaf90088=""
               class="text sd appear">{{ $t('denki.bitcoinPaymentPlan') }}</p>
            <p data-s-8c1c3248-e21d-4882-bfc7-b1b38a36ba22="" data-r-2_0_1_1_3_8c1c3248-e21d-4882-bfc7-b1b38a36ba22=""
               class="text sd appear">{{ $t('denki.discountRate') }}<br>{{ $t('denki.discountRate2') }}</p></div>
          <div data-s-2025bf08-1515-4eef-8c8e-ba2593486fe3="" class="sd appear">
            <div data-s-bd146f22-750f-4da1-a33c-df0d439a7ca1="" class="sd appear">
              <div data-s-ad2d92a9-0697-4c01-b12d-51390588a414=""
                   data-r-0_0_1_1_1_3_ad2d92a9-0697-4c01-b12d-51390588a414="" class="image sd">

              </div>
              <p data-s-462d2b2d-424c-4395-a7ce-2ba354973faf=""
                 data-r-1_0_1_1_1_3_462d2b2d-424c-4395-a7ce-2ba354973faf="" class="text sd appear">{{ $t('denki.qualityGuarantee') }}</p>
              <p data-s-f42f48b1-88ca-4983-ad1b-17b97ea87adc=""
                 data-r-2_0_1_1_1_3_f42f48b1-88ca-4983-ad1b-17b97ea87adc="" class="text sd appear">{{ $t('denki.qualityGuarantee') }}<br>{{ $t('denki.qualityGuarantee2') }}<br>{{ $t('denki.qualityGuarantee3') }}
              </p></div>
            <div data-s-da92d3e7-0c8c-45a5-8443-65bc2806db5d="" class="sd appear">
              <div data-s-bd32a4c9-9808-4903-bf41-6c3089f325e3=""
                   data-r-0_1_1_1_1_3_bd32a4c9-9808-4903-bf41-6c3089f325e3="" class="image sd">

              </div>
              <p data-s-70fc9c19-a18b-4a32-acf7-87cd3b0049ce=""
                 data-r-1_1_1_1_1_3_70fc9c19-a18b-4a32-acf7-87cd3b0049ce="" class="text sd appear">{{ $t('denki.nationwide') }}</p>
              <p data-s-69697398-717b-4c3a-8f20-b7881a35a03f=""
                 data-r-2_1_1_1_1_3_69697398-717b-4c3a-8f20-b7881a35a03f="" class="text sd appear">
                 {{ $t('denki.supplyArea') }}
                 <br>
                 {{ $t('denki.supplyArea2') }}
              </p></div>
          </div>
        </div>
      </div>
      <div data-s-b1ecba24-9a26-4328-be8e-8196f103298c="" class="sd appear">
        <div data-s-071d2f3a-346e-43ac-80c4-4c7dfda73737="" class="sd appear">
          <div data-s-56e14068-aa07-41bc-b030-1f756880385b="" data-r-0_0_2_3_56e14068-aa07-41bc-b030-1f756880385b=""
               class="image sd">

          </div>
          <p data-s-98d42e64-28e9-4c8c-bbcd-16f4b2622941="" data-r-1_0_2_3_98d42e64-28e9-4c8c-bbcd-16f4b2622941=""
             class="text sd appear">{{ $t('denki.bitcoinPaymentPlan') }}</p>
          <p data-s-e6a7a9e8-1a8a-4765-9e21-0f5c3afcf245="" data-r-2_0_2_3_e6a7a9e8-1a8a-4765-9e21-0f5c3afcf245=""
             class="text sd appear">
             {{ $t('denki.discountRate') }}
             <br>
             {{ $t('denki.q1') }}
             </p></div>
        <div data-s-883a3bee-a175-4f12-bbfc-4ae5cfed4b9d="" class="sd appear">
          <div data-s-8a6fb345-8108-4770-828c-5d181b46ea54="" class="sd appear">
            <div data-s-4085e993-f202-44e5-b28a-1b38dfb474bc="" data-r-0_0_1_2_3_4085e993-f202-44e5-b28a-1b38dfb474bc=""
                 class="image sd appear">

            </div>
            <p data-s-f48eb3a1-36b6-41ad-ab88-f0b098b1b05b="" data-r-1_0_1_2_3_f48eb3a1-36b6-41ad-ab88-f0b098b1b05b=""
               class="text sd appear">
               {{ $t('denki.qualityGuarantee') }}
               </p>
            <p data-s-643fa36b-874a-4267-bf23-2e8e255f9e88="" data-r-2_0_1_2_3_643fa36b-874a-4267-bf23-2e8e255f9e88=""
               class="text sd appear">
               {{ $t('denki.q3') }}

               <br>{{ $t('denki.q2') }}


               </p></div>
          <div data-s-0422300a-f46c-47cb-8dab-094e2092c4ab="" class="sd appear">
            <div data-s-f342ea81-19d7-4dee-90a8-9eec4d5829ad="" data-r-0_1_1_2_3_f342ea81-19d7-4dee-90a8-9eec4d5829ad=""
                 class="image sd appear">

            </div>
            <p data-s-cb7461f8-8fca-490e-bb1c-eb45be052144="" data-r-1_1_1_2_3_cb7461f8-8fca-490e-bb1c-eb45be052144=""
               class="text sd appear">
               {{ $t('denki.nationwide') }}
               {{ $t('denki.supplyArea2') }}
               </p>
            <p data-s-b4090d16-cef4-4cfc-b3a6-185c431ca157="" data-r-2_1_1_2_3_b4090d16-cef4-4cfc-b3a6-185c431ca157=""
               class="text sd appear">
               {{ $t('denki.supplyArea') }}


               <br>
               {{ $t('denki.supplyArea2') }}


               </p></div>
        </div>
      </div>
      <div data-s-0dbc97c8-f694-4896-a6a3-68ecda3787df="" class="sd appear">
        <div data-s-abc58190-ebe8-4b2b-8ff1-88e134c5920a="" data-r-0_3_3_abc58190-ebe8-4b2b-8ff1-88e134c5920a=""
             class="image sd appear">
        </div>
        <p data-s-85b021e3-907a-4f9c-b0b0-595fd5009c27="" data-r-1_3_3_85b021e3-907a-4f9c-b0b0-595fd5009c27=""
           class="text sd appear">
           {{ $t('denki.bitcoinPaymentPlan') }}

           </p>
        <p data-s-c94c7419-f40d-4ee8-ac19-8bd6d48d2d62="" data-r-2_3_3_c94c7419-f40d-4ee8-ac19-8bd6d48d2d62=""
           class="text sd appear">
           {{ $t('denki.discountRate') }}

           <br>
           {{ $t('denki.q1') }}
           </p></div>
      <div data-s-088a876b-227d-4b3b-b02e-3b0664953d6a="" class="sd appear">
        <div data-s-4d9f371e-01fa-4646-aaa4-5b8ae24ec3e3="" class="sd appear">
          <div data-s-8fd3dde5-7067-40e4-9ac5-b308dae2fa5d="" data-r-0_0_4_3_8fd3dde5-7067-40e4-9ac5-b308dae2fa5d=""
               class="image sd">
          </div>
          <p data-s-36afb633-fa8a-4d86-92d9-6bee66de32ab="" data-r-1_0_4_3_36afb633-fa8a-4d86-92d9-6bee66de32ab=""
             class="text sd appear">
             {{ $t('denki.qualityGuarantee') }}
             </p>
          <p data-s-5c9cca19-b9a7-4bc7-9951-b69aa74afd2d="" data-r-2_0_4_3_5c9cca19-b9a7-4bc7-9951-b69aa74afd2d=""
             class="text sd appear">
             {{ $t('denki.stableSupply') }}
             <br>{{ $t('denki.stableSupply2') }}
             <br>{{ $t('denki.stableSupply3') }}

             </p></div>
        <div data-s-ecacccdb-1f61-47e4-8f6f-6ecbe3f87751="" class="sd appear">
          <div data-s-3dc243a4-5140-4b8b-9f10-f5823d19f53b="" data-r-0_1_4_3_3dc243a4-5140-4b8b-9f10-f5823d19f53b=""
               class="image sd appear">
          </div>
          <p data-s-7357ecb0-3748-4638-86be-6242e6c0e9c1="" data-r-1_1_4_3_7357ecb0-3748-4638-86be-6242e6c0e9c1=""
             class="text sd appear">
             {{ $t('denki.nationwide') }}

             </p>
          <p data-s-bd6f247f-9efc-45f2-ad36-eb618650f2ce="" data-r-2_1_4_3_bd6f247f-9efc-45f2-ad36-eb618650f2ce=""
             class="text sd appear">{{ $t('denki.supplyArea') }}<br>{{ $t('denki.supplyArea2') }}</p></div>
      </div>
      <div data-s-485f33cb-dc84-40fc-bee5-a4502893bcd5="" class="sd appear">
        <div data-s-2c248ae8-4de6-40f1-b383-e9677f0b34d8="" data-r-0_5_3_2c248ae8-4de6-40f1-b383-e9677f0b34d8=""
             class="image sd">
        </div>
        <p data-s-60e7cb44-3edf-47de-82cf-5d931692a232="" data-r-1_5_3_60e7cb44-3edf-47de-82cf-5d931692a232=""
           class="text sd appear">{{ $t('denki.nationwide') }}</p>
        <p data-s-9ba60b77-cc7b-4dca-a6e7-7a35d7314af9="" data-r-2_5_3_9ba60b77-cc7b-4dca-a6e7-7a35d7314af9=""
           class="text sd appear">{{ $t('denki.supplyArea') }}<br>{{ $t('denki.supplyArea2') }}</p></div>
      <div data-s-4f025305-39d7-4a1c-840b-487ef106d7f5="" class="sd appear">
        <div data-s-2d80f690-f411-4dbb-a5de-251a40d197c5="" data-r-0_6_3_2d80f690-f411-4dbb-a5de-251a40d197c5=""
             class="image sd appear">

        </div>
        <p data-s-23d2245d-1a8f-4b35-8249-71cd68b3c802="" data-r-1_6_3_23d2245d-1a8f-4b35-8249-71cd68b3c802=""
           class="text sd appear">{{ $t('denki.nationwide') }}</p>
        <p data-s-ab5d75f2-9d77-4001-8292-840aeb92735f="" data-r-2_6_3_ab5d75f2-9d77-4001-8292-840aeb92735f=""
           class="text sd appear">{{ $t('denki.supplyArea') }}<br>{{ $t('denki.supplyArea2') }}</p></div>
      <div data-s-c9271103-92f7-4b45-b7db-f6e76e8514bf="" class="sd appear"><p
        data-s-9670da36-f682-46e8-ab9d-14f0ebf634ed="" data-r-0_7_3_9670da36-f682-46e8-ab9d-14f0ebf634ed=""
        class="text sd appear">
        {{ $t('denki.twoPlans') }}
        </p></div>
      <div data-s-0d138f16-f82c-4d39-876a-e5ec9fa4d654="" class="sd appear">
        <div data-s-a4ac2350-78f2-4ba7-85a5-631a0f434082="" class="sd appear">
          <div data-s-63470b62-74ba-475a-88fa-0035776fc9c4="" class="sd appear">
            <div data-s-d1a27f7f-383b-4e98-8bb5-a2062063d813="" class="sd appear"><p
              data-s-5832d111-fc07-419c-8ccd-f2c6cd35e93d="" data-r-0_0_0_0_8_3_5832d111-fc07-419c-8ccd-f2c6cd35e93d=""
              class="text sd appear">ビットコイン付与プラン</p>
              <div data-s-ec5c48de-90b5-492b-8ead-625cb2b20eab=""
                   data-r-1_0_0_0_8_3_ec5c48de-90b5-492b-8ead-625cb2b20eab="" class="image sd">

              </div>
              <p data-s-766de144-1529-44cd-bd7c-5963e0ea3180=""
                 data-r-2_0_0_0_8_3_766de144-1529-44cd-bd7c-5963e0ea3180="" class="text sd appear">

                {{ $t('denki.maxReward') }}</p>
              <p data-s-41838558-a331-4166-8ee3-80d56c6aa5be=""
                 data-r-3_0_0_0_8_3_41838558-a331-4166-8ee3-80d56c6aa5be="" class="text sd appear">
                {{ $t('denki.monthlyReward') }}

                </p></div>
          </div>
        </div>
        <div data-s-8891fc14-b79a-4922-87f9-fd79ad4e2636="" class="sd appear"><p
          data-s-a3f908e4-bab8-4b40-bb6a-786abb45320c="" data-r-0_1_8_3_a3f908e4-bab8-4b40-bb6a-786abb45320c=""
          class="text sd appear">{{ $t('denki.bitcoinPaymentPlan') }}</p>
          <div data-s-43f44923-5639-4243-bbca-4545ee89bf99="" data-r-1_1_8_3_43f44923-5639-4243-bbca-4545ee89bf99=""
               class="image sd">
          </div>
          <p data-s-d705d305-3e94-439b-9b7d-989f038b4ce4="" data-r-2_1_8_3_d705d305-3e94-439b-9b7d-989f038b4ce4=""
             class="text sd appear">ビットコイン支払いで最大7％を割引</p>
          <p data-s-79793747-fb1c-4103-8b20-53af8cc772c7="" data-r-3_1_8_3_79793747-fb1c-4103-8b20-53af8cc772c7=""
             class="text sd appear">
             {{ $t('denki.paymentDiscount') }}

             <br>{{ $t('denki.paymentDiscount2') }}
             </p></div>
      </div>
      <div data-s-84c56757-d9dd-4912-8102-cd48e9631e80="" class="sd appear"><p
        data-s-4a06b119-def3-4962-b160-dec6d7231349="" data-r-0_9_3_4a06b119-def3-4962-b160-dec6d7231349=""
        class="text sd appear">{{ $t('denki.bitcoinPaymentPlan') }}</p>
        <div data-s-1c0a5427-54e3-4c1a-9b82-2762a5a5e39c="" data-r-1_9_3_1c0a5427-54e3-4c1a-9b82-2762a5a5e39c=""
             class="image sd appear">
        </div>
        <p data-s-da3df456-fb2a-4831-9925-d261b98afb54="" data-r-2_9_3_da3df456-fb2a-4831-9925-d261b98afb54=""
           class="text sd appear">ビットコイン支払いで最大7％を割引</p>
        <p data-s-d487beba-07cf-489a-a5fd-943d30c2322b="" data-r-3_9_3_d487beba-07cf-489a-a5fd-943d30c2322b=""
           class="text sd appear">{{ $t('denki.paymentDiscount') }}{{ $t('denki.paymentDiscount2') }}</p></div>
      <div data-s-75f87f5b-e198-4fe3-8506-5aeca1f8e1dc="" class="sd appear"><p
        data-s-140ed00a-d369-43a4-ae14-bac50985e253="" data-r-0_10_3_140ed00a-d369-43a4-ae14-bac50985e253=""
        class="text sd appear">
        {{ $t('denki.rates') }}

        </p></div>
      <div data-s-96821a2c-5bae-4dcf-9cc3-1974d0d01a84="" class="sd appear">
        <div data-s-4ef13b3f-41c6-4d91-99be-3d6ce0f3b282="" class="sd appear"><p
          data-s-bdf1e3f9-cfb0-4416-8f23-67f37c79c144="" data-r-0_0_11_3_bdf1e3f9-cfb0-4416-8f23-67f37c79c144=""
          class="text sd appear">
          {{ $t('denki.region') }}
          </p></div>
        <div data-s-cdfd333c-e9f7-4065-acfc-82eb18413a6b="" class="sd appear"><p
          data-s-12bb435a-5e93-4d56-af2d-c0998e5e940b="" data-r-0_1_11_3_12bb435a-5e93-4d56-af2d-c0998e5e940b=""
          class="text sd appear">
          {{ $t('denki.planB') }}
          </p></div>
        <div data-s-6b73c3f5-bac9-483c-8ad0-a744d0e17183="" class="sd appear"><p
          data-s-8cd3db3e-ac0a-4d79-96fa-fda76da260ce="" data-r-0_2_11_3_8cd3db3e-ac0a-4d79-96fa-fda76da260ce=""
          class="text sd appear">
          {{ $t('denki.planC') }}
          </p></div>
      </div>
      <div data-s-002ed449-eef8-4f37-80f2-cfc40539ec19="" class="sd appear">
        <div data-s-9c6ec4c9-8c1e-4e45-a47a-df7216e1a516="" class="sd appear"><p
          data-s-17282a7f-e730-47d6-b16f-89b6f4321120="" data-r-0_0_12_3_17282a7f-e730-47d6-b16f-89b6f4321120=""
          class="text sd appear"></p>
          <p data-s-5f5cab57-c966-41ca-b53a-4b8d4a9baa7c="" data-r-1_0_12_3_5f5cab57-c966-41ca-b53a-4b8d4a9baa7c=""
             class="text sd appear">
             {{ $t('denki.hokkaido') }}

             </p></div>
        <div data-s-afea4c32-4bf2-4499-8036-cd4de3a58c7c="" class="sd appear"><p
          data-s-8178205d-4ad1-41db-b3cd-9e53f395550d="" data-r-0_1_12_3_8178205d-4ad1-41db-b3cd-9e53f395550d=""
          class="text sd appear">30A：</p>
          <p data-s-6e44c681-bd73-4e2e-9fc5-97df4a503d87="" data-r-1_1_12_3_6e44c681-bd73-4e2e-9fc5-97df4a503d87=""
             class="text sd appear">1%</p></div>
        <div data-s-5d8df587-a196-4332-bb5a-ccc68e04d67b="" class="sd appear"><p
          data-s-b923be8a-714f-435e-a819-d9aeb456f151="" data-r-0_2_12_3_b923be8a-714f-435e-a819-d9aeb456f151=""
          class="text sd appear">40A：</p>
          <p data-s-e1e5c375-d4d1-4f08-9d7b-4547c846eb3f="" data-r-1_2_12_3_e1e5c375-d4d1-4f08-9d7b-4547c846eb3f=""
             class="text sd appear">4%</p></div>
        <div data-s-e6ca5b6a-991a-486f-8dd4-c1f1ae55872c="" class="sd appear"><p
          data-s-23e0a509-8691-4eeb-86d6-a18690015675="" data-r-0_3_12_3_23e0a509-8691-4eeb-86d6-a18690015675=""
          class="text sd appear">50A：</p>
          <p data-s-6e3374de-7827-410b-8cfd-6061998bd148="" data-r-1_3_12_3_6e3374de-7827-410b-8cfd-6061998bd148=""
             class="text sd appear">6%</p></div>
        <div data-s-458e3f4f-7f16-4bb6-855b-bfa7ccff97df="" class="sd appear"><p
          data-s-b5670032-372f-43a0-b7d0-eafc91aa411f="" data-r-0_4_12_3_b5670032-372f-43a0-b7d0-eafc91aa411f=""
          class="text sd appear">60A：</p>
          <p data-s-c01343fc-4429-412b-a013-8d8705f18338="" data-r-1_4_12_3_c01343fc-4429-412b-a013-8d8705f18338=""
             class="text sd appear">7%</p></div>
        <div data-s-260a3392-10a6-4b5b-aa5c-9878bd90102b="" class="sd appear"><p
          data-s-f7d58fa1-a158-4211-a391-b179c8108880="" data-r-0_5_12_3_f7d58fa1-a158-4211-a391-b179c8108880=""
          class="text sd appear">7%</p></div>
      </div>
      <div data-s-e8bbaf33-6e6d-4945-9678-21834186fd00="" class="sd appear">
        <div data-s-e37a28c8-b7e4-444f-959d-454c29aa90b1="" class="sd appear"><p
          data-s-8ec9c01f-e466-4319-90be-9814df0eb690="" data-r-0_0_13_3_8ec9c01f-e466-4319-90be-9814df0eb690=""
          class="text sd appear"></p>
          <p data-s-8f391646-bd3c-4b7b-ad24-80eea292f376="" data-r-1_0_13_3_8f391646-bd3c-4b7b-ad24-80eea292f376=""
             class="text sd appear">
             {{ $t('denki.q4') }}

             </p></div>
        <div data-s-57ab74fa-e072-4503-816d-29ddc19e2bf4="" class="sd appear"><p
          data-s-11b2c2b0-eb17-4587-8aea-609458cb0061="" data-r-0_1_13_3_11b2c2b0-eb17-4587-8aea-609458cb0061=""
          class="text sd appear">30A：</p>
          <p data-s-1455cd49-d5df-4d13-a3f8-c603798b8977="" data-r-1_1_13_3_1455cd49-d5df-4d13-a3f8-c603798b8977=""
             class="text sd appear">1%</p></div>
        <div data-s-3878a0a7-2e3c-4fe0-9151-52fc73f5ad1c="" class="sd appear"><p
          data-s-e0a0fa7d-368d-4ea2-8b9b-0a86ee43abc0="" data-r-0_2_13_3_e0a0fa7d-368d-4ea2-8b9b-0a86ee43abc0=""
          class="text sd appear">40A：</p>
          <p data-s-0c3557a1-ac52-4620-82e3-64bfcb4e4525="" data-r-1_2_13_3_0c3557a1-ac52-4620-82e3-64bfcb4e4525=""
             class="text sd appear">3%</p></div>
        <div data-s-ec3a01bb-715a-4fb2-898e-c72a19a20d73="" class="sd appear"><p
          data-s-7057ca76-ac15-410a-82ee-287b6dac6ab2="" data-r-0_3_13_3_7057ca76-ac15-410a-82ee-287b6dac6ab2=""
          class="text sd appear">50A：</p>
          <p data-s-eb4956c3-1e9c-4b84-a301-dde27876b07e="" data-r-1_3_13_3_eb4956c3-1e9c-4b84-a301-dde27876b07e=""
             class="text sd appear">4%</p></div>
        <div data-s-a86e10cf-d779-4a17-b8db-edeb395d2dd5="" class="sd appear"><p
          data-s-8d99745a-6c27-466c-a6ec-256110101076="" data-r-0_4_13_3_8d99745a-6c27-466c-a6ec-256110101076=""
          class="text sd appear">60A：</p>
          <p data-s-b339e79b-4303-4dd2-a0f1-f4e31aaae378="" data-r-1_4_13_3_b339e79b-4303-4dd2-a0f1-f4e31aaae378=""
             class="text sd appear">5%</p></div>
        <div data-s-215a2c2e-6a05-475c-a252-96c4b1a93860="" class="sd appear"><p
          data-s-45373a81-ca10-4a68-bfaf-ee5ef050852c="" data-r-0_5_13_3_45373a81-ca10-4a68-bfaf-ee5ef050852c=""
          class="text sd appear">5%</p></div>
      </div>
      <div data-s-a473bece-0e5c-4e2f-a372-66c8089e1a21="" class="sd appear">
        <div data-s-1ed2fb10-4c72-4697-9e44-dbb212f86431="" class="sd appear"><p
          data-s-616bcb87-928d-4195-b52c-44c443b11d37="" data-r-0_0_14_3_616bcb87-928d-4195-b52c-44c443b11d37=""
          class="text sd appear"></p>
          <p data-s-733b38f5-d305-4b71-a429-804ab44d0e31="" data-r-1_0_14_3_733b38f5-d305-4b71-a429-804ab44d0e31=""
             class="text sd appear">
             {{ $t('denki.q5') }}

             </p></div>
        <div data-s-77d70b41-ca1d-480f-ab9e-c7304a46b547="" class="sd appear"><p
          data-s-6b99891f-6923-4da3-8718-0bc309e6d56a="" data-r-0_1_14_3_6b99891f-6923-4da3-8718-0bc309e6d56a=""
          class="text sd appear">30A：</p>
          <p data-s-cb3260ad-f612-4b5c-a57b-fe839809a7b9="" data-r-1_1_14_3_cb3260ad-f612-4b5c-a57b-fe839809a7b9=""
             class="text sd appear">1%</p></div>
        <div data-s-4c0c9c5a-19d8-4903-b2d6-d85318b37e6b="" class="sd appear"><p
          data-s-3689a300-fcf1-4e5b-96ba-63285df53563="" data-r-0_2_14_3_3689a300-fcf1-4e5b-96ba-63285df53563=""
          class="text sd appear">40A：</p>
          <p data-s-574a9391-dfba-4010-ad74-0608ff34f31f="" data-r-1_2_14_3_574a9391-dfba-4010-ad74-0608ff34f31f=""
             class="text sd appear">4%</p></div>
        <div data-s-dbf23e13-96b4-465b-b79d-c58dd9869ece="" class="sd appear"><p
          data-s-c2e0d732-1984-4fc2-878c-5384b27bd927="" data-r-0_3_14_3_c2e0d732-1984-4fc2-878c-5384b27bd927=""
          class="text sd appear">50A：</p>
          <p data-s-7b81d7b2-e541-451a-910f-522fa36caa7c="" data-r-1_3_14_3_7b81d7b2-e541-451a-910f-522fa36caa7c=""
             class="text sd appear">5%</p></div>
        <div data-s-cfd8f759-9a09-4515-9fb8-cb32b6bdc250="" class="sd appear"><p
          data-s-284e9d8d-e0ce-4f04-a8c9-7605e1bf8974="" data-r-0_4_14_3_284e9d8d-e0ce-4f04-a8c9-7605e1bf8974=""
          class="text sd appear">60A：</p>
          <p data-s-a4e599e7-8505-4afb-9c9b-8150a608c3c8="" data-r-1_4_14_3_a4e599e7-8505-4afb-9c9b-8150a608c3c8=""
             class="text sd appear">6%</p></div>
        <div data-s-28de5853-6e0f-4446-8b9a-225d610c9490="" class="sd appear"><p
          data-s-c7850862-1989-43a5-b38d-e52e5a6abb46="" data-r-0_5_14_3_c7850862-1989-43a5-b38d-e52e5a6abb46=""
          class="text sd appear">6%</p></div>
      </div>
      <div data-s-b65eaa50-c557-4dec-8430-e02f5a45be38="" class="sd appear">
        <div data-s-8eee92c0-e20c-4da6-b433-ef8472240964="" class="sd appear"><p
          data-s-6d3e9c0d-ef7d-4d65-8e1f-0e3b8bf4ea09="" data-r-0_0_15_3_6d3e9c0d-ef7d-4d65-8e1f-0e3b8bf4ea09=""
          class="text sd appear"></p>
          <p data-s-5df5dc7e-d11b-4a4e-a08c-1d4383c724d5="" data-r-1_0_15_3_5df5dc7e-d11b-4a4e-a08c-1d4383c724d5=""
             class="text sd appear">
             {{ $t('denki.q6') }}

             </p></div>
        <div data-s-b8273208-0322-468a-8852-a20ffee9a1f2="" class="sd appear"><p
          data-s-84c404dd-18ad-4e95-9b68-095120a60658="" data-r-0_1_15_3_84c404dd-18ad-4e95-9b68-095120a60658=""
          class="text sd appear">30A：</p>
          <p data-s-0d2e7525-9794-4225-9b61-a16ef1b66c9e="" data-r-1_1_15_3_0d2e7525-9794-4225-9b61-a16ef1b66c9e=""
             class="text sd appear">1%</p></div>
        <div data-s-a2329569-2cc9-4c29-9562-7ce1c28baebb="" class="sd appear"><p
          data-s-1fb34675-baad-467d-8779-a640bc812432="" data-r-0_2_15_3_1fb34675-baad-467d-8779-a640bc812432=""
          class="text sd appear">40A：</p>
          <p data-s-a33b9c7f-66bd-4627-9ad8-bb29f9265a4b="" data-r-1_2_15_3_a33b9c7f-66bd-4627-9ad8-bb29f9265a4b=""
             class="text sd appear">3%</p></div>
        <div data-s-16edcb47-3e6c-42b6-a47c-ec96eafe8c3e="" class="sd appear"><p
          data-s-eefcf483-48e1-4eef-8a25-88b4cf67cdff="" data-r-0_3_15_3_eefcf483-48e1-4eef-8a25-88b4cf67cdff=""
          class="text sd appear">50A：</p>
          <p data-s-751d04ea-7f29-43be-816e-b702649ea914="" data-r-1_3_15_3_751d04ea-7f29-43be-816e-b702649ea914=""
             class="text sd appear">4%</p></div>
        <div data-s-7be919a4-df2d-40f5-870b-77b8951cc299="" class="sd appear"><p
          data-s-45dd0968-522f-4c87-bc25-2303879bdb3c="" data-r-0_4_15_3_45dd0968-522f-4c87-bc25-2303879bdb3c=""
          class="text sd appear">60A：</p>
          <p data-s-65696361-eeed-4294-9d0a-9af22397c691="" data-r-1_4_15_3_65696361-eeed-4294-9d0a-9af22397c691=""
             class="text sd appear">5%</p></div>
        <div data-s-08b6d13d-8d7e-451f-aa9b-573f5fd1f0b0="" class="sd appear"><p
          data-s-cfc21664-4ce9-46f7-a61a-4abed91ca3dd="" data-r-0_5_15_3_cfc21664-4ce9-46f7-a61a-4abed91ca3dd=""
          class="text sd appear">5%</p></div>
      </div>
      <div data-s-43322504-7780-44de-a7e4-f9bf6c0b59a8="" class="sd appear">
        <div data-s-cd16de74-ca94-454a-9184-c7261bee6cd5="" class="sd appear"><p
          data-s-ca4e29fa-6c8c-4bb9-90bd-f1a563fad57f="" data-r-0_0_16_3_ca4e29fa-6c8c-4bb9-90bd-f1a563fad57f=""
          class="text sd appear"></p>
          <p data-s-d3dea4bd-84c9-4b63-bb3a-4d6c8dd8194f="" data-r-1_0_16_3_d3dea4bd-84c9-4b63-bb3a-4d6c8dd8194f=""
             class="text sd appear">
             {{ $t('denki.q7') }}

             </p></div>
        <div data-s-f1d2488a-ba0f-4c5d-9ef6-0611325615bd="" class="sd appear"><p
          data-s-211e51a7-7b26-477d-997b-38f4b00901d1="" data-r-0_1_16_3_211e51a7-7b26-477d-997b-38f4b00901d1=""
          class="text sd appear">30A：</p>
          <p data-s-50065f17-da93-4c97-85b2-6b47854febc1="" data-r-1_1_16_3_50065f17-da93-4c97-85b2-6b47854febc1=""
             class="text sd appear">1%</p></div>
        <div data-s-12f98915-5693-4c51-97cc-86d3d1eee7c4="" class="sd appear"><p
          data-s-24ed2682-d611-46b6-9acc-0273427a17bc="" data-r-0_2_16_3_24ed2682-d611-46b6-9acc-0273427a17bc=""
          class="text sd appear">40A：</p>
          <p data-s-0d07f48b-1c34-4d83-be59-e039ca351494="" data-r-1_2_16_3_0d07f48b-1c34-4d83-be59-e039ca351494=""
             class="text sd appear">2%</p></div>
        <div data-s-2984ff91-c046-4655-9c70-5b2089b3e343="" class="sd appear"><p
          data-s-f5f1ef1c-efd5-49ef-a76f-080cca45e351="" data-r-0_3_16_3_f5f1ef1c-efd5-49ef-a76f-080cca45e351=""
          class="text sd appear">50A：</p>
          <p data-s-f5339f87-9bef-4f02-ae28-cd23a88f5984="" data-r-1_3_16_3_f5339f87-9bef-4f02-ae28-cd23a88f5984=""
             class="text sd appear">4%</p></div>
        <div data-s-8d60aaa0-b468-4731-9831-ba41481f898b="" class="sd appear"><p
          data-s-3987f858-4d83-4683-8b9e-d39700554b76="" data-r-0_4_16_3_3987f858-4d83-4683-8b9e-d39700554b76=""
          class="text sd appear">60A：</p>
          <p data-s-7bfca069-ca57-444b-83ff-50a96932eb13="" data-r-1_4_16_3_7bfca069-ca57-444b-83ff-50a96932eb13=""
             class="text sd appear">5%</p></div>
        <div data-s-7a32c49e-b399-437b-96cc-f7b27a67a8e8="" class="sd appear"><p
          data-s-d1703a8d-6935-4e8b-bfbb-989cdcc305be="" data-r-0_5_16_3_d1703a8d-6935-4e8b-bfbb-989cdcc305be=""
          class="text sd appear">5%</p></div>
      </div>
      <div data-s-b161b50b-32fa-4047-9a3b-4e549ffb2b14="" class="sd appear">
        <div data-s-78d92f07-009c-4b83-88c5-72bbd588544f="" class="sd appear"><p
          data-s-4e6da7f0-6043-4041-8197-d047da4d64ab="" data-r-0_0_17_3_4e6da7f0-6043-4041-8197-d047da4d64ab=""
          class="text sd appear">{{ $t('denki.region') }}</p></div>
        <div data-s-368f220a-4851-497a-ac4b-43228d1c04a3="" class="sd appear">
          <div data-s-1c2e8420-8388-476c-bce1-4fdb461a9285="" class="sd appear">
            <div data-s-d5a12202-d675-4e3c-b88d-8421fa35b143="" class="sd appear"><p
              data-s-169cbad5-7d6c-4919-82a3-d23d935cbdff="" data-r-0_0_0_1_17_3_169cbad5-7d6c-4919-82a3-d23d935cbdff=""
              class="text sd appear">{{ $t('denki.planB') }}</p></div>
            <div data-s-6a6b2454-5903-4830-8e27-35bdf973823b="" class="sd appear">
              <div data-s-3230e246-ffc5-4851-94e9-811e4e26bc00="" class="sd appear"><p
                data-s-15236403-b70d-4437-9037-da123b55c5c7=""
                data-r-0_0_1_0_1_17_3_15236403-b70d-4437-9037-da123b55c5c7="" class="text sd appear">30A</p></div>
              <div data-s-358dfa22-e3ee-40a1-b610-5950f2cc7b9c="" class="sd appear"><p
                data-s-162ed614-0363-4d9e-9e46-46edbb427a27=""
                data-r-0_1_1_0_1_17_3_162ed614-0363-4d9e-9e46-46edbb427a27="" class="text sd appear">40A</p></div>
              <div data-s-942a8d85-e729-4fa2-ac2d-5ac0a7c4626a="" class="sd appear"><p
                data-s-afa1c373-c323-49f9-a033-d28ab9b84b6f=""
                data-r-0_2_1_0_1_17_3_afa1c373-c323-49f9-a033-d28ab9b84b6f="" class="text sd appear">50A</p></div>
              <div data-s-e4698dcd-9629-488b-9ade-58d3b44b875c="" class="sd appear"><p
                data-s-74b99525-679f-46b1-8d70-9cdf128d81d0=""
                data-r-0_3_1_0_1_17_3_74b99525-679f-46b1-8d70-9cdf128d81d0="" class="text sd appear">60A</p></div>
            </div>
          </div>
          <div data-s-0fc8eda6-cd9b-4de7-8587-8d1047c69cc8="" class="sd appear"><p
            data-s-7f92f7af-9aa1-4576-b004-f7e2a61d1495="" data-r-0_1_1_17_3_7f92f7af-9aa1-4576-b004-f7e2a61d1495=""
            class="text sd appear">{{ $t('denki.planC') }}</p></div>
        </div>
      </div>
      <div data-s-914dc04b-bce7-4c28-8884-02de8239fbd4="" class="sd appear">
        <div data-s-9eea27bb-21da-435f-a27f-9e3e470e6f69="" class="sd appear"><p
          data-s-6217d9f0-8c92-45de-9074-61325b9388f2="" data-r-0_0_18_3_6217d9f0-8c92-45de-9074-61325b9388f2=""
          class="text sd appear"></p>
          <p data-s-31a5ec5b-5773-4ffd-b9d6-35588d314b9a="" data-r-1_0_18_3_31a5ec5b-5773-4ffd-b9d6-35588d314b9a=""
             class="text sd appear">{{ $t('denki.hokkaido') }}</p></div>
        <div data-s-3da388d4-5450-4a4d-9208-c39837b9d488="" class="sd appear">
          <div data-s-b14ca90c-8244-4c85-959e-71ad2b097e05="" class="sd appear"><p
            data-s-a6cb3ea5-5f4c-4d4f-85ea-4d6d3fcc18a3="" data-r-0_0_1_18_3_a6cb3ea5-5f4c-4d4f-85ea-4d6d3fcc18a3=""
            class="text sd appear">1%</p></div>
          <div data-s-c0518c53-d00f-4128-ae9e-620aa8798d78="" class="sd appear"><p
            data-s-f58272bd-8197-4a19-8392-6d9599c1dd6a="" data-r-0_1_1_18_3_f58272bd-8197-4a19-8392-6d9599c1dd6a=""
            class="text sd appear">4%</p></div>
          <div data-s-61231c83-3209-44d3-a035-c7b1e9304e61="" class="sd appear"><p
            data-s-06cdc700-c7fc-463f-85d4-0c29c56af6ad="" data-r-0_2_1_18_3_06cdc700-c7fc-463f-85d4-0c29c56af6ad=""
            class="text sd appear">6%</p></div>
          <div data-s-96f630bd-b963-4426-b67e-9ee5eab0238e="" class="sd appear"><p
            data-s-2518ad47-8158-4ed0-bc87-732016772f92="" data-r-0_3_1_18_3_2518ad47-8158-4ed0-bc87-732016772f92=""
            class="text sd appear">7%</p></div>
          <div data-s-a1aaa740-1dfe-4f74-80c3-88f975583e5f="" class="sd appear"><p
            data-s-9eafa6ac-408e-437c-b2f6-8f08ecc69ebf="" data-r-0_4_1_18_3_9eafa6ac-408e-437c-b2f6-8f08ecc69ebf=""
            class="text sd appear">7%</p></div>
        </div>
      </div>
      <div data-s-33ec8253-68fa-4a80-aa0b-bff8e95d938c="" class="sd appear">
        <div data-s-1fe99fe0-37ea-44c3-a0f5-0040c074ab8e="" class="sd appear"><p
          data-s-0f705691-7166-42d3-9ee6-86c736cca469="" data-r-0_0_19_3_0f705691-7166-42d3-9ee6-86c736cca469=""
          class="text sd appear"></p>
          <p data-s-91290544-773e-4f19-9ed2-c33ad8aad4f0="" data-r-1_0_19_3_91290544-773e-4f19-9ed2-c33ad8aad4f0=""
             class="text sd appear">{{ $t('denki.q4') }}</p></div>
        <div data-s-414f8e5d-42e9-4215-b3ae-0bac7f3745ee="" class="sd appear">
          <div data-s-cfe06057-05aa-4459-994d-7365c663df49="" class="sd appear"><p
            data-s-80da235c-c798-4b04-b5b2-41a4a7f17b10="" data-r-0_0_1_19_3_80da235c-c798-4b04-b5b2-41a4a7f17b10=""
            class="text sd appear">1%</p></div>
          <div data-s-96f1bbcc-2681-47fa-94fb-81c9f26163c6="" class="sd appear"><p
            data-s-d09f8081-5286-44de-84a7-78761e5fe210="" data-r-0_1_1_19_3_d09f8081-5286-44de-84a7-78761e5fe210=""
            class="text sd appear">3%</p></div>
          <div data-s-f144981d-34d5-4d2a-a6a9-e937ad968c86="" class="sd appear"><p
            data-s-c119de57-3073-4695-b049-f22ea1ac47b8="" data-r-0_2_1_19_3_c119de57-3073-4695-b049-f22ea1ac47b8=""
            class="text sd appear">4%</p></div>
          <div data-s-52cd0809-e8b5-465f-a046-64a717a83f61="" class="sd appear"><p
            data-s-01396ee7-2734-432b-b969-d301e4a9fc6c="" data-r-0_3_1_19_3_01396ee7-2734-432b-b969-d301e4a9fc6c=""
            class="text sd appear">5%</p></div>
          <div data-s-9bbbdc6d-cfd1-4dca-9f71-b82651a83d4f="" class="sd appear"><p
            data-s-23448368-2ac2-40ea-b379-12162e20531b="" data-r-0_4_1_19_3_23448368-2ac2-40ea-b379-12162e20531b=""
            class="text sd appear">5%</p></div>
        </div>
      </div>
      <div data-s-369b113e-f51f-4f7b-a3c5-b33cd0677052="" class="sd appear">
        <div data-s-7a6b8167-1332-4059-8655-a50b6c9ffd82="" class="sd appear"><p
          data-s-a31a6525-bd7c-4b08-8233-f3ec0fd62240="" data-r-0_0_20_3_a31a6525-bd7c-4b08-8233-f3ec0fd62240=""
          class="text sd appear"></p>
          <p data-s-092ea7d5-86a1-4a1b-846c-28212c260541="" data-r-1_0_20_3_092ea7d5-86a1-4a1b-846c-28212c260541=""
             class="text sd appear">{{ $t('denki.q5') }}</p></div>
        <div data-s-26f2921b-fc37-4467-a5ed-28e9d3e76cb0="" class="sd appear">
          <div data-s-72e6ee44-5462-4e39-8914-a6e56cbccaac="" class="sd appear"><p
            data-s-ab061b35-9de5-4c75-8fa4-c3cf8ad18b1c="" data-r-0_0_1_20_3_ab061b35-9de5-4c75-8fa4-c3cf8ad18b1c=""
            class="text sd appear">1%</p></div>
          <div data-s-f50943bf-7fe7-4fa8-9565-3e2d87a2bb06="" class="sd appear"><p
            data-s-5bbcdf56-e83a-4cf6-8a4e-b42cadd94ba5="" data-r-0_1_1_20_3_5bbcdf56-e83a-4cf6-8a4e-b42cadd94ba5=""
            class="text sd appear">4%</p></div>
          <div data-s-8524eb5b-bcc3-4490-bb80-e67f16a2f9ee="" class="sd appear"><p
            data-s-a21f1049-397c-4b0c-9668-7986955b9055="" data-r-0_2_1_20_3_a21f1049-397c-4b0c-9668-7986955b9055=""
            class="text sd appear">5%</p></div>
          <div data-s-024ccee2-b18f-4b08-8b3a-1be25bf9de15="" class="sd appear"><p
            data-s-501f0573-0800-439d-a951-37d505e41729="" data-r-0_3_1_20_3_501f0573-0800-439d-a951-37d505e41729=""
            class="text sd appear">6%</p></div>
          <div data-s-23245b0f-d821-45cb-81f5-01687ddc4ab2="" class="sd appear"><p
            data-s-21a9cecc-c002-4039-84f7-0bdfb04c20fe="" data-r-0_4_1_20_3_21a9cecc-c002-4039-84f7-0bdfb04c20fe=""
            class="text sd appear">6%</p></div>
        </div>
      </div>
      <div data-s-ada1d2af-3661-4c6c-9bc1-2a990de2c1b3="" class="sd appear">
        <div data-s-e6d54d30-c4f9-40e6-9d8c-3ead311ec2f3="" class="sd appear"><p
          data-s-965d0540-8b5b-4dd7-828b-5fdf95f75b7b="" data-r-0_0_21_3_965d0540-8b5b-4dd7-828b-5fdf95f75b7b=""
          class="text sd appear"></p>
          <p data-s-d0ae1c5c-9c3a-4a9e-89e3-ebc2a4e0f2d6="" data-r-1_0_21_3_d0ae1c5c-9c3a-4a9e-89e3-ebc2a4e0f2d6=""
             class="text sd appear">{{ $t('denki.q6') }}</p></div>
        <div data-s-3a9feb11-f78c-4c2a-ad17-e3fd16f010b6="" class="sd appear">
          <div data-s-466cb3da-7b1e-4bad-bf25-8fffa390feb1="" class="sd appear"><p
            data-s-5f9591fa-729a-451a-86a5-ea759e58ddfe="" data-r-0_0_1_21_3_5f9591fa-729a-451a-86a5-ea759e58ddfe=""
            class="text sd appear">1%</p></div>
          <div data-s-d29e57b5-66e2-4faa-a743-5181f7b07c84="" class="sd appear"><p
            data-s-81d98991-7a48-4bcd-833d-e1634700b400="" data-r-0_1_1_21_3_81d98991-7a48-4bcd-833d-e1634700b400=""
            class="text sd appear">3%</p></div>
          <div data-s-76bd88fe-fac9-4bb2-be7f-2ad8de08f231="" class="sd appear"><p
            data-s-a94681a4-2cb6-49cc-a6e4-d4923956b6e8="" data-r-0_2_1_21_3_a94681a4-2cb6-49cc-a6e4-d4923956b6e8=""
            class="text sd appear">4%</p></div>
          <div data-s-b3bd9b00-d1d4-40ea-850f-eba9cbf05544="" class="sd appear"><p
            data-s-fdd9c41a-fa9f-4545-88b5-b567b03584e5="" data-r-0_3_1_21_3_fdd9c41a-fa9f-4545-88b5-b567b03584e5=""
            class="text sd appear">5%</p></div>
          <div data-s-73b833c7-2d20-4256-8cbc-cf5ef916979b="" class="sd appear"><p
            data-s-3bf750f2-acc5-4cc1-bc94-64fd0805a3f7="" data-r-0_4_1_21_3_3bf750f2-acc5-4cc1-bc94-64fd0805a3f7=""
            class="text sd appear">5%</p></div>
        </div>
      </div>
      <div data-s-dc632b60-c61d-4832-9d82-8abab310226e="" class="sd appear">
        <div data-s-66d3803d-208f-458f-b5d3-1aca29fa8ed9="" class="sd appear"><p
          data-s-c5a1521b-0c0a-4e94-a476-0438908f7f8c="" data-r-0_0_22_3_c5a1521b-0c0a-4e94-a476-0438908f7f8c=""
          class="text sd appear"></p>
          <p data-s-add1eda9-bc48-4496-8eb9-c4ba14da8013="" data-r-1_0_22_3_add1eda9-bc48-4496-8eb9-c4ba14da8013=""
             class="text sd appear">{{ $t('denki.q7') }}</p></div>
        <div data-s-4fbbb080-ae58-4463-8006-8eb1d4b96eb7="" class="sd appear">
          <div data-s-87bdfa8a-3494-4b3e-89c4-8ff8b74a379e="" class="sd appear"><p
            data-s-e7125977-fe78-43c9-a43c-cb193f18e0cc="" data-r-0_0_1_22_3_e7125977-fe78-43c9-a43c-cb193f18e0cc=""
            class="text sd appear">1%</p></div>
          <div data-s-10801eef-b614-4517-978e-a96f4234573a="" class="sd appear"><p
            data-s-baf74cae-580f-45c4-9678-f60536d58ae7="" data-r-0_1_1_22_3_baf74cae-580f-45c4-9678-f60536d58ae7=""
            class="text sd appear">2%</p></div>
          <div data-s-af2cd869-9b59-41e5-943a-74611df5dac5="" class="sd appear"><p
            data-s-a5ba209c-3b0d-4da2-8ba9-f2c0df9cbd54="" data-r-0_2_1_22_3_a5ba209c-3b0d-4da2-8ba9-f2c0df9cbd54=""
            class="text sd appear">4%</p></div>
          <div data-s-6daa0989-21d0-4131-b8c8-ceb4db08a071="" class="sd appear"><p
            data-s-2723d9d6-ed15-4de0-a674-b3dde5d4bfd4="" data-r-0_3_1_22_3_2723d9d6-ed15-4de0-a674-b3dde5d4bfd4=""
            class="text sd appear">5%</p></div>
          <div data-s-e4390867-a002-4dcf-9e36-50264f89f130="" class="sd appear"><p
            data-s-03b23d4e-3f6d-4032-bc69-32a9699dd0a1="" data-r-0_4_1_22_3_03b23d4e-3f6d-4032-bc69-32a9699dd0a1=""
            class="text sd appear">5%</p></div>
        </div>
      </div>
      <div data-s-9fa6a77c-5756-48ad-95d9-89fc7e121fc0="" class="sd appear">
        <div data-s-36e5e06b-ec03-4489-a6bb-ce8b7e346740="" class="sd appear"><p
          data-s-c6c19ef4-2a3b-4f80-987f-362b79e9103f="" data-r-0_0_23_3_c6c19ef4-2a3b-4f80-987f-362b79e9103f=""
          class="text sd appear">{{ $t('denki.region') }}</p></div>
        <div data-s-37a1b77e-0fde-4ae1-87c7-3cc24e2de4a0="" class="sd appear"><p
          data-s-80d7e375-c0cb-4e91-9246-bcbd32bcc33e="" data-r-0_1_23_3_80d7e375-c0cb-4e91-9246-bcbd32bcc33e=""
          class="text sd appear">
          {{ $t('denki.q8') }}

          </p></div>
      </div>
      <div data-s-296c116d-7da5-4a0c-a818-71cdb99badc6="" class="sd appear">
        <div data-s-885372c3-e9d5-4dde-9fac-97ed8d1ec0d7="" class="sd appear"><p
          data-s-fd63092e-505d-4f75-aa3b-dc384f1efdef="" data-r-0_0_24_3_fd63092e-505d-4f75-aa3b-dc384f1efdef=""
          class="text sd appear"></p>
          <p data-s-73bf0ddd-c852-43f1-8e85-9879864e3adf="" data-r-1_0_24_3_73bf0ddd-c852-43f1-8e85-9879864e3adf=""
             class="text sd appear">
             {{ $t('denki.q15') }}
             </p></div>
        <div data-s-385cfda5-7dd8-42ab-90cc-e21532c87db2="" class="sd appear"><p
          data-s-8d6b92c1-ddbd-4f8c-9706-28aa2009d8b5="" data-r-0_1_24_3_8d6b92c1-ddbd-4f8c-9706-28aa2009d8b5=""
          class="text sd appear">300kWh以上：</p>
          <p data-s-947b3754-10dd-47f4-839d-f2216391ebcf="" data-r-1_1_24_3_947b3754-10dd-47f4-839d-f2216391ebcf=""
             class="text sd appear">5%</p></div>
      </div>
      <div data-s-92bb7333-87f3-4903-954b-b0fdef39ca96="" class="sd appear">
        <div data-s-496f9bb7-027e-4477-8b8d-59afecc572ce="" class="sd appear"><p
          data-s-978fcefb-d4a7-467b-9bf9-33ddea3aba8a="" data-r-0_0_25_3_978fcefb-d4a7-467b-9bf9-33ddea3aba8a=""
          class="text sd appear"></p>
          <p data-s-6b99cff4-2e48-415b-90cc-f0d9379af0cd="" data-r-1_0_25_3_6b99cff4-2e48-415b-90cc-f0d9379af0cd=""
             class="text sd appear">
             {{ $t('denki.q9') }}

             </p></div>
        <div data-s-c914623e-de12-4672-9436-072f08651bc5="" class="sd appear"><p
          data-s-91045c25-6e91-4f1d-b9d6-016cdd6fee56="" data-r-0_1_25_3_91045c25-6e91-4f1d-b9d6-016cdd6fee56=""
          class="text sd appear">300kWh以上：</p>
          <p data-s-7bbda844-78a9-4093-95e2-15e4510f0462="" data-r-1_1_25_3_7bbda844-78a9-4093-95e2-15e4510f0462=""
             class="text sd appear">5%</p></div>
      </div>
      <div data-s-464d41ab-043c-45b5-9dfd-a19bd17c15ef="" class="sd appear">
        <div data-s-ef25fb92-8a58-4199-a2e9-295dbea96424="" class="sd appear"><p
          data-s-445c8685-9266-4f5c-964d-cbc242f34d90="" data-r-0_0_26_3_445c8685-9266-4f5c-964d-cbc242f34d90=""
          class="text sd appear"></p>
          <p data-s-4097a173-c48d-47f7-a82c-afe033ecbb76="" data-r-1_0_26_3_4097a173-c48d-47f7-a82c-afe033ecbb76=""
             class="text sd appear">
             {{ $t('denki.q10') }}

             </p></div>
        <div data-s-14bd1a51-d720-4cbf-a032-20b04a69ecad="" class="sd appear"><p
          data-s-130c7158-69d0-49f7-8395-c98748498564="" data-r-0_1_26_3_130c7158-69d0-49f7-8395-c98748498564=""
          class="text sd appear">350kWh以上：</p>
          <p data-s-c78aa8dd-3aed-44d6-b2c6-c99009d20832="" data-r-1_1_26_3_c78aa8dd-3aed-44d6-b2c6-c99009d20832=""
             class="text sd appear">5%</p></div>
      </div>
      <p data-s-a3f7a671-6d92-4a36-9816-dda09d92337a="" data-r-27_3_a3f7a671-6d92-4a36-9816-dda09d92337a=""
         class="text sd appear">
        {{ $t('denki.q14') }}
      </p>
      <div data-s-86f705c5-1ad0-4bd6-b93a-4614d6732ae9="" class="sd appear"><p
        data-s-96389737-be51-4a20-9c91-83ada5067fe1="" data-r-0_28_3_96389737-be51-4a20-9c91-83ada5067fe1=""
        class="text sd appear">Coincheckでんきの仕組み<br></p></div>
      <img data-s-a1bb4000-07af-4313-bd50-cc20e7c3718f="" class="sd" alt=""
           src="https://coincheck.com/images/lp/denki/img_description_02.svg" loading="lazy">
      <div data-s-77382550-f944-450e-af2e-93d508a80db7="" class="sd appear">
        <div data-s-2136fafd-d150-42dd-a264-c03fa3250cc7="" class="sd appear">
          <div data-s-7dc19c22-d13d-42a0-937f-38c9a68af214="" class="sd appear"><p
            data-s-ab4d4d56-0a89-449d-86fe-f9b537aad8e6="" data-r-0_0_0_30_3_ab4d4d56-0a89-449d-86fe-f9b537aad8e6=""
            class="text sd appear">
            {{ $t('denki.a1') }}
            </p></div>
          <p data-s-ffc9133f-098e-493b-ae4f-f674cb9a124a="" data-r-1_0_30_3_ffc9133f-098e-493b-ae4f-f674cb9a124a=""
             class="text sd appear">
             {{ $t('denki.a2') }}
             </p><img data-s-7cf3cdb5-b7db-4a99-b4e0-aa0af83dbab2=""
                                                                          class="sd appear" alt=""
                                                                          src="https://coincheck.com/images/lp/denki/japan_map.svg"
                                                                          loading="lazy"></div>
        <div data-s-96dbf283-126f-41ad-9fbc-7fa72ae25ee4="" class="sd appear">
          <div data-s-cb59c352-fa7f-4eac-ba3c-2f43c42b0dd0="" class="sd appear"><p
            data-s-737425bc-75c6-4aa5-af62-ec0e30f486ab="" data-r-0_0_1_30_3_737425bc-75c6-4aa5-af62-ec0e30f486ab=""
            class="text sd appear">
            {{ $t('denki.a1') }}
            </p></div>
          <p data-s-8a0f3e71-d8c3-4ff4-8f00-79eed4b02de3="" data-r-1_1_30_3_8a0f3e71-d8c3-4ff4-8f00-79eed4b02de3=""
             class="text sd appear">
             {{ $t('denki.a2') }}</p></div>
        <div data-s-7a8c0a92-f3e2-4cbc-aadf-4c3639ce2333="" class="sd appear"><img
          data-s-42420138-5cc1-4999-8348-3308a464b6a6="" class="sd" alt=""
          src="https://coincheck.com/images/lp/denki/japan_map.svg" loading="lazy"></div>
      </div>
      <div data-s-e4d7b8d8-24ba-48fb-a38a-31062ebe368c="" class="sd appear"><p
        data-s-c5fcaf54-f1bf-4ed2-957a-d7be6fab3b62="" data-r-0_31_3_c5fcaf54-f1bf-4ed2-957a-d7be6fab3b62=""
        class="text sd appear">
        {{ $t('denki.a3') }}
        </p></div>
      <div data-s-a84c71f4-5f9a-4540-b8e0-1a5aa2ec42eb="" class="sd appear"><p
        data-s-c0d81553-d28d-4b7f-af26-d454d511e5f6="" data-r-0_32_3_c0d81553-d28d-4b7f-af26-d454d511e5f6=""
        class="text sd appear">
        {{ $t('denki.a4') }}
        </p>
        <p data-s-39b02b18-dd30-46ce-9a64-a2ec752c9849="" data-r-1_32_3_39b02b18-dd30-46ce-9a64-a2ec752c9849=""
           class="text sd appear">

           {{ $t('denki.a5') }}
           </p></div>
      <div data-s-dab5b755-9c93-4077-be66-d3579b4441c2="" class="sd appear"><p
        data-s-f317cb35-1c0c-456e-b75f-1612446a4b1f="" data-r-0_33_3_f317cb35-1c0c-456e-b75f-1612446a4b1f=""
        class="text sd appear">

        {{ $t('denki.a6') }}
        </p>
        <p data-s-573bc186-ca6e-4b51-958b-42adcb51957d="" data-r-1_33_3_573bc186-ca6e-4b51-958b-42adcb51957d=""
           class="text sd appear">
           {{ $t('denki.a14') }}
           </p><a
           @click="handleClick"
          data-s-c4683be4-09a9-4b01-8eba-3ad9d37c3116="" class="sd appear"><p
          data-s-2dcc8dbd-7e1c-4798-842f-3f8cdf9cccda="" data-r-0_2_33_3_2dcc8dbd-7e1c-4798-842f-3f8cdf9cccda=""
          class="text sd appear">

          {{ $t('denki.a7') }}
          </p></a></div>
      <div data-s-8385d5d5-6988-438c-b112-6bc506c9d24a="" class="sd appear"><p
        data-s-a307baee-0f22-4fe0-839d-f7eeb029723a="" data-r-0_34_3_a307baee-0f22-4fe0-839d-f7eeb029723a=""
        class="text sd appear">

        {{ $t('denki.a8') }}
        </p>
        <p data-s-fa8b5369-f4d6-44e9-a9e1-75cd2c6f153d="" data-r-1_34_3_fa8b5369-f4d6-44e9-a9e1-75cd2c6f153d=""
           class="text sd appear">

           {{ $t('denki.a9') }}
           </p></div>
      <div data-s-57431973-d2c3-4459-8fe0-f2d4de0d45ef="" class="sd appear"><p
        data-s-2735d475-cea0-44c9-9490-0e22a5a3f015="" data-r-0_35_3_2735d475-cea0-44c9-9490-0e22a5a3f015=""
        class="text sd appear">

        {{ $t('denki.a10') }}
        </p>
        <p data-s-8cbcc6d1-4662-4640-ab28-ac0f16d14a10="" data-r-1_35_3_8cbcc6d1-4662-4640-ab28-ac0f16d14a10=""
           class="text sd appear">

           {{ $t('denki.a11') }}
           </p></div>
      <div data-s-380b5657-6339-49fa-9da5-5aa19559eeee="" class="sd appear"><p
        data-s-54d6640b-da4e-4658-8567-3290500dc7b4="" data-r-0_36_3_54d6640b-da4e-4658-8567-3290500dc7b4=""
        class="text sd appear">
        {{ $t('denki.a12') }}
        <br></p>
        <p data-s-69a58017-2159-4b8d-81d5-6de1b5d3885a="" data-r-1_36_3_69a58017-2159-4b8d-81d5-6de1b5d3885a=""
           class="text sd appear">
          {{ $t('denki.a13') }}
          </p>
      </div>
    </main>

  </div>
</template>

<script lang="ts">

export default {
  components: {},
  data() {
    return {};
  },
  created() {

  },
  computed: {},
  watch: {},
  async mounted() {

  },
  methods: {
    handleClick() {
      this.$message({ message: this.$t('trade.downApp'), type: "success" });
    }
  },
};
</script>

<style lang="scss" scoped>


.app[data-v-d12de11f] {
  align-items: center;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%
}

.title[data-v-d12de11f] {
  font-size: 34px;
  font-weight: 300;
  letter-spacing: 2.45px;
  line-height: 30px;
  margin: 30px
}

.spinner[data-v-36413753] {
  animation: loading-spin-36413753 1s linear infinite;
  height: 16px;
  pointer-events: none;
  width: 16px
}

.spinner[data-v-36413753]:before {
  border-bottom: 2px solid transparent;
  border-right: 2px solid transparent;
  border-color: transparent currentcolor currentcolor transparent;
  border-style: solid;
  border-width: 2px;
  opacity: .2
}

.spinner[data-v-36413753]:after, .spinner[data-v-36413753]:before {
  border-radius: 50%;
  box-sizing: border-box;
  content: "";
  height: 100%;
  position: absolute;
  width: 100%
}

.spinner[data-v-36413753]:after {
  border-left: 2px solid transparent;
  border-top: 2px solid transparent;
  border-color: currentcolor transparent transparent currentcolor;
  border-style: solid;
  border-width: 2px;
  opacity: 1
}

@keyframes loading-spin-36413753 {
  0% {
    transform: rotate(0)
  }

  to {
    transform: rotate(1turn)
  }
}

.design-canvas__modal {
  height: 100%;
  pointer-events: none;
  position: fixed;
  transition: none;
  width: 100%;
  z-index: 2
}

.design-canvas__modal:focus {
  outline: none
}

.design-canvas__modal.v-enter-active .studio-canvas, .design-canvas__modal.v-leave-active, .design-canvas__modal.v-leave-active .studio-canvas {
  transition: .4s cubic-bezier(.4, .4, 0, 1)
}

.design-canvas__modal.v-enter-active .studio-canvas *, .design-canvas__modal.v-leave-active .studio-canvas * {
  transition: none !important
}

.design-canvas__modal.isNone {
  transition: none
}

.design-canvas__modal .design-canvas__modal__base {
  height: 100%;
  left: 0;
  pointer-events: auto;
  position: fixed;
  top: 0;
  transition: .4s cubic-bezier(.4, .4, 0, 1);
  width: 100%;
  z-index: -1
}

.design-canvas__modal .studio-canvas {
  height: 100%;
  pointer-events: none
}

.design-canvas__modal .studio-canvas > * {
  background: none !important;
  pointer-events: none
}

.LoadMoreAnnouncer[data-v-6d8e87a0], .TitleAnnouncer[data-v-692a2727] {
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  clip: rect(0, 0, 0, 0);
  border-width: 0;
  white-space: nowrap
}

.publish-studio-style[data-v-5a0c3720], .product-font-style[data-v-51f515bd] {
  transition: .4s cubic-bezier(.4, .4, 0, 1)
}

@font-face {
  font-family: grandam;
  font-style: normal;
  font-weight: 400;
  src: url(https://storage.googleapis.com/studio-front/fonts/grandam.ttf) format("truetype")
}

@font-face {
  font-family: Material Icons;
  font-style: normal;
  font-weight: 400;
  src: url(https://storage.googleapis.com/production-os-assets/assets/material-icons/1629704621943/MaterialIcons-Regular.eot);
  src: local("Material Icons"), local("MaterialIcons-Regular"), url(https://storage.googleapis.com/production-os-assets/assets/material-icons/1629704621943/MaterialIcons-Regular.woff2) format("woff2"), url(https://storage.googleapis.com/production-os-assets/assets/material-icons/1629704621943/MaterialIcons-Regular.woff) format("woff"), url(https://storage.googleapis.com/production-os-assets/assets/material-icons/1629704621943/MaterialIcons-Regular.ttf) format("truetype")
}

.StudioCanvas {
  display: flex;
  height: auto;
  min-height: 100 dvh
}

.StudioCanvas > .sd {
  min-height: 100 dvh;
  overflow: clip
}

a, abbr, address, article, aside, audio, b, blockquote, body, button, canvas, caption, cite, code, dd, del, details, dfn, div, dl, dt, em, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, html, i, iframe, img, input, ins, kbd, label, legend, li, main, mark, menu, nav, object, ol, p, pre, q, samp, section, select, small, span, strong, sub, summary, sup, table, tbody, td, textarea, tfoot, th, thead, time, tr, ul, var, video {
  border: 0;
  font-family: sans-serif;
  line-height: 1;
  list-style: none;
  margin: 0;
  padding: 0;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-backface-visibility: hidden;
  box-sizing: border-box;
  color: #333;
  transition: .3s cubic-bezier(.4, .4, 0, 1);
  word-spacing: 1px
}

a:focus:not(:focus-visible), summary:focus:not(:focus-visible) {
  box-shadow: none;
  outline: none
}

button:focus:not(:focus-visible) {
  outline: none
}

nav ul {
  list-style: none
}

blockquote, q {
  quotes: none
}

blockquote:after, blockquote:before, q:after, q:before {
  content: none
}

a, button {
  background: transparent;
  font-size: 100%;
  margin: 0;
  padding: 0;
  vertical-align: baseline
}

ins {
  text-decoration: none
}

ins, mark {
  background-color: #ff9;
  color: #000
}

mark {
  font-style: italic;
  font-weight: 700
}

del {
  text-decoration: line-through
}

abbr[title], dfn[title] {
  border-bottom: 1px dotted;
  cursor: help
}

table {
  border-collapse: collapse;
  border-spacing: 0
}

hr {
  border: 0;
  border-top: 1px solid #ccc;
  display: block;
  height: 1px;
  margin: 1em 0;
  padding: 0
}

input, select {
  vertical-align: middle
}

textarea {
  resize: none
}

.clearfix:after {
  clear: both;
  content: "";
  display: block
}

[slot=after] button {
  overflow-anchor: none
}

.sd {
  flex-wrap: nowrap;
  max-width: 100%;
  pointer-events: all;
  z-index: 0;
  -webkit-overflow-scrolling: touch;
  align-content: center;
  align-items: center;
  display: flex;
  flex: none;
  flex-direction: column;
  position: relative
}

.sd::-webkit-scrollbar {
  display: none
}

.sd, .sd.richText * {
  transition-property: all, --g-angle, --g-color-0, --g-position-0, --g-color-1, --g-position-1, --g-color-2, --g-position-2, --g-color-3, --g-position-3, --g-color-4, --g-position-4, --g-color-5, --g-position-5, --g-color-6, --g-position-6, --g-color-7, --g-position-7, --g-color-8, --g-position-8, --g-color-9, --g-position-9, --g-color-10, --g-position-10, --g-color-11, --g-position-11
}

input.sd, textarea.sd {
  align-content: normal
}

.sd[tabindex]:focus {
  outline: none
}

.sd[tabindex]:focus-visible {
  outline: 1px solid;
  outline-color: Highlight;
  outline-color: -webkit-focus-ring-color
}

input[type=email], input[type=tel], input[type=text], select, textarea {
  -webkit-appearance: none
}

select {
  cursor: pointer
}

.frame {
  display: block;
  overflow: hidden
}

.frame > iframe {
  height: 100%;
  width: 100%
}

.frame .formrun-embed > iframe:not(:first-child) {
  display: none !important
}

.image {
  position: relative
}

.image:before {
  background-position: 50%;
  background-size: cover;
  border-radius: inherit;
  content: "";
  height: 100%;
  left: 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: inherit;
  width: 100%;
  z-index: -2
}

.sd.file {
  cursor: pointer;
  flex-direction: row;
  outline: 2px solid transparent;
  outline-offset: -1px;
  overflow-wrap: anywhere;
  word-break: break-word
}

.sd.file:focus-within {
  outline-color: Highlight;
  outline-color: -webkit-focus-ring-color
}

.file > input[type=file] {
  opacity: 0;
  pointer-events: none;
  position: absolute
}

.sd.icon, .sd.text {
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow: visible;
  overflow-wrap: anywhere;
  word-break: break-word
}

.material-icons {
  display: inline-block;
  font-family: Material Icons;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1;
  text-transform: none;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased
}

a, a.icon, a.text {
  -webkit-tap-highlight-color: rgba(0, 0, 0, .15)
}

.fixed {
  z-index: 2
}

.sticky {
  z-index: 1
}

.button {
  transition: .4s cubic-bezier(.4, .4, 0, 1)
}

.button, .link {
  cursor: pointer
}

.submitLoading {
  opacity: .5 !important;
  pointer-events: none !important
}

.richText {
  display: block;
  word-break: break-word
}

.richText [data-thread], .richText a, .richText blockquote, .richText em, .richText h1, .richText h2, .richText h3, .richText h4, .richText li, .richText ol, .richText p, .richText p > code, .richText pre, .richText pre > code, .richText s, .richText strong, .richText table tbody, .richText table tbody tr, .richText table tbody tr > td, .richText table tbody tr > th, .richText u, .richText ul {
  backface-visibility: visible;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  font-style: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  text-align: inherit
}

.richText p {
  display: block;
  margin: 10px 0
}

.richText > p {
  min-height: 1em
}

.richText img, .richText video {
  height: auto;
  max-width: 100%;
  vertical-align: bottom
}

.richText h1 {
  display: block;
  font-size: 3em;
  font-weight: 700;
  margin: 20px 0
}

.richText h2 {
  font-size: 2em
}

.richText h2, .richText h3 {
  display: block;
  font-weight: 700;
  margin: 10px 0
}

.richText h3 {
  font-size: 1em
}

.richText h4, .richText h5 {
  font-weight: 600
}

.richText h4, .richText h5, .richText h6 {
  display: block;
  font-size: 1em;
  margin: 10px 0
}

.richText h6 {
  font-weight: 500
}

.richText [data-type=table] {
  overflow-x: auto
}

.richText [data-type=table] p {
  white-space: pre-line;
  word-break: break-all
}

.richText table {
  border: 1px solid #f2f2f2;
  border-collapse: collapse;
  border-spacing: unset;
  color: #1a1a1a;
  font-size: 14px;
  line-height: 1.4;
  margin: 10px 0;
  table-layout: auto
}

.richText table tr th {
  background: hsla(0, 0%, 96%, .5)
}

.richText table tr td, .richText table tr th {
  border: 1px solid #f2f2f2;
  max-width: 240px;
  min-width: 100px;
  padding: 12px
}

.richText table tr td p, .richText table tr th p {
  margin: 0
}

.richText blockquote {
  border-left: 3px solid rgba(0, 0, 0, .15);
  font-style: italic;
  margin: 10px 0;
  padding: 10px 15px
}

.richText [data-type=embed_code] {
  margin: 20px 0;
  position: relative
}

.richText [data-type=embed_code] > .height-adjuster > .wrapper {
  position: relative
}

.richText [data-type=embed_code] > .height-adjuster > .wrapper[style*=padding-top] iframe {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%
}

.richText [data-type=embed_code][data-embed-sandbox=true] {
  display: block;
  overflow: hidden
}

.richText [data-type=embed_code][data-embed-code-type=instagram] > .height-adjuster > .wrapper[style*=padding-top] {
  padding-top: 100%
}

.richText [data-type=embed_code][data-embed-code-type=instagram] > .height-adjuster > .wrapper[style*=padding-top] blockquote {
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%
}

.richText [data-type=embed_code][data-embed-code-type=codepen] > .height-adjuster > .wrapper {
  padding-top: 50%
}

.richText [data-type=embed_code][data-embed-code-type=codepen] > .height-adjuster > .wrapper iframe {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%
}

.richText [data-type=embed_code][data-embed-code-type=slideshare] > .height-adjuster > .wrapper {
  padding-top: 56.25%
}

.richText [data-type=embed_code][data-embed-code-type=slideshare] > .height-adjuster > .wrapper iframe {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%
}

.richText [data-type=embed_code][data-embed-code-type=speakerdeck] > .height-adjuster > .wrapper {
  padding-top: 56.25%
}

.richText [data-type=embed_code][data-embed-code-type=speakerdeck] > .height-adjuster > .wrapper iframe {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%
}

.richText [data-type=embed_code][data-embed-code-type=snapwidget] > .height-adjuster > .wrapper {
  padding-top: 30%
}

.richText [data-type=embed_code][data-embed-code-type=snapwidget] > .height-adjuster > .wrapper iframe {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%
}

.richText [data-type=embed_code][data-embed-code-type=firework] > .height-adjuster > .wrapper fw-embed-feed {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none
}

.richText [data-type=embed_code_empty] {
  display: none
}

.richText ul {
  margin: 0 0 0 20px
}

.richText ul li {
  list-style: disc;
  margin: 10px 0
}

.richText ul li p {
  margin: 0
}

.richText ol {
  margin: 0 0 0 20px
}

.richText ol li {
  list-style: decimal;
  margin: 10px 0
}

.richText ol li p {
  margin: 0
}

.richText hr {
  border-top: 1px solid #ccc;
  margin: 10px 0
}

.richText p > code {
  background: #eee;
  border: 1px solid rgba(0, 0, 0, .1);
  border-radius: 6px;
  display: inline;
  margin: 2px;
  padding: 0 5px
}

.richText pre {
  background: #eee;
  border-radius: 6px;
  font-family: Menlo, Monaco, Courier New, monospace;
  margin: 20px 0;
  padding: 25px 35px;
  white-space: pre-wrap
}

.richText pre code {
  border: none;
  padding: 0
}

.richText strong {
  color: inherit;
  display: inline;
  font-family: inherit;
  font-weight: 900
}

.richText em {
  font-style: italic
}

.richText a, .richText u {
  text-decoration: underline
}

.richText a {
  color: #007cff;
  display: inline
}

.richText s {
  text-decoration: line-through
}

.richText [data-type=table_of_contents] {
  background-color: #f5f5f5;
  border-radius: 2px;
  color: #616161;
  font-size: 16px;
  list-style: none;
  margin: 0;
  padding: 24px 24px 8px;
  text-decoration: underline
}

.richText [data-type=table_of_contents] .toc_list {
  margin: 0
}

.richText [data-type=table_of_contents] .toc_item {
  color: currentColor;
  font-size: inherit !important;
  font-weight: inherit;
  list-style: none
}

.richText [data-type=table_of_contents] .toc_item > a {
  border: none;
  color: currentColor;
  font-size: inherit !important;
  font-weight: inherit;
  text-decoration: none
}

.richText [data-type=table_of_contents] .toc_item > a:hover {
  opacity: .7
}

.richText [data-type=table_of_contents] .toc_item--1 {
  margin: 0 0 16px
}

.richText [data-type=table_of_contents] .toc_item--2 {
  margin: 0 0 16px;
  padding-left: 2rem
}

.richText [data-type=table_of_contents] .toc_item--3 {
  margin: 0 0 16px;
  padding-left: 4rem
}

.sd.section {
  align-content: center !important;
  align-items: center !important;
  flex-direction: column !important;
  flex-wrap: nowrap !important;
  height: auto !important;
  max-width: 100% !important;
  padding: 0 !important;
  width: 100% !important
}

.sd.section-inner {
  position: static !important
}

@property --g-angle {
  syntax: "<angle>";
  inherits: false;
  initial-value: 180deg
}

@property --g-color-0 {
  syntax: "<color>";
  inherits: false;
  initial-value: transparent
}

@property --g-position-0 {
  syntax: "<percentage>";
  inherits: false;
  initial-value: .01%
}

@property --g-color-1 {
  syntax: "<color>";
  inherits: false;
  initial-value: transparent
}

@property --g-position-1 {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%
}

@property --g-color-2 {
  syntax: "<color>";
  inherits: false;
  initial-value: transparent
}

@property --g-position-2 {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%
}

@property --g-color-3 {
  syntax: "<color>";
  inherits: false;
  initial-value: transparent
}

@property --g-position-3 {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%
}

@property --g-color-4 {
  syntax: "<color>";
  inherits: false;
  initial-value: transparent
}

@property --g-position-4 {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%
}

@property --g-color-5 {
  syntax: "<color>";
  inherits: false;
  initial-value: transparent
}

@property --g-position-5 {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%
}

@property --g-color-6 {
  syntax: "<color>";
  inherits: false;
  initial-value: transparent
}

@property --g-position-6 {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%
}

@property --g-color-7 {
  syntax: "<color>";
  inherits: false;
  initial-value: transparent
}

@property --g-position-7 {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%
}

@property --g-color-8 {
  syntax: "<color>";
  inherits: false;
  initial-value: transparent
}

@property --g-position-8 {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%
}

@property --g-color-9 {
  syntax: "<color>";
  inherits: false;
  initial-value: transparent
}

@property --g-position-9 {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%
}

@property --g-color-10 {
  syntax: "<color>";
  inherits: false;
  initial-value: transparent
}

@property --g-position-10 {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%
}

@property --g-color-11 {
  syntax: "<color>";
  inherits: false;
  initial-value: transparent
}

@property --g-position-11 {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%
}

.snackbar[data-v-3129703d] {
  align-items: center;
  background: #fff;
  border: 1px solid #ededed;
  border-radius: 6px;
  box-shadow: 0 16px 48px -8px #00000014, 0 10px 25px -5px #0000001c;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: space-between;
  left: 50%;
  max-width: 90vw;
  padding: 16px 20px;
  position: fixed;
  top: 32px;
  transform: translate(-50%);
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  width: 480px;
  z-index: 9999
}

.snackbar.v-enter-active[data-v-3129703d], .snackbar.v-leave-active[data-v-3129703d] {
  transition: .4s cubic-bezier(.4, .4, 0, 1)
}

.snackbar.v-enter-from[data-v-3129703d], .snackbar.v-leave-to[data-v-3129703d] {
  opacity: 0;
  transform: translate(-50%, -10px)
}

.snackbar .convey[data-v-3129703d] {
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding: 0
}

.snackbar .convey .icon[data-v-3129703d] {
  background-position: 50%;
  background-repeat: no-repeat;
  flex-shrink: 0;
  height: 24px;
  width: 24px
}

.snackbar .convey .message[data-v-3129703d] {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  white-space: pre-line
}

.snackbar .convey.error .icon[data-v-3129703d] {
  //background-image: url(./close_circle.c7480f3c.svg)
}

.snackbar .convey.error .message[data-v-3129703d] {
  color: #f84f65
}

.snackbar .convey.success .icon[data-v-3129703d] {
  //background-image: url(./round_check.0ebac23f.svg)
}

.snackbar .convey.success .message[data-v-3129703d] {
  color: #111
}

.snackbar .button[data-v-3129703d] {
  align-items: center;
  border-radius: 40px;
  color: #4b9cfb;
  display: flex;
  flex-shrink: 0;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  justify-content: center;
  line-height: 16px;
  padding: 4px 8px
}

.snackbar .button[data-v-3129703d]:hover {
  background: #f5f5f5
}

a[data-v-60d33773] {
  align-items: center;
  border-radius: 4px;
  bottom: 20px;
  height: 20px;
  justify-content: center;
  left: 20px;
  perspective: 300px;
  position: fixed;
  transition: 0s linear;
  width: 84px;
  z-index: 2000
}

@media (hover: hover) {
  a[data-v-60d33773] {
    transition: .4s cubic-bezier(.4, .4, 0, 1)
  }

  a[data-v-60d33773]:hover {
    height: 32px;
    width: 200px
  }
}

[data-v-60d33773] .custom-fill path {
  fill: var(--01abf230)
}

.fade-enter-active[data-v-60d33773], .fade-leave-active[data-v-60d33773] {
  transition: opacity .2s cubic-bezier(.4, .4, 0, 1)
}

.fade-enter[data-v-60d33773], .fade-leave-to[data-v-60d33773] {
  opacity: 0
}

.sd[data-s-f0bfbef1] {
  font-family: var(--s-font-dbaaa0c4);
  font-size: 48px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.1;
}

.sd[data-s-55a88997] {
  font-family: var(--s-font-dbaaa0c4);
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.2;
}

.sd[data-s-a9a055ec] {
  font-family: var(--s-font-dbaaa0c4);
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.4;
}

.sd[data-s-e2b3c540] {
  font-family: var(--s-font-dbaaa0c4);
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.5;
}

.sd[data-s-3cb65dde] {
  font-family: var(--s-font-dbaaa0c4);
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.4;
}

body {
  background: linear-gradient(90deg, rgb(243, 249, 254) 100%, #ffffff);
  transition: background 0.5s cubic-bezier(0.4, 0.4, 0, 1);
}

.sd[data-s-66e5ee07-e9fb-47f8-96c6-d2ee282a96e5] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  flex-direction: column;
  flex-wrap: nowrap;
  height: 100%;
  justify-content: flex-start;
  padding: 0px 0px 0px 0px;
  width: 100%;
  max-width: 100%;
  --g-color-0: rgb(243, 249, 254);
  --g-position-0: 100%;
  --g-color-1: #ffffff;
  --g-position-1: 100%;
  --g-color-2: #ffffff;
  --g-position-2: 100%;
  --g-color-3: #ffffff;
  --g-position-3: 100%;
  --g-color-4: #ffffff;
  --g-position-4: 100%;
  --g-color-5: #ffffff;
  --g-position-5: 100%;
  --g-color-6: #ffffff;
  --g-position-6: 100%;
  --g-color-7: #ffffff;
  --g-position-7: 100%;
  --g-color-8: #ffffff;
  --g-position-8: 100%;
  --g-color-9: #ffffff;
  --g-position-9: 100%;
  --g-color-10: #ffffff;
  --g-position-10: 100%;
  --g-color-11: #ffffff;
  --g-position-11: 100%;
  --g-angle: 90deg;
}

.sd[data-s-4731dd03-6e23-43b5-a7b7-f44dfd4693a7] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 80px;
  justify-content: space-between;
  margin: 0 0 0 0;
  overflow-x: visible;
  overflow-y: visible;
  padding: 0px 50px 0px 35px;
  position: relative;
  width: 100%;
  max-width: 100%;
  --g-color-0: rgb(243, 249, 254);
  --g-position-0: 100%;
  --g-color-1: #ffffff;
  --g-position-1: 100%;
  --g-color-2: #ffffff;
  --g-position-2: 100%;
  --g-color-3: #ffffff;
  --g-position-3: 100%;
  --g-color-4: #ffffff;
  --g-position-4: 100%;
  --g-color-5: #ffffff;
  --g-position-5: 100%;
  --g-color-6: #ffffff;
  --g-position-6: 100%;
  --g-color-7: #ffffff;
  --g-position-7: 100%;
  --g-color-8: #ffffff;
  --g-position-8: 100%;
  --g-color-9: #ffffff;
  --g-position-9: 100%;
  --g-color-10: #ffffff;
  --g-position-10: 100%;
  --g-color-11: #ffffff;
  --g-position-11: 100%;
  --g-angle: 90deg;
}

@media screen and (max-width: 630px) {
  .sd[data-s-4731dd03-6e23-43b5-a7b7-f44dfd4693a7] {
    margin: 0px 0px 0px 0px;
    padding: 0px 16px 0px 12px;
    width: 100%;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-4731dd03-6e23-43b5-a7b7-f44dfd4693a7] {
    height: 54px;
    padding: 0px 4px 0px 12px;
    width: 100%;
    max-width: 100%;
  }
}

.sd[data-s-d2f74cdc-3f0f-412d-bb07-41f92668e17c] {
  align-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.0);
  display: flex;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: auto;
  justify-content: center;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px;
  width: auto;
  z-index: 5;
  max-width: 100%;
}

.sd[data-s-d2f74cdc-3f0f-412d-bb07-41f92668e17c]:hover {
  flex: none;
  padding: 0px 0px 0px;
  transform: scale(1.1, 1.1);
}

@media screen and (max-width: 890px) {
  .sd[data-s-d2f74cdc-3f0f-412d-bb07-41f92668e17c] {
    display: flex;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-d2f74cdc-3f0f-412d-bb07-41f92668e17c] {
    display: flex;
    flex: none;
    height: auto;
    margin: 0px 0px 0px 0px;
    width: 30%;
    max-width: 30%;
  }
}

.sd[data-s-ef7b44ce-b335-4b3c-83cd-60a26aad5b3c] {
  flex: none;
  height: auto;
  margin: 0px 0px 0px 0px;
  width: 192px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-ef7b44ce-b335-4b3c-83cd-60a26aad5b3c] {
    margin: 0px 0px 0px 0px;
  }
}

.sd[data-s-d17199c3-fff7-4c30-acd9-2d34f8bc2fe2] {
  align-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.0);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 80px;
  justify-content: flex-end;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  width: auto;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-d17199c3-fff7-4c30-acd9-2d34f8bc2fe2] {
    padding: 0px 0px 0px 0px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-d17199c3-fff7-4c30-acd9-2d34f8bc2fe2] {
    height: auto;
    margin: 0px 0px 0px 16px;
    padding: 0px 0px 0px 0px;
    width: auto;
    max-width: calc(100% - 16px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-d17199c3-fff7-4c30-acd9-2d34f8bc2fe2] {
    height: auto;
    padding: 0px 0px 0px 0px;
    width: auto;
  }
}

.sd[data-s-c060222a-659f-4db9-8f9e-f37ac941fa37] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  height: auto;
  justify-content: center;
  margin: 0px 25px 0px 0px;
  padding: 0px 0px 0px 0px;
  position: relative;
  width: auto;
  z-index: 5;
  max-width: calc(100% - 25px);
  --g-color-0: rgb(243, 249, 254);
  --g-position-0: 100%;
  --g-color-1: #ffffff;
  --g-position-1: 100%;
  --g-color-2: #ffffff;
  --g-position-2: 100%;
  --g-color-3: #ffffff;
  --g-position-3: 100%;
  --g-color-4: #ffffff;
  --g-position-4: 100%;
  --g-color-5: #ffffff;
  --g-position-5: 100%;
  --g-color-6: #ffffff;
  --g-position-6: 100%;
  --g-color-7: #ffffff;
  --g-position-7: 100%;
  --g-color-8: #ffffff;
  --g-position-8: 100%;
  --g-color-9: #ffffff;
  --g-position-9: 100%;
  --g-color-10: #ffffff;
  --g-position-10: 100%;
  --g-color-11: #ffffff;
  --g-position-11: 100%;
  --g-angle: 90deg;
}

.sd[data-s-c060222a-659f-4db9-8f9e-f37ac941fa37]:hover {
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  --g-color-0: rgb(254, 254, 84);
  --g-position-0: 100%;
  --g-color-1: #ffffff;
  --g-position-1: 100%;
  --g-color-2: #ffffff;
  --g-position-2: 100%;
  --g-color-3: #ffffff;
  --g-position-3: 100%;
  --g-color-4: #ffffff;
  --g-position-4: 100%;
  --g-color-5: #ffffff;
  --g-position-5: 100%;
  --g-color-6: #ffffff;
  --g-position-6: 100%;
  --g-color-7: #ffffff;
  --g-position-7: 100%;
  --g-color-8: #ffffff;
  --g-position-8: 100%;
  --g-color-9: #ffffff;
  --g-position-9: 100%;
  --g-color-10: #ffffff;
  --g-position-10: 100%;
  --g-color-11: #ffffff;
  --g-position-11: 100%;
  --g-angle: 90deg;
}

@media screen and (max-width: 890px) {
  .sd[data-s-c060222a-659f-4db9-8f9e-f37ac941fa37] {
    display: flex;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-c060222a-659f-4db9-8f9e-f37ac941fa37] {
    display: none;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-c060222a-659f-4db9-8f9e-f37ac941fa37] {
    display: none;
  }
}

.sd[data-s-e9d3e8bc-594b-4007-9baf-64cf1081d070] {
  color: #1575ac;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  padding: 0px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-82cbf827-c420-41c8-a3b5-0ac73e8cc9ae] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: auto;
  justify-content: center;
  margin: 0px 25px 0px 0px;
  position: relative;
  width: auto;
  z-index: 5;
  max-width: calc(100% - 25px);
  --g-color-0: rgb(243, 249, 254);
  --g-position-0: 100%;
  --g-color-1: #ffffff;
  --g-position-1: 100%;
  --g-color-2: #ffffff;
  --g-position-2: 100%;
  --g-color-3: #ffffff;
  --g-position-3: 100%;
  --g-color-4: #ffffff;
  --g-position-4: 100%;
  --g-color-5: #ffffff;
  --g-position-5: 100%;
  --g-color-6: #ffffff;
  --g-position-6: 100%;
  --g-color-7: #ffffff;
  --g-position-7: 100%;
  --g-color-8: #ffffff;
  --g-position-8: 100%;
  --g-color-9: #ffffff;
  --g-position-9: 100%;
  --g-color-10: #ffffff;
  --g-position-10: 100%;
  --g-color-11: #ffffff;
  --g-position-11: 100%;
  --g-angle: 90deg;
}

.sd[data-s-82cbf827-c420-41c8-a3b5-0ac73e8cc9ae]:hover {
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  --g-color-0: rgb(254, 254, 84);
  --g-position-0: 100%;
  --g-color-1: #ffffff;
  --g-position-1: 100%;
  --g-color-2: #ffffff;
  --g-position-2: 100%;
  --g-color-3: #ffffff;
  --g-position-3: 100%;
  --g-color-4: #ffffff;
  --g-position-4: 100%;
  --g-color-5: #ffffff;
  --g-position-5: 100%;
  --g-color-6: #ffffff;
  --g-position-6: 100%;
  --g-color-7: #ffffff;
  --g-position-7: 100%;
  --g-color-8: #ffffff;
  --g-position-8: 100%;
  --g-color-9: #ffffff;
  --g-position-9: 100%;
  --g-color-10: #ffffff;
  --g-position-10: 100%;
  --g-color-11: #ffffff;
  --g-position-11: 100%;
  --g-angle: 90deg;
}

@media screen and (max-width: 890px) {
  .sd[data-s-82cbf827-c420-41c8-a3b5-0ac73e8cc9ae] {
    display: flex;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-82cbf827-c420-41c8-a3b5-0ac73e8cc9ae] {
    display: flex;
    margin: 0px 15px 0px 0px;
    max-width: calc(100% - 15px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-82cbf827-c420-41c8-a3b5-0ac73e8cc9ae] {
    display: flex;
    margin: 0px 10px 0px 0px;
    max-width: calc(100% - 10px);
  }
}

.sd[data-s-54d40126-8748-4640-a905-cfb3ecdef5e9] {
  color: #1575ac;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-54d40126-8748-4640-a905-cfb3ecdef5e9] {
    font-size: 14px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-54d40126-8748-4640-a905-cfb3ecdef5e9] {
    font-size: 10px;
  }
}

.sd[data-s-b2fa4192-9484-4c27-b5db-9ce07128c136] {
  color: rgba(21, 117, 172, 0.5);
  font-size: 24px;
  height: 18px;
  width: 24px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-b2fa4192-9484-4c27-b5db-9ce07128c136] {
    font-size: 14px;
    width: auto;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-b2fa4192-9484-4c27-b5db-9ce07128c136] {
    font-size: 12px;
    width: auto;
  }
}

.sd[data-s-0c961333-e816-43f7-8ba0-a706342614a8] {
  align-content: center;
  align-items: center;
  background: rgb(226, 241, 254);
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 1022px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 100%;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-0c961333-e816-43f7-8ba0-a706342614a8] {
    display: flex;
    flex: none;
    height: 1099px;
    width: 100%;
    max-width: 100%;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-0c961333-e816-43f7-8ba0-a706342614a8] {
    display: flex;
    flex: none;
    height: auto;
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
    width: 100%;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-0c961333-e816-43f7-8ba0-a706342614a8] {
    flex: none;
    height: auto;
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
  }
}

.sd[data-s-d7321b07-2e27-45a0-be32-78c07dad332e] {
  align-content: center;
  align-items: center;
  background: rgb(228, 241, 254);
  border-radius: 0;
  display: flex;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 100%;
  justify-content: flex-start;
  margin: 0px 0px 0px 150px;
  padding: 0px 0px 1px 0px;
  width: calc(50% - 150px);
  max-width: calc(50% - 150px);
}

@media screen and (max-width: 890px) {
  .sd[data-s-d7321b07-2e27-45a0-be32-78c07dad332e] {
    display: flex;
    flex: none;
    height: auto;
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 1px 0px;
    width: 100%;
    max-width: 100%;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-d7321b07-2e27-45a0-be32-78c07dad332e] {
    background: rgb(228, 241, 254);
    display: flex;
    height: 100%;
    padding: 0px 0px 1px 0px;
    width: 100%;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-d7321b07-2e27-45a0-be32-78c07dad332e] {
    flex: none;
    height: auto;
    padding: 0px 0px 1px 0px;
    width: 100%;
    max-width: 100%;
  }
}

.sd[data-s-a2937385-521d-4253-8531-d1610213b117] {
  display: none;
  height: auto;
  width: 160px;
  max-width: 100%;
}

.sd[data-s-a2937385-521d-4253-8531-d1610213b117]:before {
}

@media screen and (max-width: 890px) {
  .sd[data-s-a2937385-521d-4253-8531-d1610213b117] {
    display: flex;
    flex: none;
    height: 533px;
    width: auto;
    max-width: 100%;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-a2937385-521d-4253-8531-d1610213b117] {
    display: flex;
    height: 336px;
    margin: 0px 20px 0px 20px;
    width: calc(100% - 40px);
    max-width: calc(100% - 40px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-a2937385-521d-4253-8531-d1610213b117]:before {
    background-size: contain;
  }
  .sd[data-s-a2937385-521d-4253-8531-d1610213b117] {
    height: 226px;
    width: calc(100% - 40px);
    max-width: calc(100% - 40px);
  }
}

.sd[data-s-68ebee98-6d81-4c45-a6f4-03e98391b3fa] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 48px;
  font-weight: 900;
  height: calc(50% - 100px);
  line-height: 1.3;
  margin: 100px 0px 0px 0px;
  padding: 0px 27px 0px 27px;
  text-align: left;
  width: 100%;
  max-width: 100%;
  justify-content: flex-start;
}

@media screen and (max-width: 890px) {
  .sd[data-s-68ebee98-6d81-4c45-a6f4-03e98391b3fa] {
    flex: none;
    font-size: 64px;
    height: 273px;
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 51px;
    text-align: left;
    width: 100%;
    max-width: 100%;
    justify-content: flex-start;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-68ebee98-6d81-4c45-a6f4-03e98391b3fa] {
    display: none;
    height: 381px;
    padding: 0px 30px 0px 30px;
    width: 100%;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-68ebee98-6d81-4c45-a6f4-03e98391b3fa] {
    display: none;
    font-size: 32px;
    height: 135px;
    padding: 0px 10px 0px 10px;
    width: 100%;
    max-width: 100%;
  }
}

.sd[data-s-3c0b1c4b-2217-47c9-81de-b93d7e83046c] {
  background: #EEEEEE;
  display: none;
  height: 50px;
  width: 50px;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-3c0b1c4b-2217-47c9-81de-b93d7e83046c] {
    display: none;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-3c0b1c4b-2217-47c9-81de-b93d7e83046c] {
    align-content: center;
    align-items: center;
    background: rgb(228, 241, 254);
    display: flex;
    flex: none;
    flex-direction: column;
    flex-wrap: nowrap;
    height: auto;
    justify-content: center;
    padding: 0px 0px 0px 24px;
    width: auto;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-3c0b1c4b-2217-47c9-81de-b93d7e83046c] {
    display: flex;
    flex: none;
    padding: 0px 0px 0px 20px;
    width: 100%;
    max-width: 100%;
  }
}

.sd[data-s-cc10479f-6ec8-44c3-8b12-97307f228c5a] {
  color: #333;
  font-family: var(--s-font-d7b1509a);
  font-size: 20px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-cc10479f-6ec8-44c3-8b12-97307f228c5a] {
    color: #1575ac;
    flex: none;
    font-size: 36px;
    font-weight: 900;
    height: 153px;
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
    text-align: left;
    width: 441px;
    max-width: 100%;
    justify-content: flex-start;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-cc10479f-6ec8-44c3-8b12-97307f228c5a] {
    font-size: 28px;
    height: 153px;
  }
}

.sd[data-s-dfdd0ce3-9fc6-4c9c-ae59-bc54a8d53357] {
  align-content: center;
  align-items: center;
  background: #3cd3a5;
  border-radius: 12px;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 65px;
  justify-content: center;
  margin: 20px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  width: 90%;
  max-width: 90%;
}

.sd[data-s-dfdd0ce3-9fc6-4c9c-ae59-bc54a8d53357]:hover {
  background: rgba(60, 211, 165, 0.5);
  flex: none;
}

@media screen and (max-width: 890px) {
  .sd[data-s-dfdd0ce3-9fc6-4c9c-ae59-bc54a8d53357] {
    margin: 30px 0px 0px 0px;
    width: 90%;
    max-width: 90%;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-dfdd0ce3-9fc6-4c9c-ae59-bc54a8d53357] {
    margin: 30px 20px 0px 20px;
    width: calc(90% - 40px);
    max-width: calc(90% - 40px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-dfdd0ce3-9fc6-4c9c-ae59-bc54a8d53357] {
    height: 56px;
    margin: 10px 30px 0px 30px;
    width: calc(90% - 60px);
    max-width: calc(90% - 60px);
  }
}

.sd[data-s-48b25eed-4052-4964-a478-b0abaef6db83] {
  color: rgb(255, 255, 255);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 18px;
  font-weight: 900;
  height: 38px;
  line-height: 1.4;
  text-align: center;
  width: 96px;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-5b551e06-8d43-4a97-adc2-fa7010788a68] {
  align-content: center;
  align-items: center;
  background: rgb(228, 241, 254);
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  width: 100%;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-5b551e06-8d43-4a97-adc2-fa7010788a68] {
    margin: 0px 0px 0px 0px;
  }
}

.sd[data-s-9b49e601-3687-4850-81d4-385deb374387] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 700;
  height: auto;
  line-height: 1.4;
  text-align: center;
  text-decoration: none;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-9b49e601-3687-4850-81d4-385deb374387]:hover {
  color: rgba(0, 0, 0, 0.3);
}

@media screen and (max-width: 890px) {
  .sd[data-s-9b49e601-3687-4850-81d4-385deb374387] {
    height: auto;
    text-align: center;
    justify-content: center;
  }
}

.sd[data-s-75f30bd3-062e-49e2-944f-9d6254bfd713] {
  align-content: flex-start;
  align-items: flex-start;
  background: rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 75px;
  justify-content: center;
  margin: 0px 0px 0px 0px;
  padding: 0px 27px 0px 27px;
  width: 100%;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-75f30bd3-062e-49e2-944f-9d6254bfd713] {
    margin: 0px 0px 0px 0px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-75f30bd3-062e-49e2-944f-9d6254bfd713] {
    display: none;
    padding: 0px 60px 0px 60px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-75f30bd3-062e-49e2-944f-9d6254bfd713] {
    display: none;
    padding: 0px 30px 0px 30px;
  }
}

.sd[data-s-c9065889-b02a-412a-8132-83cc717f6e5d] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-4f938bb5-7452-4dd9-b2ad-149c4104d7bc] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: left;
  width: auto;
  max-width: 100%;
  justify-content: flex-start;
}

@media screen and (max-width: 890px) {
  .sd[data-s-4f938bb5-7452-4dd9-b2ad-149c4104d7bc] {
    text-align: center;
    justify-content: center;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-4f938bb5-7452-4dd9-b2ad-149c4104d7bc] {
    text-align: left;
    justify-content: flex-start;
  }
}

.sd[data-s-2a6e9af8-4a6e-4049-983d-1f6e2c7852fb] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: left;
  width: auto;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-2a6e9af8-4a6e-4049-983d-1f6e2c7852fb]:hover {
  color: #d9d9d9;
}

@media screen and (max-width: 890px) {
  .sd[data-s-2a6e9af8-4a6e-4049-983d-1f6e2c7852fb] {
    text-align: center;
    justify-content: center;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-2a6e9af8-4a6e-4049-983d-1f6e2c7852fb] {
    text-align: left;
    justify-content: flex-start;
  }
}

.sd[data-s-4cd32eac-20ba-412b-943d-04617e446916] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: left;
  width: auto;
  max-width: 100%;
  justify-content: flex-start;
}

@media screen and (max-width: 890px) {
  .sd[data-s-4cd32eac-20ba-412b-943d-04617e446916] {
    text-align: center;
    justify-content: center;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-4cd32eac-20ba-412b-943d-04617e446916] {
    text-align: left;
    justify-content: flex-start;
  }
}

.sd[data-s-b1bd69ad-ffdb-44ee-a5cc-d2594ac7a5db] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: left;
  width: auto;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-b1bd69ad-ffdb-44ee-a5cc-d2594ac7a5db]:hover {
  color: #d9d9d9;
}

@media screen and (max-width: 890px) {
  .sd[data-s-b1bd69ad-ffdb-44ee-a5cc-d2594ac7a5db] {
    text-align: center;
    justify-content: center;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-b1bd69ad-ffdb-44ee-a5cc-d2594ac7a5db] {
    text-align: left;
    justify-content: flex-start;
  }
}

.sd[data-s-043a542f-7fe4-4777-babb-8f82b816f5f5] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: left;
  width: auto;
  max-width: 100%;
  justify-content: flex-start;
}

@media screen and (max-width: 890px) {
  .sd[data-s-043a542f-7fe4-4777-babb-8f82b816f5f5] {
    text-align: center;
    justify-content: center;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-043a542f-7fe4-4777-babb-8f82b816f5f5] {
    text-align: left;
    justify-content: flex-start;
  }
}

.sd[data-s-36fb2034-165c-41fc-9eef-99b92ef5c4c1] {
  align-content: flex-start;
  align-items: flex-start;
  background: rgb(228, 241, 254);
  display: none;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 75px;
  justify-content: center;
  margin: 0px 0px 0px 0px;
  padding: 0px 27px 0px 27px;
  width: 100%;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-36fb2034-165c-41fc-9eef-99b92ef5c4c1] {
    display: none;
    margin: 0px 0px 0px 0px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-36fb2034-165c-41fc-9eef-99b92ef5c4c1] {
    display: flex;
    padding: 0px 60px 0px 60px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-36fb2034-165c-41fc-9eef-99b92ef5c4c1] {
    display: flex;
    padding: 0px 30px 0px 30px;
  }
}

.sd[data-s-cd02206b-faa7-4502-a7dc-236b6092cd71] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-32d28329-8edc-4c2f-ae1f-01313e20f921] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: left;
  width: auto;
  max-width: 100%;
  justify-content: flex-start;
}

@media screen and (max-width: 890px) {
  .sd[data-s-32d28329-8edc-4c2f-ae1f-01313e20f921] {
    text-align: center;
    justify-content: center;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-32d28329-8edc-4c2f-ae1f-01313e20f921] {
    text-align: left;
    justify-content: flex-start;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-32d28329-8edc-4c2f-ae1f-01313e20f921] {
    font-size: 10px;
  }
}

.sd[data-s-99971bf0-1644-4487-9f3d-0f2f7c16617a] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: left;
  width: auto;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-99971bf0-1644-4487-9f3d-0f2f7c16617a]:hover {
  color: #d9d9d9;
}

@media screen and (max-width: 890px) {
  .sd[data-s-99971bf0-1644-4487-9f3d-0f2f7c16617a] {
    text-align: center;
    justify-content: center;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-99971bf0-1644-4487-9f3d-0f2f7c16617a] {
    text-align: left;
    justify-content: flex-start;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-99971bf0-1644-4487-9f3d-0f2f7c16617a] {
    font-size: 10px;
  }
}

.sd[data-s-261f02e6-8636-4d8d-bfec-f9f6fbd6c66b] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: left;
  width: auto;
  max-width: 100%;
  justify-content: flex-start;
}

@media screen and (max-width: 890px) {
  .sd[data-s-261f02e6-8636-4d8d-bfec-f9f6fbd6c66b] {
    text-align: center;
    justify-content: center;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-261f02e6-8636-4d8d-bfec-f9f6fbd6c66b] {
    text-align: left;
    justify-content: flex-start;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-261f02e6-8636-4d8d-bfec-f9f6fbd6c66b] {
    font-size: 10px;
  }
}

.sd[data-s-b2b7eeda-e39b-433f-9609-665b0fe28c48] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 320px) {
  .sd[data-s-b2b7eeda-e39b-433f-9609-665b0fe28c48] {
    font-size: 10px;
  }
}

.sd[data-s-263a2b7f-d961-439d-92bb-d45913e2f326] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: left;
  width: auto;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-263a2b7f-d961-439d-92bb-d45913e2f326]:hover {
  color: #d9d9d9;
}

@media screen and (max-width: 890px) {
  .sd[data-s-263a2b7f-d961-439d-92bb-d45913e2f326] {
    text-align: center;
    justify-content: center;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-263a2b7f-d961-439d-92bb-d45913e2f326] {
    text-align: left;
    justify-content: flex-start;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-263a2b7f-d961-439d-92bb-d45913e2f326] {
    font-size: 10px;
  }
}

.sd[data-s-3a3ab199-fe68-4f96-92c1-93c885782267] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: left;
  width: auto;
  max-width: 100%;
  justify-content: flex-start;
}

@media screen and (max-width: 890px) {
  .sd[data-s-3a3ab199-fe68-4f96-92c1-93c885782267] {
    text-align: center;
    justify-content: center;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-3a3ab199-fe68-4f96-92c1-93c885782267] {
    text-align: left;
    justify-content: flex-start;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-3a3ab199-fe68-4f96-92c1-93c885782267] {
    font-size: 10px;
  }
}

.sd[data-s-e13ec274-3b5a-4b76-8bc1-5552becd3eda] {
  align-content: center;
  align-items: center;
  background: rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 100%;
  justify-content: center;
  margin: 0px 120px 0px 0px;
  width: calc(50% - 120px);
  max-width: calc(50% - 120px);
}

@media screen and (max-width: 890px) {
  .sd[data-s-e13ec274-3b5a-4b76-8bc1-5552becd3eda] {
    display: none;
    flex: none;
    height: 275px;
    margin: 0px 0px 0px 0px;
    width: 347px;
    max-width: 100%;
  }
}

.sd[data-s-69082a17-e118-4a65-ba48-e668daea0a03] {
  height: auto;
  margin: 0px 0px 45px 0px;
  width: 100%;
  max-width: 100%;
}

.sd[data-s-6513b9ad-9f7a-4fee-bbcb-d58456ef9824] {
  background: #EEEEEE;
  height: 100%;
  margin: 0px 71px 0px 0px;
  padding: 0px 0px 0px 0px;
  width: 523px;
  max-width: calc(100% - 71px);
}

.sd[data-s-226d9f29-04d6-4017-b7a6-c2b6498d9e64] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: auto;
  justify-content: flex-start;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 160px 0px;
  width: auto;
  max-width: 100%;
  --g-color-0: rgb(243, 249, 254);
  --g-position-0: 100%;
  --g-color-1: #ffffff;
  --g-position-1: 100%;
  --g-color-2: #ffffff;
  --g-position-2: 100%;
  --g-color-3: #ffffff;
  --g-position-3: 100%;
  --g-color-4: #ffffff;
  --g-position-4: 100%;
  --g-color-5: #ffffff;
  --g-position-5: 100%;
  --g-color-6: #ffffff;
  --g-position-6: 100%;
  --g-color-7: #ffffff;
  --g-position-7: 100%;
  --g-color-8: #ffffff;
  --g-position-8: 100%;
  --g-color-9: #ffffff;
  --g-position-9: 100%;
  --g-color-10: #ffffff;
  --g-position-10: 100%;
  --g-color-11: #ffffff;
  --g-position-11: 100%;
  --g-angle: 90deg;
}

@media screen and (max-width: 890px) {
  .sd[data-s-226d9f29-04d6-4017-b7a6-c2b6498d9e64] {
    flex: none;
    height: auto;
    width: 100%;
    max-width: 100%;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-226d9f29-04d6-4017-b7a6-c2b6498d9e64] {
    flex: none;
    height: auto;
    margin: 0px 0px 74px 0px;
    width: auto;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-226d9f29-04d6-4017-b7a6-c2b6498d9e64] {
    flex: none;
    height: auto;
  }
}

.sd[data-s-af49a239-5a2e-4b3c-898c-8ddf70ad5b84] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  flex-direction: column;
  flex-wrap: nowrap;
  height: 179px;
  justify-content: center;
  margin: 50px 0px 0px 0px;
  width: 100%;
  max-width: 100%;
  --g-color-0: rgb(243, 249, 254);
  --g-position-0: 100%;
  --g-color-1: #ffffff;
  --g-position-1: 100%;
  --g-color-2: #ffffff;
  --g-position-2: 100%;
  --g-color-3: #ffffff;
  --g-position-3: 100%;
  --g-color-4: #ffffff;
  --g-position-4: 100%;
  --g-color-5: #ffffff;
  --g-position-5: 100%;
  --g-color-6: #ffffff;
  --g-position-6: 100%;
  --g-color-7: #ffffff;
  --g-position-7: 100%;
  --g-color-8: #ffffff;
  --g-position-8: 100%;
  --g-color-9: #ffffff;
  --g-position-9: 100%;
  --g-color-10: #ffffff;
  --g-position-10: 100%;
  --g-color-11: #ffffff;
  --g-position-11: 100%;
  --g-angle: 90deg;
}

@media screen and (max-width: 630px) {
  .sd[data-s-af49a239-5a2e-4b3c-898c-8ddf70ad5b84] {
    height: 64px;
    margin: 20px 0px 0px 0px;
    padding: 0px 30px 0px 30px;
    width: 100%;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-af49a239-5a2e-4b3c-898c-8ddf70ad5b84] {
    height: 83px;
    margin: 0px 0px 0px 0px;
    padding: 0px 30px 0px 30px;
    width: 100%;
    max-width: 100%;
  }
}

.sd[data-s-ddd9ae52-c849-49d8-bf65-10e0e81b2c2e] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 32px;
  font-weight: 700;
  height: 66px;
  line-height: 1.4;
  text-align: center;
  width: 50%;
  max-width: 50%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-ddd9ae52-c849-49d8-bf65-10e0e81b2c2e] {
    font-size: 24px;
    width: 100%;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-ddd9ae52-c849-49d8-bf65-10e0e81b2c2e] {
    font-size: 24px;
    width: 100%;
  }
}

.sd[data-s-abf03083-8dd5-4100-a414-621108e23ca6] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 890px) {
  .sd[data-s-abf03083-8dd5-4100-a414-621108e23ca6] {
    align-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
  }
}

.sd[data-s-ef9ce7bb-585f-4c07-b7eb-8adbfa7bbd34] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 222px;
  justify-content: center;
  margin: 0px 0px 0px 0px;
  padding: 0px;
  width: auto;
  max-width: 100%;
  --g-color-0: rgb(243, 249, 254);
  --g-position-0: 100%;
  --g-color-1: #ffffff;
  --g-position-1: 100%;
  --g-color-2: #ffffff;
  --g-position-2: 100%;
  --g-color-3: #ffffff;
  --g-position-3: 100%;
  --g-color-4: #ffffff;
  --g-position-4: 100%;
  --g-color-5: #ffffff;
  --g-position-5: 100%;
  --g-color-6: #ffffff;
  --g-position-6: 100%;
  --g-color-7: #ffffff;
  --g-position-7: 100%;
  --g-color-8: #ffffff;
  --g-position-8: 100%;
  --g-color-9: #ffffff;
  --g-position-9: 100%;
  --g-color-10: #ffffff;
  --g-position-10: 100%;
  --g-color-11: #ffffff;
  --g-position-11: 100%;
  --g-angle: 90deg;
}

@media screen and (max-width: 890px) {
  .sd[data-s-ef9ce7bb-585f-4c07-b7eb-8adbfa7bbd34] {
    flex: none;
    height: auto;
    max-width: 100%;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-ef9ce7bb-585f-4c07-b7eb-8adbfa7bbd34] {
    flex-direction: row;
    flex-wrap: wrap;
  }
}

.sd[data-s-cb7f1a70-8ba3-4574-9a57-e35711147abd] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 100%;
  justify-content: flex-start;
  margin: 0px 25px 0px 25px;
  width: calc(81% - 50px);
  max-width: calc(81% - 50px);
  --g-color-0: rgb(243, 249, 254);
  --g-position-0: 100%;
  --g-color-1: #ffffff;
  --g-position-1: 100%;
  --g-color-2: #ffffff;
  --g-position-2: 100%;
  --g-color-3: #ffffff;
  --g-position-3: 100%;
  --g-color-4: #ffffff;
  --g-position-4: 100%;
  --g-color-5: #ffffff;
  --g-position-5: 100%;
  --g-color-6: #ffffff;
  --g-position-6: 100%;
  --g-color-7: #ffffff;
  --g-position-7: 100%;
  --g-color-8: #ffffff;
  --g-position-8: 100%;
  --g-color-9: #ffffff;
  --g-position-9: 100%;
  --g-color-10: #ffffff;
  --g-position-10: 100%;
  --g-color-11: #ffffff;
  --g-position-11: 100%;
  --g-angle: 90deg;
}

@media screen and (max-width: 630px) {
  .sd[data-s-cb7f1a70-8ba3-4574-9a57-e35711147abd] {
    margin: 0px 0px 0px 0px;
    width: 81%;
    max-width: 81%;
    height: 100%;
  }
}

.sd[data-s-3818e2a6-5b47-4968-80b3-16e8f9867c94] {
  flex: none;
  height: 130px;
  opacity: 0.4;
  width: 150px;
  max-width: 100%;
}

.sd[data-s-e52c5fa7-f73c-4fe8-a4f7-b19d97a5adb0] {
  color: #1575ac;
  font-family: var(--s-font-d7b1509a);
  font-size: 18px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-b3a5bf2f-0e0e-4699-b8c2-782bb73fa117] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 400;
  height: 68px;
  line-height: 1.4;
  margin: 0px 0px 0px 0px;
  text-align: center;
  width: 100%;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-bf970e80-a040-4bd2-ab7d-faeedfd2dd26] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 890px) {
  .sd[data-s-bf970e80-a040-4bd2-ab7d-faeedfd2dd26] {
    flex-direction: row;
    flex-wrap: wrap;
  }
}

.sd[data-s-5910c5ee-8be7-46fa-8ec8-7f9eeb16a885] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  display: flex;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 223.19px;
  justify-content: flex-start;
  margin: 0px 25px 0px 25px;
  width: 212px;
  max-width: calc(100% - 50px);
  --g-color-0: rgb(243, 249, 254);
  --g-position-0: 100%;
  --g-color-1: #ffffff;
  --g-position-1: 100%;
  --g-color-2: #ffffff;
  --g-position-2: 100%;
  --g-color-3: #ffffff;
  --g-position-3: 100%;
  --g-color-4: #ffffff;
  --g-position-4: 100%;
  --g-color-5: #ffffff;
  --g-position-5: 100%;
  --g-color-6: #ffffff;
  --g-position-6: 100%;
  --g-color-7: #ffffff;
  --g-position-7: 100%;
  --g-color-8: #ffffff;
  --g-position-8: 100%;
  --g-color-9: #ffffff;
  --g-position-9: 100%;
  --g-color-10: #ffffff;
  --g-position-10: 100%;
  --g-color-11: #ffffff;
  --g-position-11: 100%;
  --g-angle: 90deg;
}

@media screen and (max-width: 890px) {
  .sd[data-s-5910c5ee-8be7-46fa-8ec8-7f9eeb16a885] {
    display: flex;
    flex: none;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-5910c5ee-8be7-46fa-8ec8-7f9eeb16a885] {
    display: none;
    margin: 0px 0px 0px 0px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-5910c5ee-8be7-46fa-8ec8-7f9eeb16a885] {
    display: none;
  }
}

.sd[data-s-5bdb173c-2ba7-42f4-8665-628252079a7b] {
  flex: none;
  height: 130px;
  opacity: 0.4;
  width: 150px;
  max-width: 100%;
}

.sd[data-s-11cf952a-86cc-4200-8833-2c6acaf90088] {
  color: #1575ac;
  font-family: var(--s-font-d7b1509a);
  font-size: 18px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-8c1c3248-e21d-4882-bfc7-b1b38a36ba22] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 400;
  height: 68px;
  line-height: 1.4;
  margin: 0px 0px 0px 0px;
  text-align: center;
  width: 100%;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-2025bf08-1515-4eef-8c8e-ba2593486fe3] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 890px) {
  .sd[data-s-2025bf08-1515-4eef-8c8e-ba2593486fe3] {
    display: none;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-2025bf08-1515-4eef-8c8e-ba2593486fe3] {
    display: none;
  }
}

.sd[data-s-bd146f22-750f-4da1-a33c-df0d439a7ca1] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 100%;
  justify-content: flex-start;
  margin: 0px 25px 0px 25px;
  width: 212px;
  max-width: calc(100% - 50px);
  --g-color-0: rgb(243, 249, 254);
  --g-position-0: 100%;
  --g-color-1: #ffffff;
  --g-position-1: 100%;
  --g-color-2: #ffffff;
  --g-position-2: 100%;
  --g-color-3: #ffffff;
  --g-position-3: 100%;
  --g-color-4: #ffffff;
  --g-position-4: 100%;
  --g-color-5: #ffffff;
  --g-position-5: 100%;
  --g-color-6: #ffffff;
  --g-position-6: 100%;
  --g-color-7: #ffffff;
  --g-position-7: 100%;
  --g-color-8: #ffffff;
  --g-position-8: 100%;
  --g-color-9: #ffffff;
  --g-position-9: 100%;
  --g-color-10: #ffffff;
  --g-position-10: 100%;
  --g-color-11: #ffffff;
  --g-position-11: 100%;
  --g-angle: 90deg;
}

@media screen and (max-width: 890px) {
  .sd[data-s-bd146f22-750f-4da1-a33c-df0d439a7ca1] {
    display: flex;
    flex: none;
    height: 223.19px;
    max-width: calc(100% - 50px);
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-bd146f22-750f-4da1-a33c-df0d439a7ca1] {
    display: flex;
  }
}

.sd[data-s-ad2d92a9-0697-4c01-b12d-51390588a414] {
  flex: none;
  height: 130px;
  opacity: 0.4;
  width: 150px;
  max-width: 100%;
}

.sd[data-s-462d2b2d-424c-4395-a7ce-2ba354973faf] {
  color: #1575ac;
  font-family: var(--s-font-d7b1509a);
  font-size: 18px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-f42f48b1-88ca-4983-ad1b-17b97ea87adc] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 400;
  height: 68px;
  line-height: 1.4;
  margin: 0px 0px 0px 0px;
  text-align: center;
  width: 100%;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-da92d3e7-0c8c-45a5-8443-65bc2806db5d] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  flex-direction: column;
  flex-wrap: nowrap;
  height: 100%;
  justify-content: flex-start;
  margin: 0px 25px 0px 25px;
  width: 212px;
  max-width: calc(100% - 50px);
  --g-color-0: rgb(243, 249, 254);
  --g-position-0: 100%;
  --g-color-1: #ffffff;
  --g-position-1: 100%;
  --g-color-2: #ffffff;
  --g-position-2: 100%;
  --g-color-3: #ffffff;
  --g-position-3: 100%;
  --g-color-4: #ffffff;
  --g-position-4: 100%;
  --g-color-5: #ffffff;
  --g-position-5: 100%;
  --g-color-6: #ffffff;
  --g-position-6: 100%;
  --g-color-7: #ffffff;
  --g-position-7: 100%;
  --g-color-8: #ffffff;
  --g-position-8: 100%;
  --g-color-9: #ffffff;
  --g-position-9: 100%;
  --g-color-10: #ffffff;
  --g-position-10: 100%;
  --g-color-11: #ffffff;
  --g-position-11: 100%;
  --g-angle: 90deg;
}

.sd[data-s-bd32a4c9-9808-4903-bf41-6c3089f325e3] {
  flex: none;
  height: 130px;
  opacity: 0.4;
  width: 150px;
  max-width: 100%;
}

.sd[data-s-70fc9c19-a18b-4a32-acf7-87cd3b0049ce] {
  color: #1575ac;
  font-family: var(--s-font-d7b1509a);
  font-size: 18px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-69697398-717b-4c3a-8f20-b7881a35a03f] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 400;
  height: 68px;
  line-height: 1.4;
  margin: 0px 0px 0px 0px;
  text-align: center;
  width: 100%;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-b1ecba24-9a26-4328-be8e-8196f103298c] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 890px) {
  .sd[data-s-b1ecba24-9a26-4328-be8e-8196f103298c] {
    flex-direction: row;
    flex-wrap: wrap;
  }
}

.sd[data-s-071d2f3a-346e-43ac-80c4-4c7dfda73737] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  display: none;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 223.19px;
  justify-content: flex-start;
  margin: 0px 25px 0px 25px;
  width: 212px;
  max-width: calc(100% - 50px);
  --g-color-0: rgb(243, 249, 254);
  --g-position-0: 100%;
  --g-color-1: #ffffff;
  --g-position-1: 100%;
  --g-color-2: #ffffff;
  --g-position-2: 100%;
  --g-color-3: #ffffff;
  --g-position-3: 100%;
  --g-color-4: #ffffff;
  --g-position-4: 100%;
  --g-color-5: #ffffff;
  --g-position-5: 100%;
  --g-color-6: #ffffff;
  --g-position-6: 100%;
  --g-color-7: #ffffff;
  --g-position-7: 100%;
  --g-color-8: #ffffff;
  --g-position-8: 100%;
  --g-color-9: #ffffff;
  --g-position-9: 100%;
  --g-color-10: #ffffff;
  --g-position-10: 100%;
  --g-color-11: #ffffff;
  --g-position-11: 100%;
  --g-angle: 90deg;
}

@media screen and (max-width: 890px) {
  .sd[data-s-071d2f3a-346e-43ac-80c4-4c7dfda73737] {
    display: none;
    flex: none;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-071d2f3a-346e-43ac-80c4-4c7dfda73737] {
    display: flex;
    margin: 0px 0px 0px 0px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-071d2f3a-346e-43ac-80c4-4c7dfda73737] {
    display: none;
  }
}

.sd[data-s-56e14068-aa07-41bc-b030-1f756880385b] {
  flex: none;
  height: 130px;
  opacity: 0.4;
  width: 150px;
  max-width: 100%;
}

.sd[data-s-98d42e64-28e9-4c8c-bbcd-16f4b2622941] {
  color: #1575ac;
  font-family: var(--s-font-d7b1509a);
  font-size: 18px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-e6a7a9e8-1a8a-4765-9e21-0f5c3afcf245] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 400;
  height: 68px;
  line-height: 1.4;
  margin: 0px 0px 0px 0px;
  text-align: center;
  width: 100%;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-883a3bee-a175-4f12-bbfc-4ae5cfed4b9d] {
  align-content: center;
  align-items: center;
  display: none;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 890px) {
  .sd[data-s-883a3bee-a175-4f12-bbfc-4ae5cfed4b9d] {
    display: none;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-883a3bee-a175-4f12-bbfc-4ae5cfed4b9d] {
    display: none;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-883a3bee-a175-4f12-bbfc-4ae5cfed4b9d] {
    display: flex;
  }
}

.sd[data-s-8a6fb345-8108-4770-828c-5d181b46ea54] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 100%;
  justify-content: flex-start;
  margin: 0px 25px 0px 25px;
  width: 212px;
  max-width: calc(100% - 50px);
  --g-color-0: rgb(243, 249, 254);
  --g-position-0: 100%;
  --g-color-1: #ffffff;
  --g-position-1: 100%;
  --g-color-2: #ffffff;
  --g-position-2: 100%;
  --g-color-3: #ffffff;
  --g-position-3: 100%;
  --g-color-4: #ffffff;
  --g-position-4: 100%;
  --g-color-5: #ffffff;
  --g-position-5: 100%;
  --g-color-6: #ffffff;
  --g-position-6: 100%;
  --g-color-7: #ffffff;
  --g-position-7: 100%;
  --g-color-8: #ffffff;
  --g-position-8: 100%;
  --g-color-9: #ffffff;
  --g-position-9: 100%;
  --g-color-10: #ffffff;
  --g-position-10: 100%;
  --g-color-11: #ffffff;
  --g-position-11: 100%;
  --g-angle: 90deg;
}

@media screen and (max-width: 890px) {
  .sd[data-s-8a6fb345-8108-4770-828c-5d181b46ea54] {
    display: flex;
    flex: none;
    height: 223.19px;
    max-width: calc(100% - 50px);
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-8a6fb345-8108-4770-828c-5d181b46ea54] {
    display: flex;
  }
}

.sd[data-s-4085e993-f202-44e5-b28a-1b38dfb474bc] {
  flex: none;
  height: 130px;
  opacity: 0.4;
  width: 150px;
  max-width: 100%;
}

.sd[data-s-f48eb3a1-36b6-41ad-ab88-f0b098b1b05b] {
  color: #1575ac;
  font-family: var(--s-font-d7b1509a);
  font-size: 18px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-643fa36b-874a-4267-bf23-2e8e255f9e88] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 400;
  height: 68px;
  line-height: 1.4;
  margin: 0px 0px 0px 0px;
  text-align: center;
  width: 100%;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-0422300a-f46c-47cb-8dab-094e2092c4ab] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  flex-direction: column;
  flex-wrap: nowrap;
  height: 100%;
  justify-content: flex-start;
  margin: 0px 25px 0px 25px;
  width: 212px;
  max-width: calc(100% - 50px);
  --g-color-0: rgb(243, 249, 254);
  --g-position-0: 100%;
  --g-color-1: #ffffff;
  --g-position-1: 100%;
  --g-color-2: #ffffff;
  --g-position-2: 100%;
  --g-color-3: #ffffff;
  --g-position-3: 100%;
  --g-color-4: #ffffff;
  --g-position-4: 100%;
  --g-color-5: #ffffff;
  --g-position-5: 100%;
  --g-color-6: #ffffff;
  --g-position-6: 100%;
  --g-color-7: #ffffff;
  --g-position-7: 100%;
  --g-color-8: #ffffff;
  --g-position-8: 100%;
  --g-color-9: #ffffff;
  --g-position-9: 100%;
  --g-color-10: #ffffff;
  --g-position-10: 100%;
  --g-color-11: #ffffff;
  --g-position-11: 100%;
  --g-angle: 90deg;
}

@media screen and (max-width: 890px) {
  .sd[data-s-0422300a-f46c-47cb-8dab-094e2092c4ab] {
    display: none;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-0422300a-f46c-47cb-8dab-094e2092c4ab] {
    display: none;
  }
}

.sd[data-s-f342ea81-19d7-4dee-90a8-9eec4d5829ad] {
  flex: none;
  height: 130px;
  opacity: 0.4;
  width: 150px;
  max-width: 100%;
}

.sd[data-s-cb7461f8-8fca-490e-bb1c-eb45be052144] {
  color: #1575ac;
  font-family: var(--s-font-d7b1509a);
  font-size: 18px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-b4090d16-cef4-4cfc-b3a6-185c431ca157] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 400;
  height: 68px;
  line-height: 1.4;
  margin: 0px 0px 0px 0px;
  text-align: center;
  width: 100%;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-0dbc97c8-f694-4896-a6a3-68ecda3787df] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  display: none;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 223.19px;
  justify-content: flex-start;
  margin: 0px 25px 0px 25px;
  width: 212px;
  max-width: calc(100% - 50px);
  --g-color-0: rgb(243, 249, 254);
  --g-position-0: 100%;
  --g-color-1: #ffffff;
  --g-position-1: 100%;
  --g-color-2: #ffffff;
  --g-position-2: 100%;
  --g-color-3: #ffffff;
  --g-position-3: 100%;
  --g-color-4: #ffffff;
  --g-position-4: 100%;
  --g-color-5: #ffffff;
  --g-position-5: 100%;
  --g-color-6: #ffffff;
  --g-position-6: 100%;
  --g-color-7: #ffffff;
  --g-position-7: 100%;
  --g-color-8: #ffffff;
  --g-position-8: 100%;
  --g-color-9: #ffffff;
  --g-position-9: 100%;
  --g-color-10: #ffffff;
  --g-position-10: 100%;
  --g-color-11: #ffffff;
  --g-position-11: 100%;
  --g-angle: 90deg;
}

@media screen and (max-width: 890px) {
  .sd[data-s-0dbc97c8-f694-4896-a6a3-68ecda3787df] {
    display: none;
    flex: none;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-0dbc97c8-f694-4896-a6a3-68ecda3787df] {
    display: none;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-0dbc97c8-f694-4896-a6a3-68ecda3787df] {
    display: none;
  }
}

.sd[data-s-abc58190-ebe8-4b2b-8ff1-88e134c5920a] {
  flex: none;
  height: 130px;
  opacity: 0.4;
  width: 150px;
  max-width: 100%;
}

.sd[data-s-85b021e3-907a-4f9c-b0b0-595fd5009c27] {
  color: #1575ac;
  font-family: var(--s-font-d7b1509a);
  font-size: 18px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-c94c7419-f40d-4ee8-ac19-8bd6d48d2d62] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 400;
  height: 68px;
  line-height: 1.4;
  margin: 0px 0px 0px 0px;
  text-align: center;
  width: 100%;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-088a876b-227d-4b3b-b02e-3b0664953d6a] {
  align-content: center;
  align-items: center;
  display: none;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 890px) {
  .sd[data-s-088a876b-227d-4b3b-b02e-3b0664953d6a] {
    display: flex;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-088a876b-227d-4b3b-b02e-3b0664953d6a] {
    display: flex;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-088a876b-227d-4b3b-b02e-3b0664953d6a] {
    display: none;
  }
}

.sd[data-s-4d9f371e-01fa-4646-aaa4-5b8ae24ec3e3] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  display: flex;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 223.19px;
  justify-content: flex-start;
  margin: 0px 25px 0px 25px;
  width: 212px;
  max-width: calc(100% - 50px);
  --g-color-0: rgb(243, 249, 254);
  --g-position-0: 100%;
  --g-color-1: #ffffff;
  --g-position-1: 100%;
  --g-color-2: #ffffff;
  --g-position-2: 100%;
  --g-color-3: #ffffff;
  --g-position-3: 100%;
  --g-color-4: #ffffff;
  --g-position-4: 100%;
  --g-color-5: #ffffff;
  --g-position-5: 100%;
  --g-color-6: #ffffff;
  --g-position-6: 100%;
  --g-color-7: #ffffff;
  --g-position-7: 100%;
  --g-color-8: #ffffff;
  --g-position-8: 100%;
  --g-color-9: #ffffff;
  --g-position-9: 100%;
  --g-color-10: #ffffff;
  --g-position-10: 100%;
  --g-color-11: #ffffff;
  --g-position-11: 100%;
  --g-angle: 90deg;
}

@media screen and (max-width: 890px) {
  .sd[data-s-4d9f371e-01fa-4646-aaa4-5b8ae24ec3e3] {
    display: flex;
    flex: none;
    height: 223.19px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-4d9f371e-01fa-4646-aaa4-5b8ae24ec3e3] {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0px 0px 0px 0px;
    max-width: 100%;
  }
}

.sd[data-s-8fd3dde5-7067-40e4-9ac5-b308dae2fa5d] {
  flex: none;
  height: 130px;
  opacity: 0.4;
  width: 150px;
  max-width: 100%;
}

.sd[data-s-36afb633-fa8a-4d86-92d9-6bee66de32ab] {
  color: #1575ac;
  font-family: var(--s-font-d7b1509a);
  font-size: 18px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-5c9cca19-b9a7-4bc7-9951-b69aa74afd2d] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 400;
  height: 68px;
  line-height: 1.4;
  margin: 0px 0px 0px 0px;
  text-align: center;
  width: 100%;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-ecacccdb-1f61-47e4-8f6f-6ecbe3f87751] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 100%;
  justify-content: flex-start;
  margin: 0px 25px 0px 25px;
  width: 212px;
  max-width: calc(100% - 50px);
  --g-color-0: rgb(243, 249, 254);
  --g-position-0: 100%;
  --g-color-1: #ffffff;
  --g-position-1: 100%;
  --g-color-2: #ffffff;
  --g-position-2: 100%;
  --g-color-3: #ffffff;
  --g-position-3: 100%;
  --g-color-4: #ffffff;
  --g-position-4: 100%;
  --g-color-5: #ffffff;
  --g-position-5: 100%;
  --g-color-6: #ffffff;
  --g-position-6: 100%;
  --g-color-7: #ffffff;
  --g-position-7: 100%;
  --g-color-8: #ffffff;
  --g-position-8: 100%;
  --g-color-9: #ffffff;
  --g-position-9: 100%;
  --g-color-10: #ffffff;
  --g-position-10: 100%;
  --g-color-11: #ffffff;
  --g-position-11: 100%;
  --g-angle: 90deg;
}

@media screen and (max-width: 890px) {
  .sd[data-s-ecacccdb-1f61-47e4-8f6f-6ecbe3f87751] {
    display: flex;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-ecacccdb-1f61-47e4-8f6f-6ecbe3f87751] {
    display: none;
    flex: none;
    flex-direction: row;
    flex-wrap: wrap;
    height: 223.19px;
    justify-content: center;
    margin: 0px 0px 0px 0px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-ecacccdb-1f61-47e4-8f6f-6ecbe3f87751] {
    display: none;
  }
}

.sd[data-s-3dc243a4-5140-4b8b-9f10-f5823d19f53b] {
  flex: none;
  height: 130px;
  opacity: 0.4;
  width: 150px;
  max-width: 100%;
}

.sd[data-s-7357ecb0-3748-4638-86be-6242e6c0e9c1] {
  color: #1575ac;
  font-family: var(--s-font-d7b1509a);
  font-size: 18px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-bd6f247f-9efc-45f2-ad36-eb618650f2ce] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 400;
  height: 68px;
  line-height: 1.4;
  margin: 0px 0px 0px 0px;
  text-align: center;
  width: 100%;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-485f33cb-dc84-40fc-bee5-a4502893bcd5] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  display: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 100%;
  justify-content: flex-start;
  margin: 0px 25px 0px 25px;
  width: 212px;
  max-width: calc(100% - 50px);
  --g-color-0: rgb(243, 249, 254);
  --g-position-0: 100%;
  --g-color-1: #ffffff;
  --g-position-1: 100%;
  --g-color-2: #ffffff;
  --g-position-2: 100%;
  --g-color-3: #ffffff;
  --g-position-3: 100%;
  --g-color-4: #ffffff;
  --g-position-4: 100%;
  --g-color-5: #ffffff;
  --g-position-5: 100%;
  --g-color-6: #ffffff;
  --g-position-6: 100%;
  --g-color-7: #ffffff;
  --g-position-7: 100%;
  --g-color-8: #ffffff;
  --g-position-8: 100%;
  --g-color-9: #ffffff;
  --g-position-9: 100%;
  --g-color-10: #ffffff;
  --g-position-10: 100%;
  --g-color-11: #ffffff;
  --g-position-11: 100%;
  --g-angle: 90deg;
}

@media screen and (max-width: 890px) {
  .sd[data-s-485f33cb-dc84-40fc-bee5-a4502893bcd5] {
    display: none;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-485f33cb-dc84-40fc-bee5-a4502893bcd5] {
    display: flex;
    flex: none;
    flex-direction: row;
    flex-wrap: wrap;
    height: 223.19px;
    justify-content: center;
    margin: 0px 0px 0px 0px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-485f33cb-dc84-40fc-bee5-a4502893bcd5] {
    display: none;
  }
}

.sd[data-s-2c248ae8-4de6-40f1-b383-e9677f0b34d8] {
  flex: none;
  height: 130px;
  opacity: 0.4;
  width: 150px;
  max-width: 100%;
}

.sd[data-s-60e7cb44-3edf-47de-82cf-5d931692a232] {
  color: #1575ac;
  font-family: var(--s-font-d7b1509a);
  font-size: 18px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-9ba60b77-cc7b-4dca-a6e7-7a35d7314af9] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 400;
  height: 68px;
  line-height: 1.4;
  margin: 0px 0px 0px 0px;
  text-align: center;
  width: 100%;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-4f025305-39d7-4a1c-840b-487ef106d7f5] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  display: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 100%;
  justify-content: flex-start;
  margin: 0px 25px 0px 25px;
  width: 212px;
  max-width: calc(100% - 50px);
  --g-color-0: rgb(243, 249, 254);
  --g-position-0: 100%;
  --g-color-1: #ffffff;
  --g-position-1: 100%;
  --g-color-2: #ffffff;
  --g-position-2: 100%;
  --g-color-3: #ffffff;
  --g-position-3: 100%;
  --g-color-4: #ffffff;
  --g-position-4: 100%;
  --g-color-5: #ffffff;
  --g-position-5: 100%;
  --g-color-6: #ffffff;
  --g-position-6: 100%;
  --g-color-7: #ffffff;
  --g-position-7: 100%;
  --g-color-8: #ffffff;
  --g-position-8: 100%;
  --g-color-9: #ffffff;
  --g-position-9: 100%;
  --g-color-10: #ffffff;
  --g-position-10: 100%;
  --g-color-11: #ffffff;
  --g-position-11: 100%;
  --g-angle: 90deg;
}

@media screen and (max-width: 890px) {
  .sd[data-s-4f025305-39d7-4a1c-840b-487ef106d7f5] {
    display: none;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-4f025305-39d7-4a1c-840b-487ef106d7f5] {
    display: none;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-4f025305-39d7-4a1c-840b-487ef106d7f5] {
    display: flex;
    flex: none;
    height: 223.19px;
    max-width: calc(100% - 50px);
  }
}

.sd[data-s-2d80f690-f411-4dbb-a5de-251a40d197c5] {
  flex: none;
  height: 130px;
  opacity: 0.4;
  width: 150px;
  max-width: 100%;
}

.sd[data-s-23d2245d-1a8f-4b35-8249-71cd68b3c802] {
  color: #1575ac;
  font-family: var(--s-font-d7b1509a);
  font-size: 18px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-ab5d75f2-9d77-4001-8292-840aeb92735f] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 400;
  height: 68px;
  line-height: 1.4;
  margin: 0px 0px 0px 0px;
  text-align: center;
  width: 100%;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-c9271103-92f7-4b45-b7db-f6e76e8514bf] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  flex-direction: column;
  flex-wrap: nowrap;
  height: 179px;
  justify-content: center;
  margin: 50px 0px 0px 0px;
  width: 100%;
  max-width: 100%;
  --g-color-0: rgb(243, 249, 254);
  --g-position-0: 100%;
  --g-color-1: #ffffff;
  --g-position-1: 100%;
  --g-color-2: #ffffff;
  --g-position-2: 100%;
  --g-color-3: #ffffff;
  --g-position-3: 100%;
  --g-color-4: #ffffff;
  --g-position-4: 100%;
  --g-color-5: #ffffff;
  --g-position-5: 100%;
  --g-color-6: #ffffff;
  --g-position-6: 100%;
  --g-color-7: #ffffff;
  --g-position-7: 100%;
  --g-color-8: #ffffff;
  --g-position-8: 100%;
  --g-color-9: #ffffff;
  --g-position-9: 100%;
  --g-color-10: #ffffff;
  --g-position-10: 100%;
  --g-color-11: #ffffff;
  --g-position-11: 100%;
  --g-angle: 90deg;
}

@media screen and (max-width: 630px) {
  .sd[data-s-c9271103-92f7-4b45-b7db-f6e76e8514bf] {
    height: 59px;
    width: 100%;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-c9271103-92f7-4b45-b7db-f6e76e8514bf] {
    margin: 20px 0px 19px 0px;
    width: 100%;
    max-width: 100%;
  }
}

.sd[data-s-9670da36-f682-46e8-ab9d-14f0ebf634ed] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 32px;
  font-weight: 700;
  height: 66px;
  line-height: 1.4;
  text-align: center;
  width: 50%;
  max-width: 50%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-9670da36-f682-46e8-ab9d-14f0ebf634ed] {
    font-size: 24px;
    width: 100%;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-9670da36-f682-46e8-ab9d-14f0ebf634ed] {
    font-size: 24px;
    width: 100%;
  }
}

.sd[data-s-0d138f16-f82c-4d39-876a-e5ec9fa4d654] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
  width: 1308px;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-0d138f16-f82c-4d39-876a-e5ec9fa4d654] {
    margin: 0px 0px 0px 0px;
    width: 768px;
    max-width: 100%;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-0d138f16-f82c-4d39-876a-e5ec9fa4d654] {
    margin: 0px 20px 0px 20px;
    max-width: calc(100% - 40px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-0d138f16-f82c-4d39-876a-e5ec9fa4d654] {
    margin: 0px 20px 0px 20px;
  }
}

.sd[data-s-a4ac2350-78f2-4ba7-85a5-631a0f434082] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
  width: 395px;
  max-width: 100%;
  --g-color-0: rgb(243, 249, 254);
  --g-position-0: 100%;
  --g-color-1: #ffffff;
  --g-position-1: 100%;
  --g-color-2: #ffffff;
  --g-position-2: 100%;
  --g-color-3: #ffffff;
  --g-position-3: 100%;
  --g-color-4: #ffffff;
  --g-position-4: 100%;
  --g-color-5: #ffffff;
  --g-position-5: 100%;
  --g-color-6: #ffffff;
  --g-position-6: 100%;
  --g-color-7: #ffffff;
  --g-position-7: 100%;
  --g-color-8: #ffffff;
  --g-position-8: 100%;
  --g-color-9: #ffffff;
  --g-position-9: 100%;
  --g-color-10: #ffffff;
  --g-position-10: 100%;
  --g-color-11: #ffffff;
  --g-position-11: 100%;
  --g-angle: 90deg;
}

@media screen and (max-width: 890px) {
  .sd[data-s-a4ac2350-78f2-4ba7-85a5-631a0f434082] {
    flex: none;
    height: auto;
    width: auto;
    max-width: 100%;
  }
}

.sd[data-s-63470b62-74ba-475a-88fa-0035776fc9c4] {
  align-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
  width: 100%;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-63470b62-74ba-475a-88fa-0035776fc9c4] {
    flex: none;
    width: 370px;
    max-width: 100%;
  }
}

.sd[data-s-d1a27f7f-383b-4e98-8bb5-a2062063d813] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 8px solid rgb(228, 241, 254);
  border-left: 8px solid rgb(228, 241, 254);
  border-radius: 24px;
  border-right: 8px solid rgb(228, 241, 254);
  border-top: 8px solid rgb(228, 241, 254);
  flex-direction: column;
  flex-wrap: nowrap;
  height: 440px;
  justify-content: center;
  margin: 0px 15px 0px 0px;
  padding: 0px 0px 0px 0px;
  width: 358px;
  max-width: calc(100% - 15px);
  --g-color-0: rgb(243, 249, 254);
  --g-position-0: 100%;
  --g-color-1: #ffffff;
  --g-position-1: 100%;
  --g-color-2: #ffffff;
  --g-position-2: 100%;
  --g-color-3: #ffffff;
  --g-position-3: 100%;
  --g-color-4: #ffffff;
  --g-position-4: 100%;
  --g-color-5: #ffffff;
  --g-position-5: 100%;
  --g-color-6: #ffffff;
  --g-position-6: 100%;
  --g-color-7: #ffffff;
  --g-position-7: 100%;
  --g-color-8: #ffffff;
  --g-position-8: 100%;
  --g-color-9: #ffffff;
  --g-position-9: 100%;
  --g-color-10: #ffffff;
  --g-position-10: 100%;
  --g-color-11: #ffffff;
  --g-position-11: 100%;
  --g-angle: 90deg;
}

@media screen and (max-width: 890px) {
  .sd[data-s-d1a27f7f-383b-4e98-8bb5-a2062063d813] {
    margin: 0px 0px 0px 0px;
    max-width: 100%;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-d1a27f7f-383b-4e98-8bb5-a2062063d813] {
    margin: 0px 0px 20px 0px;
    max-width: 100%;
  }
}

.sd[data-s-5832d111-fc07-419c-8ccd-f2c6cd35e93d] {
  color: #1575ac;
  font-family: var(--s-font-d7b1509a);
  font-size: 20px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-ec5c48de-90b5-492b-8ead-625cb2b20eab] {
  height: 242px;
  width: 252px;
  max-width: 100%;
}

.sd[data-s-766de144-1529-44cd-bd7c-5963e0ea3180] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 100%;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-41838558-a331-4166-8ee3-80d56c6aa5be] {
  color: #1575ac;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 12px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 320px) {
  .sd[data-s-41838558-a331-4166-8ee3-80d56c6aa5be] {
    padding: 0px 20px 0px 20px;
  }
}

.sd[data-s-8891fc14-b79a-4922-87f9-fd79ad4e2636] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 8px solid rgb(228, 241, 254);
  border-left: 8px solid rgb(228, 241, 254);
  border-radius: 24px;
  border-right: 8px solid rgb(228, 241, 254);
  border-top: 8px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 440px;
  justify-content: center;
  margin: 0px 0px 0px 15px;
  padding: 0px 0px 0px 0px;
  width: 358px;
  max-width: calc(100% - 15px);
  --g-color-0: rgb(243, 249, 254);
  --g-position-0: 100%;
  --g-color-1: #ffffff;
  --g-position-1: 100%;
  --g-color-2: #ffffff;
  --g-position-2: 100%;
  --g-color-3: #ffffff;
  --g-position-3: 100%;
  --g-color-4: #ffffff;
  --g-position-4: 100%;
  --g-color-5: #ffffff;
  --g-position-5: 100%;
  --g-color-6: #ffffff;
  --g-position-6: 100%;
  --g-color-7: #ffffff;
  --g-position-7: 100%;
  --g-color-8: #ffffff;
  --g-position-8: 100%;
  --g-color-9: #ffffff;
  --g-position-9: 100%;
  --g-color-10: #ffffff;
  --g-position-10: 100%;
  --g-color-11: #ffffff;
  --g-position-11: 100%;
  --g-angle: 90deg;
}

@media screen and (max-width: 890px) {
  .sd[data-s-8891fc14-b79a-4922-87f9-fd79ad4e2636] {
    flex: none;
    height: 440px;
    margin: 0px 20px 0px 0px;
    max-width: calc(100% - 20px);
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-8891fc14-b79a-4922-87f9-fd79ad4e2636] {
    display: none;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-8891fc14-b79a-4922-87f9-fd79ad4e2636] {
    display: none;
  }
}

.sd[data-s-a3f908e4-bab8-4b40-bb6a-786abb45320c] {
  color: #1575ac;
  font-family: var(--s-font-d7b1509a);
  font-size: 20px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-43f44923-5639-4243-bbca-4545ee89bf99] {
  height: 242px;
  width: 252px;
  max-width: 100%;
}

.sd[data-s-d705d305-3e94-439b-9b7d-989f038b4ce4] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 100%;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-79793747-fb1c-4103-8b20-53af8cc772c7] {
  color: #1575ac;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 12px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-84c56757-d9dd-4912-8102-cd48e9631e80] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 8px solid rgb(228, 241, 254);
  border-left: 8px solid rgb(228, 241, 254);
  border-radius: 24px;
  border-right: 8px solid rgb(228, 241, 254);
  border-top: 8px solid rgb(228, 241, 254);
  display: none;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 440px;
  justify-content: center;
  margin: 0px 0px 0px 15px;
  padding: 0px 0px 0px 0px;
  width: 358px;
  max-width: calc(100% - 15px);
  --g-color-0: rgb(243, 249, 254);
  --g-position-0: 100%;
  --g-color-1: #ffffff;
  --g-position-1: 100%;
  --g-color-2: #ffffff;
  --g-position-2: 100%;
  --g-color-3: #ffffff;
  --g-position-3: 100%;
  --g-color-4: #ffffff;
  --g-position-4: 100%;
  --g-color-5: #ffffff;
  --g-position-5: 100%;
  --g-color-6: #ffffff;
  --g-position-6: 100%;
  --g-color-7: #ffffff;
  --g-position-7: 100%;
  --g-color-8: #ffffff;
  --g-position-8: 100%;
  --g-color-9: #ffffff;
  --g-position-9: 100%;
  --g-color-10: #ffffff;
  --g-position-10: 100%;
  --g-color-11: #ffffff;
  --g-position-11: 100%;
  --g-angle: 90deg;
}

@media screen and (max-width: 890px) {
  .sd[data-s-84c56757-d9dd-4912-8102-cd48e9631e80] {
    display: none;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-84c56757-d9dd-4912-8102-cd48e9631e80] {
    display: flex;
    margin: 0px 20px 0px 20px;
    max-width: calc(100% - 40px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-84c56757-d9dd-4912-8102-cd48e9631e80] {
    display: flex;
    margin: 0px 20px 0px 20px;
    padding: 0px 0px 0px 0px;
  }
}

.sd[data-s-4a06b119-def3-4962-b160-dec6d7231349] {
  color: #1575ac;
  font-family: var(--s-font-d7b1509a);
  font-size: 20px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-1c0a5427-54e3-4c1a-9b82-2762a5a5e39c] {
  height: 242px;
  width: 252px;
  max-width: 100%;
}

.sd[data-s-da3df456-fb2a-4831-9925-d261b98afb54] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 100%;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-d487beba-07cf-489a-a5fd-943d30c2322b] {
  color: #1575ac;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 12px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 320px) {
  .sd[data-s-d487beba-07cf-489a-a5fd-943d30c2322b] {
    padding: 0px 20px 0px 20px;
  }
}

.sd[data-s-75f87f5b-e198-4fe3-8506-5aeca1f8e1dc] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  flex-direction: column;
  flex-wrap: nowrap;
  height: 179px;
  justify-content: center;
  margin: 50px 0px 0px 0px;
  width: 100%;
  max-width: 100%;
  --g-color-0: rgb(243, 249, 254);
  --g-position-0: 100%;
  --g-color-1: #ffffff;
  --g-position-1: 100%;
  --g-color-2: #ffffff;
  --g-position-2: 100%;
  --g-color-3: #ffffff;
  --g-position-3: 100%;
  --g-color-4: #ffffff;
  --g-position-4: 100%;
  --g-color-5: #ffffff;
  --g-position-5: 100%;
  --g-color-6: #ffffff;
  --g-position-6: 100%;
  --g-color-7: #ffffff;
  --g-position-7: 100%;
  --g-color-8: #ffffff;
  --g-position-8: 100%;
  --g-color-9: #ffffff;
  --g-position-9: 100%;
  --g-color-10: #ffffff;
  --g-position-10: 100%;
  --g-color-11: #ffffff;
  --g-position-11: 100%;
  --g-angle: 90deg;
}

@media screen and (max-width: 630px) {
  .sd[data-s-75f87f5b-e198-4fe3-8506-5aeca1f8e1dc] {
    height: 56px;
    margin: 20px 0px 20px 0px;
    width: 100%;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-75f87f5b-e198-4fe3-8506-5aeca1f8e1dc] {
    margin: 20px 0px 20px 0px;
    padding: 0px 20px 0px 20px;
  }
}

.sd[data-s-140ed00a-d369-43a4-ae14-bac50985e253] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 32px;
  font-weight: 700;
  height: 66px;
  line-height: 1.4;
  text-align: center;
  width: 50%;
  max-width: 50%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-140ed00a-d369-43a4-ae14-bac50985e253] {
    font-size: 24px;
    height: 50%;
    padding: 0px 20px 0px 20px;
    width: 100%;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-140ed00a-d369-43a4-ae14-bac50985e253] {
    font-size: 24px;
    padding: 0px 0px 0px 0px;
    width: 100%;
  }
}

.sd[data-s-96821a2c-5bae-4dcf-9cc3-1974d0d01a84] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 630px) {
  .sd[data-s-96821a2c-5bae-4dcf-9cc3-1974d0d01a84] {
    display: none;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-96821a2c-5bae-4dcf-9cc3-1974d0d01a84] {
    display: none;
  }
}

.sd[data-s-4ef13b3f-41c6-4d91-99be-3d6ce0f3b282] {
  align-content: flex-end;
  align-items: flex-end;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 2px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 2px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 120px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-4ef13b3f-41c6-4d91-99be-3d6ce0f3b282] {
    flex: none;
    width: 80px;
    max-width: 100%;
  }
}

.sd[data-s-bdf1e3f9-cfb0-4416-8f23-67f37c79c144] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 119px;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-cdfd333c-e9f7-4065-acfc-82eb18413a6b] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 2px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 480px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-cdfd333c-e9f7-4065-acfc-82eb18413a6b] {
    flex: none;
    width: 300px;
    max-width: 100%;
  }
}

.sd[data-s-12bb435a-5e93-4d56-af2d-c0998e5e940b] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  //width: 82px;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-6b73c3f5-bac9-483c-8ad0-a744d0e17183] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 2px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 120px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-6b73c3f5-bac9-483c-8ad0-a744d0e17183] {
    flex: none;
    width: 100px;
    max-width: 100%;
  }
}

.sd[data-s-8cd3db3e-ac0a-4d79-96fa-fda76da260ce] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  padding: 0px 0px 0px 0px;
  text-align: center;
  width: 82px;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-002ed449-eef8-4f37-80f2-cfc40539ec19] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 630px) {
  .sd[data-s-002ed449-eef8-4f37-80f2-cfc40539ec19] {
    display: none;
    padding: 0px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-002ed449-eef8-4f37-80f2-cfc40539ec19] {
    display: none;
  }
}

.sd[data-s-9c6ec4c9-8c1e-4e45-a47a-df7216e1a516] {
  align-content: flex-end;
  align-items: flex-end;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 2px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 0px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 120px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-9c6ec4c9-8c1e-4e45-a47a-df7216e1a516] {
    flex: none;
    width: 80px;
    max-width: 100%;
  }
}

.sd[data-s-17282a7f-e730-47d6-b16f-89b6f4321120] {
  color: #333;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 20px;
  font-weight: 400;
  height: 1px;
  line-height: 1.4;
  text-align: center;
  width: 119px;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-5f5cab57-c966-41ca-b53a-4b8d4a9baa7c] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 119px;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-afea4c32-4bf2-4499-8036-cd4de3a58c7c] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 0px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 120px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-afea4c32-4bf2-4499-8036-cd4de3a58c7c] {
    flex: none;
    width: 75px;
    max-width: 100%;
  }
}

.sd[data-s-8178205d-4ad1-41db-b3cd-9e53f395550d] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: right;
  width: 47px;
  max-width: 100%;
  justify-content: flex-end;
}

.sd[data-s-6e44c681-bd73-4e2e-9fc5-97df4a503d87] {
  color: rgb(70, 156, 234);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 700;
  height: 21px;
  line-height: 1.4;
  text-align: left;
  width: 30px;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-5d8df587-a196-4332-bb5a-ccc68e04d67b] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 0px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 120px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-5d8df587-a196-4332-bb5a-ccc68e04d67b] {
    flex: none;
    width: 75px;
    max-width: 100%;
  }
}

.sd[data-s-b923be8a-714f-435e-a819-d9aeb456f151] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: right;
  width: 47px;
  max-width: 100%;
  justify-content: flex-end;
}

.sd[data-s-e1e5c375-d4d1-4f08-9d7b-4547c846eb3f] {
  color: rgb(70, 156, 234);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 700;
  height: 21px;
  line-height: 1.4;
  text-align: left;
  width: 30px;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-e6ca5b6a-991a-486f-8dd4-c1f1ae55872c] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 0px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 120px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-e6ca5b6a-991a-486f-8dd4-c1f1ae55872c] {
    flex: none;
    width: 75px;
    max-width: 100%;
  }
}

.sd[data-s-23e0a509-8691-4eeb-86d6-a18690015675] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: right;
  width: 47px;
  max-width: 100%;
  justify-content: flex-end;
}

.sd[data-s-6e3374de-7827-410b-8cfd-6061998bd148] {
  color: rgb(70, 156, 234);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 700;
  height: 21px;
  line-height: 1.4;
  text-align: left;
  width: 30px;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-458e3f4f-7f16-4bb6-855b-bfa7ccff97df] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 0px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 120px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-458e3f4f-7f16-4bb6-855b-bfa7ccff97df] {
    flex: none;
    width: 75px;
    max-width: 100%;
  }
}

.sd[data-s-b5670032-372f-43a0-b7d0-eafc91aa411f] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: right;
  width: 47px;
  max-width: 100%;
  justify-content: flex-end;
}

.sd[data-s-c01343fc-4429-412b-a013-8d8705f18338] {
  color: rgb(70, 156, 234);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 700;
  height: 21px;
  line-height: 1.4;
  text-align: left;
  width: 30px;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-260a3392-10a6-4b5b-aa5c-9878bd90102b] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 0px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 120px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-260a3392-10a6-4b5b-aa5c-9878bd90102b] {
    flex: none;
    width: 100px;
    max-width: 100%;
  }
}

.sd[data-s-f7d58fa1-a158-4211-a391-b179c8108880] {
  color: rgb(70, 156, 234);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 700;
  height: 21px;
  line-height: 1.4;
  text-align: left;
  width: 30px;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-e8bbaf33-6e6d-4945-9678-21834186fd00] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 630px) {
  .sd[data-s-e8bbaf33-6e6d-4945-9678-21834186fd00] {
    display: none;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-e8bbaf33-6e6d-4945-9678-21834186fd00] {
    display: none;
  }
}

.sd[data-s-e37a28c8-b7e4-444f-959d-454c29aa90b1] {
  align-content: flex-end;
  align-items: flex-end;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 2px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 0px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 120px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-e37a28c8-b7e4-444f-959d-454c29aa90b1] {
    flex: none;
    width: 80px;
    max-width: 100%;
  }
}

.sd[data-s-8ec9c01f-e466-4319-90be-9814df0eb690] {
  color: #333;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 20px;
  font-weight: 400;
  height: 1px;
  line-height: 1.4;
  text-align: center;
  width: 119px;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-8f391646-bd3c-4b7b-ad24-80eea292f376] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 119px;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-57ab74fa-e072-4503-816d-29ddc19e2bf4] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 0px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 120px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-57ab74fa-e072-4503-816d-29ddc19e2bf4] {
    flex: none;
    width: 75px;
    max-width: 100%;
  }
}

.sd[data-s-11b2c2b0-eb17-4587-8aea-609458cb0061] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: right;
  width: 47px;
  max-width: 100%;
  justify-content: flex-end;
}

.sd[data-s-1455cd49-d5df-4d13-a3f8-c603798b8977] {
  color: rgb(70, 156, 234);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 700;
  height: 21px;
  line-height: 1.4;
  text-align: left;
  width: 30px;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-3878a0a7-2e3c-4fe0-9151-52fc73f5ad1c] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 0px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 120px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-3878a0a7-2e3c-4fe0-9151-52fc73f5ad1c] {
    flex: none;
    width: 75px;
    max-width: 100%;
  }
}

.sd[data-s-e0a0fa7d-368d-4ea2-8b9b-0a86ee43abc0] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: right;
  width: 47px;
  max-width: 100%;
  justify-content: flex-end;
}

.sd[data-s-0c3557a1-ac52-4620-82e3-64bfcb4e4525] {
  color: rgb(70, 156, 234);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 700;
  height: 21px;
  line-height: 1.4;
  text-align: left;
  width: 30px;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-ec3a01bb-715a-4fb2-898e-c72a19a20d73] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 0px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 120px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-ec3a01bb-715a-4fb2-898e-c72a19a20d73] {
    flex: none;
    width: 75px;
    max-width: 100%;
  }
}

.sd[data-s-7057ca76-ac15-410a-82ee-287b6dac6ab2] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: right;
  width: 47px;
  max-width: 100%;
  justify-content: flex-end;
}

.sd[data-s-eb4956c3-1e9c-4b84-a301-dde27876b07e] {
  color: rgb(70, 156, 234);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 700;
  height: 21px;
  line-height: 1.4;
  text-align: left;
  width: 30px;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-a86e10cf-d779-4a17-b8db-edeb395d2dd5] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 0px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 120px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-a86e10cf-d779-4a17-b8db-edeb395d2dd5] {
    flex: none;
    width: 75px;
    max-width: 100%;
  }
}

.sd[data-s-8d99745a-6c27-466c-a6ec-256110101076] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: right;
  width: 47px;
  max-width: 100%;
  justify-content: flex-end;
}

.sd[data-s-b339e79b-4303-4dd2-a0f1-f4e31aaae378] {
  color: rgb(70, 156, 234);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 700;
  height: 21px;
  line-height: 1.4;
  text-align: left;
  width: 30px;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-215a2c2e-6a05-475c-a252-96c4b1a93860] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 0px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 120px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-215a2c2e-6a05-475c-a252-96c4b1a93860] {
    flex: none;
    width: 100px;
    max-width: 100%;
  }
}

.sd[data-s-45373a81-ca10-4a68-bfaf-ee5ef050852c] {
  color: rgb(70, 156, 234);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 700;
  height: 21px;
  line-height: 1.4;
  text-align: left;
  width: 30px;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-a473bece-0e5c-4e2f-a372-66c8089e1a21] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 630px) {
  .sd[data-s-a473bece-0e5c-4e2f-a372-66c8089e1a21] {
    display: none;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-a473bece-0e5c-4e2f-a372-66c8089e1a21] {
    display: none;
  }
}

.sd[data-s-1ed2fb10-4c72-4697-9e44-dbb212f86431] {
  align-content: flex-end;
  align-items: flex-end;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 2px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 0px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 120px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-1ed2fb10-4c72-4697-9e44-dbb212f86431] {
    flex: none;
    width: 80px;
    max-width: 100%;
  }
}

.sd[data-s-616bcb87-928d-4195-b52c-44c443b11d37] {
  color: #333;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 20px;
  font-weight: 400;
  height: 1px;
  line-height: 1.4;
  text-align: center;
  width: 119px;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-733b38f5-d305-4b71-a429-804ab44d0e31] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 119px;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-77d70b41-ca1d-480f-ab9e-c7304a46b547] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 0px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 120px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-77d70b41-ca1d-480f-ab9e-c7304a46b547] {
    flex: none;
    width: 75px;
    max-width: 100%;
  }
}

.sd[data-s-6b99891f-6923-4da3-8718-0bc309e6d56a] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: right;
  width: 47px;
  max-width: 100%;
  justify-content: flex-end;
}

.sd[data-s-cb3260ad-f612-4b5c-a57b-fe839809a7b9] {
  color: rgb(70, 156, 234);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 700;
  height: 21px;
  line-height: 1.4;
  text-align: left;
  width: 30px;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-4c0c9c5a-19d8-4903-b2d6-d85318b37e6b] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 0px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 120px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-4c0c9c5a-19d8-4903-b2d6-d85318b37e6b] {
    flex: none;
    width: 75px;
    max-width: 100%;
  }
}

.sd[data-s-3689a300-fcf1-4e5b-96ba-63285df53563] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: right;
  width: 47px;
  max-width: 100%;
  justify-content: flex-end;
}

.sd[data-s-574a9391-dfba-4010-ad74-0608ff34f31f] {
  color: rgb(70, 156, 234);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 700;
  height: 21px;
  line-height: 1.4;
  text-align: left;
  width: 30px;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-dbf23e13-96b4-465b-b79d-c58dd9869ece] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 0px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 120px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-dbf23e13-96b4-465b-b79d-c58dd9869ece] {
    flex: none;
    width: 75px;
    max-width: 100%;
  }
}

.sd[data-s-c2e0d732-1984-4fc2-878c-5384b27bd927] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: right;
  width: 47px;
  max-width: 100%;
  justify-content: flex-end;
}

.sd[data-s-7b81d7b2-e541-451a-910f-522fa36caa7c] {
  color: rgb(70, 156, 234);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 700;
  height: 21px;
  line-height: 1.4;
  text-align: left;
  width: 30px;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-cfd8f759-9a09-4515-9fb8-cb32b6bdc250] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 0px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 120px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-cfd8f759-9a09-4515-9fb8-cb32b6bdc250] {
    flex: none;
    width: 75px;
    max-width: 100%;
  }
}

.sd[data-s-284e9d8d-e0ce-4f04-a8c9-7605e1bf8974] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: right;
  width: 47px;
  max-width: 100%;
  justify-content: flex-end;
}

.sd[data-s-a4e599e7-8505-4afb-9c9b-8150a608c3c8] {
  color: rgb(70, 156, 234);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 700;
  height: 21px;
  line-height: 1.4;
  text-align: left;
  width: 30px;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-28de5853-6e0f-4446-8b9a-225d610c9490] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 0px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 120px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-28de5853-6e0f-4446-8b9a-225d610c9490] {
    flex: none;
    width: 100px;
    max-width: 100%;
  }
}

.sd[data-s-c7850862-1989-43a5-b38d-e52e5a6abb46] {
  color: rgb(70, 156, 234);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 700;
  height: 21px;
  line-height: 1.4;
  text-align: left;
  width: 30px;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-b65eaa50-c557-4dec-8430-e02f5a45be38] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 630px) {
  .sd[data-s-b65eaa50-c557-4dec-8430-e02f5a45be38] {
    display: none;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-b65eaa50-c557-4dec-8430-e02f5a45be38] {
    display: none;
  }
}

.sd[data-s-8eee92c0-e20c-4da6-b433-ef8472240964] {
  align-content: flex-end;
  align-items: flex-end;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 2px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 0px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 120px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-8eee92c0-e20c-4da6-b433-ef8472240964] {
    flex: none;
    width: 80px;
    max-width: 100%;
  }
}

.sd[data-s-6d3e9c0d-ef7d-4d65-8e1f-0e3b8bf4ea09] {
  color: #333;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 20px;
  font-weight: 400;
  height: 1px;
  line-height: 1.4;
  text-align: center;
  width: 119px;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-5df5dc7e-d11b-4a4e-a08c-1d4383c724d5] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 119px;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-b8273208-0322-468a-8852-a20ffee9a1f2] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 0px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 120px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-b8273208-0322-468a-8852-a20ffee9a1f2] {
    flex: none;
    width: 75px;
    max-width: 100%;
  }
}

.sd[data-s-84c404dd-18ad-4e95-9b68-095120a60658] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: right;
  width: 47px;
  max-width: 100%;
  justify-content: flex-end;
}

.sd[data-s-0d2e7525-9794-4225-9b61-a16ef1b66c9e] {
  color: rgb(70, 156, 234);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 700;
  height: 21px;
  line-height: 1.4;
  text-align: left;
  width: 30px;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-a2329569-2cc9-4c29-9562-7ce1c28baebb] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 0px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 120px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-a2329569-2cc9-4c29-9562-7ce1c28baebb] {
    flex: none;
    width: 75px;
    max-width: 100%;
  }
}

.sd[data-s-1fb34675-baad-467d-8779-a640bc812432] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: right;
  width: 47px;
  max-width: 100%;
  justify-content: flex-end;
}

.sd[data-s-a33b9c7f-66bd-4627-9ad8-bb29f9265a4b] {
  color: rgb(70, 156, 234);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 700;
  height: 21px;
  line-height: 1.4;
  text-align: left;
  width: 30px;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-16edcb47-3e6c-42b6-a47c-ec96eafe8c3e] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 0px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 120px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-16edcb47-3e6c-42b6-a47c-ec96eafe8c3e] {
    flex: none;
    width: 75px;
    max-width: 100%;
  }
}

.sd[data-s-eefcf483-48e1-4eef-8a25-88b4cf67cdff] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: right;
  width: 47px;
  max-width: 100%;
  justify-content: flex-end;
}

.sd[data-s-751d04ea-7f29-43be-816e-b702649ea914] {
  color: rgb(70, 156, 234);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 700;
  height: 21px;
  line-height: 1.4;
  text-align: left;
  width: 30px;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-7be919a4-df2d-40f5-870b-77b8951cc299] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 0px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 120px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-7be919a4-df2d-40f5-870b-77b8951cc299] {
    flex: none;
    width: 75px;
    max-width: 100%;
  }
}

.sd[data-s-45dd0968-522f-4c87-bc25-2303879bdb3c] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: right;
  width: 47px;
  max-width: 100%;
  justify-content: flex-end;
}

.sd[data-s-65696361-eeed-4294-9d0a-9af22397c691] {
  color: rgb(70, 156, 234);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 700;
  height: 21px;
  line-height: 1.4;
  text-align: left;
  width: 30px;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-08b6d13d-8d7e-451f-aa9b-573f5fd1f0b0] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 0px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 120px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-08b6d13d-8d7e-451f-aa9b-573f5fd1f0b0] {
    flex: none;
    width: 100px;
    max-width: 100%;
  }
}

.sd[data-s-cfc21664-4ce9-46f7-a61a-4abed91ca3dd] {
  color: rgb(70, 156, 234);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 700;
  height: 21px;
  line-height: 1.4;
  text-align: left;
  width: 30px;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-43322504-7780-44de-a7e4-f9bf6c0b59a8] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 630px) {
  .sd[data-s-43322504-7780-44de-a7e4-f9bf6c0b59a8] {
    display: none;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-43322504-7780-44de-a7e4-f9bf6c0b59a8] {
    display: none;
  }
}

.sd[data-s-cd16de74-ca94-454a-9184-c7261bee6cd5] {
  align-content: flex-end;
  align-items: flex-end;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 2px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 0px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 120px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-cd16de74-ca94-454a-9184-c7261bee6cd5] {
    flex: none;
    width: 80px;
    max-width: 100%;
  }
}

.sd[data-s-ca4e29fa-6c8c-4bb9-90bd-f1a563fad57f] {
  color: #333;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 20px;
  font-weight: 400;
  height: 1px;
  line-height: 1.4;
  text-align: center;
  width: 119px;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-d3dea4bd-84c9-4b63-bb3a-4d6c8dd8194f] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 119px;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-f1d2488a-ba0f-4c5d-9ef6-0611325615bd] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 0px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 120px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-f1d2488a-ba0f-4c5d-9ef6-0611325615bd] {
    flex: none;
    width: 75px;
    max-width: 100%;
  }
}

.sd[data-s-211e51a7-7b26-477d-997b-38f4b00901d1] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: right;
  width: 47px;
  max-width: 100%;
  justify-content: flex-end;
}

.sd[data-s-50065f17-da93-4c97-85b2-6b47854febc1] {
  color: rgb(70, 156, 234);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 700;
  height: 21px;
  line-height: 1.4;
  text-align: left;
  width: 30px;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-12f98915-5693-4c51-97cc-86d3d1eee7c4] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 0px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 120px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-12f98915-5693-4c51-97cc-86d3d1eee7c4] {
    flex: none;
    width: 75px;
    max-width: 100%;
  }
}

.sd[data-s-24ed2682-d611-46b6-9acc-0273427a17bc] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: right;
  width: 47px;
  max-width: 100%;
  justify-content: flex-end;
}

.sd[data-s-0d07f48b-1c34-4d83-be59-e039ca351494] {
  color: rgb(70, 156, 234);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 700;
  height: 21px;
  line-height: 1.4;
  text-align: left;
  width: 30px;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-2984ff91-c046-4655-9c70-5b2089b3e343] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 0px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 120px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-2984ff91-c046-4655-9c70-5b2089b3e343] {
    flex: none;
    width: 75px;
    max-width: 100%;
  }
}

.sd[data-s-f5f1ef1c-efd5-49ef-a76f-080cca45e351] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: right;
  width: 47px;
  max-width: 100%;
  justify-content: flex-end;
}

.sd[data-s-f5339f87-9bef-4f02-ae28-cd23a88f5984] {
  color: rgb(70, 156, 234);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 700;
  height: 21px;
  line-height: 1.4;
  text-align: left;
  width: 30px;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-8d60aaa0-b468-4731-9831-ba41481f898b] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 0px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 120px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-8d60aaa0-b468-4731-9831-ba41481f898b] {
    flex: none;
    width: 75px;
    max-width: 100%;
  }
}

.sd[data-s-3987f858-4d83-4683-8b9e-d39700554b76] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: right;
  width: 47px;
  max-width: 100%;
  justify-content: flex-end;
}

.sd[data-s-7bfca069-ca57-444b-83ff-50a96932eb13] {
  color: rgb(70, 156, 234);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 700;
  height: 21px;
  line-height: 1.4;
  text-align: left;
  width: 30px;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-7a32c49e-b399-437b-96cc-f7b27a67a8e8] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 0px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 120px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-7a32c49e-b399-437b-96cc-f7b27a67a8e8] {
    flex: none;
    width: 100px;
    max-width: 100%;
  }
}

.sd[data-s-d1703a8d-6935-4e8b-bfbb-989cdcc305be] {
  color: rgb(70, 156, 234);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 700;
  height: 21px;
  line-height: 1.4;
  text-align: left;
  width: 30px;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-b161b50b-32fa-4047-9a3b-4e549ffb2b14] {
  align-content: center;
  align-items: center;
  display: none;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 890px) {
  .sd[data-s-b161b50b-32fa-4047-9a3b-4e549ffb2b14] {
    display: none;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-b161b50b-32fa-4047-9a3b-4e549ffb2b14] {
    display: flex;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-b161b50b-32fa-4047-9a3b-4e549ffb2b14] {
    display: flex;
  }
}

.sd[data-s-78d92f07-009c-4b83-88c5-72bbd588544f] {
  align-content: flex-end;
  align-items: flex-end;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 2px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 2px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 120px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-78d92f07-009c-4b83-88c5-72bbd588544f] {
    flex: none;
    width: 80px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-78d92f07-009c-4b83-88c5-72bbd588544f] {
    flex: none;
    width: 65px;
    max-width: 100%;
  }
}

.sd[data-s-4e6da7f0-6043-4041-8197-d047da4d64ab] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 119px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-4e6da7f0-6043-4041-8197-d047da4d64ab] {
    font-size: 14px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-4e6da7f0-6043-4041-8197-d047da4d64ab] {
    font-size: 13px;
  }
}

.sd[data-s-368f220a-4851-497a-ac4b-43228d1c04a3] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 630px) {
  .sd[data-s-368f220a-4851-497a-ac4b-43228d1c04a3] {
    padding: 0px;
  }
}

.sd[data-s-1c2e8420-8388-476c-bce1-4fdb461a9285] {
  align-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-d5a12202-d675-4e3c-b88d-8421fa35b143] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 2px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 480px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-d5a12202-d675-4e3c-b88d-8421fa35b143] {
    border-bottom: 0px solid rgb(228, 241, 254);
    border-left: 0px solid rgb(228, 241, 254);
    border-right: 2px solid rgb(228, 241, 254);
    border-top: 2px solid rgb(228, 241, 254);
    flex: none;
    height: 25px;
    width: 160px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-d5a12202-d675-4e3c-b88d-8421fa35b143] {
    border-bottom: 0px solid rgb(228, 241, 254);
    border-left: 0px solid rgb(228, 241, 254);
    border-right: 2px solid rgb(228, 241, 254);
    border-top: 2px solid rgb(228, 241, 254);
    flex: none;
    width: 160px;
  }
}

.sd[data-s-169cbad5-7d6c-4919-82a3-d23d935cbdff] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 82px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-169cbad5-7d6c-4919-82a3-d23d935cbdff] {
    font-size: 14px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-169cbad5-7d6c-4919-82a3-d23d935cbdff] {
    font-size: 13px;
  }
}

.sd[data-s-6a6b2454-5903-4830-8e27-35bdf973823b] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 320px) {
  .sd[data-s-6a6b2454-5903-4830-8e27-35bdf973823b] {
    height: auto;
    max-width: 100%;
  }
}

.sd[data-s-3230e246-ffc5-4851-94e9-811e4e26bc00] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 2px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 480px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-3230e246-ffc5-4851-94e9-811e4e26bc00] {
    flex: none;
    height: 25px;
    width: 40px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-3230e246-ffc5-4851-94e9-811e4e26bc00] {
    flex: none;
    width: 40px;
  }
}

.sd[data-s-15236403-b70d-4437-9037-da123b55c5c7] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 82px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-15236403-b70d-4437-9037-da123b55c5c7] {
    font-size: 12px;
    font-weight: 400;
  }
}

.sd[data-s-358dfa22-e3ee-40a1-b610-5950f2cc7b9c] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 2px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 480px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-358dfa22-e3ee-40a1-b610-5950f2cc7b9c] {
    flex: none;
    height: 25px;
    width: 40px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-358dfa22-e3ee-40a1-b610-5950f2cc7b9c] {
    flex: none;
    width: 40px;
  }
}

.sd[data-s-162ed614-0363-4d9e-9e46-46edbb427a27] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 82px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-162ed614-0363-4d9e-9e46-46edbb427a27] {
    font-size: 12px;
    font-weight: 400;
  }
}

.sd[data-s-942a8d85-e729-4fa2-ac2d-5ac0a7c4626a] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 2px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 480px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-942a8d85-e729-4fa2-ac2d-5ac0a7c4626a] {
    flex: none;
    height: 25px;
    width: 40px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-942a8d85-e729-4fa2-ac2d-5ac0a7c4626a] {
    flex: none;
    width: 40px;
  }
}

.sd[data-s-afa1c373-c323-49f9-a033-d28ab9b84b6f] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 82px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-afa1c373-c323-49f9-a033-d28ab9b84b6f] {
    font-size: 12px;
    font-weight: 400;
  }
}

.sd[data-s-e4698dcd-9629-488b-9ade-58d3b44b875c] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 2px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 480px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-e4698dcd-9629-488b-9ade-58d3b44b875c] {
    flex: none;
    height: 25px;
    width: 40px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-e4698dcd-9629-488b-9ade-58d3b44b875c] {
    flex: none;
    width: 40px;
  }
}

.sd[data-s-74b99525-679f-46b1-8d70-9cdf128d81d0] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 82px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-74b99525-679f-46b1-8d70-9cdf128d81d0] {
    font-size: 12px;
    font-weight: 400;
  }
}

.sd[data-s-0fc8eda6-cd9b-4de7-8587-8d1047c69cc8] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 2px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 120px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-0fc8eda6-cd9b-4de7-8587-8d1047c69cc8] {
    flex: none;
    width: 90px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-0fc8eda6-cd9b-4de7-8587-8d1047c69cc8] {
    flex: none;
    width: 65px;
    max-width: 100%;
  }
}

.sd[data-s-7f92f7af-9aa1-4576-b004-f7e2a61d1495] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  padding: 0px 0px 0px 0px;
  text-align: center;
  width: 82px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-7f92f7af-9aa1-4576-b004-f7e2a61d1495] {
    font-size: 14px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-7f92f7af-9aa1-4576-b004-f7e2a61d1495] {
    font-size: 13px;
  }
}

.sd[data-s-914dc04b-bce7-4c28-8884-02de8239fbd4] {
  align-content: center;
  align-items: center;
  display: none;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 890px) {
  .sd[data-s-914dc04b-bce7-4c28-8884-02de8239fbd4] {
    display: none;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-914dc04b-bce7-4c28-8884-02de8239fbd4] {
    display: flex;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-914dc04b-bce7-4c28-8884-02de8239fbd4] {
    display: flex;
  }
}

.sd[data-s-9eea27bb-21da-435f-a27f-9e3e470e6f69] {
  align-content: flex-end;
  align-items: flex-end;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 2px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 0px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 120px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-9eea27bb-21da-435f-a27f-9e3e470e6f69] {
    flex: none;
    width: 80px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-9eea27bb-21da-435f-a27f-9e3e470e6f69] {
    flex: none;
    width: 65px;
    max-width: 100%;
  }
}

.sd[data-s-6217d9f0-8c92-45de-9074-61325b9388f2] {
  color: #333;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 20px;
  font-weight: 400;
  height: 1px;
  line-height: 1.4;
  text-align: center;
  width: 119px;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-31a5ec5b-5773-4ffd-b9d6-35588d314b9a] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 119px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-31a5ec5b-5773-4ffd-b9d6-35588d314b9a] {
    font-size: 14px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-31a5ec5b-5773-4ffd-b9d6-35588d314b9a] {
    font-size: 13px;
  }
}

.sd[data-s-3da388d4-5450-4a4d-9208-c39837b9d488] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 630px) {
  .sd[data-s-3da388d4-5450-4a4d-9208-c39837b9d488] {
    height: 50px;
    padding: 0px;
    max-width: 100%;
  }
}

.sd[data-s-b14ca90c-8244-4c85-959e-71ad2b097e05] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 2px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 480px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-b14ca90c-8244-4c85-959e-71ad2b097e05] {
    border-bottom: 2px solid rgb(228, 241, 254);
    border-left: 0px solid rgb(228, 241, 254);
    border-right: 2px solid rgb(228, 241, 254);
    border-top: 0px solid rgb(228, 241, 254);
    flex: none;
    height: 100%;
    width: 40px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-b14ca90c-8244-4c85-959e-71ad2b097e05] {
    flex: none;
    width: 40px;
  }
}

.sd[data-s-a6cb3ea5-5f4c-4d4f-85ea-4d6d3fcc18a3] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 82px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-a6cb3ea5-5f4c-4d4f-85ea-4d6d3fcc18a3] {
    color: rgb(70, 156, 234);
    font-size: 12px;
    font-weight: 900;
  }
}

.sd[data-s-c0518c53-d00f-4128-ae9e-620aa8798d78] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 2px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 480px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-c0518c53-d00f-4128-ae9e-620aa8798d78] {
    border-bottom: 2px solid rgb(228, 241, 254);
    border-left: 0px solid rgb(228, 241, 254);
    border-right: 2px solid rgb(228, 241, 254);
    border-top: 0px solid rgb(228, 241, 254);
    flex: none;
    height: 100%;
    width: 40px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-c0518c53-d00f-4128-ae9e-620aa8798d78] {
    flex: none;
    width: 40px;
  }
}

.sd[data-s-f58272bd-8197-4a19-8392-6d9599c1dd6a] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 82px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-f58272bd-8197-4a19-8392-6d9599c1dd6a] {
    color: rgb(70, 156, 234);
    font-size: 12px;
    font-weight: 900;
  }
}

.sd[data-s-61231c83-3209-44d3-a035-c7b1e9304e61] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 2px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 480px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-61231c83-3209-44d3-a035-c7b1e9304e61] {
    border-bottom: 2px solid rgb(228, 241, 254);
    border-left: 0px solid rgb(228, 241, 254);
    border-right: 2px solid rgb(228, 241, 254);
    border-top: 0px solid rgb(228, 241, 254);
    flex: none;
    height: 100%;
    width: 40px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-61231c83-3209-44d3-a035-c7b1e9304e61] {
    flex: none;
    width: 40px;
  }
}

.sd[data-s-06cdc700-c7fc-463f-85d4-0c29c56af6ad] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 82px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-06cdc700-c7fc-463f-85d4-0c29c56af6ad] {
    color: rgb(70, 156, 234);
    font-size: 12px;
    font-weight: 900;
  }
}

.sd[data-s-96f630bd-b963-4426-b67e-9ee5eab0238e] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 2px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 480px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-96f630bd-b963-4426-b67e-9ee5eab0238e] {
    border-bottom: 2px solid rgb(228, 241, 254);
    border-left: 0px solid rgb(228, 241, 254);
    border-right: 2px solid rgb(228, 241, 254);
    border-top: 0px solid rgb(228, 241, 254);
    flex: none;
    height: 100%;
    width: 40px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-96f630bd-b963-4426-b67e-9ee5eab0238e] {
    flex: none;
    width: 40px;
  }
}

.sd[data-s-2518ad47-8158-4ed0-bc87-732016772f92] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 82px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-2518ad47-8158-4ed0-bc87-732016772f92] {
    color: rgb(70, 156, 234);
    font-size: 12px;
    font-weight: 900;
  }
}

.sd[data-s-a1aaa740-1dfe-4f74-80c3-88f975583e5f] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 2px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 480px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-a1aaa740-1dfe-4f74-80c3-88f975583e5f] {
    border-bottom: 2px solid rgb(228, 241, 254);
    border-left: 0px solid rgb(228, 241, 254);
    border-right: 2px solid rgb(228, 241, 254);
    border-top: 0px solid rgb(228, 241, 254);
    flex: none;
    height: 100%;
    width: 90px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-a1aaa740-1dfe-4f74-80c3-88f975583e5f] {
    flex: none;
    width: 65px;
    max-width: 100%;
    height: 100%;
  }
}

.sd[data-s-9eafa6ac-408e-437c-b2f6-8f08ecc69ebf] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 82px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-9eafa6ac-408e-437c-b2f6-8f08ecc69ebf] {
    color: rgb(70, 156, 234);
    font-size: 12px;
    font-weight: 900;
  }
}

.sd[data-s-33ec8253-68fa-4a80-aa0b-bff8e95d938c] {
  align-content: center;
  align-items: center;
  display: none;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 890px) {
  .sd[data-s-33ec8253-68fa-4a80-aa0b-bff8e95d938c] {
    display: none;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-33ec8253-68fa-4a80-aa0b-bff8e95d938c] {
    display: flex;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-33ec8253-68fa-4a80-aa0b-bff8e95d938c] {
    display: flex;
  }
}

.sd[data-s-1fe99fe0-37ea-44c3-a0f5-0040c074ab8e] {
  align-content: flex-end;
  align-items: flex-end;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 2px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 0px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 120px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-1fe99fe0-37ea-44c3-a0f5-0040c074ab8e] {
    flex: none;
    width: 80px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-1fe99fe0-37ea-44c3-a0f5-0040c074ab8e] {
    flex: none;
    width: 65px;
    max-width: 100%;
  }
}

.sd[data-s-0f705691-7166-42d3-9ee6-86c736cca469] {
  color: #333;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 20px;
  font-weight: 400;
  height: 1px;
  line-height: 1.4;
  text-align: center;
  width: 119px;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-91290544-773e-4f19-9ed2-c33ad8aad4f0] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 119px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-91290544-773e-4f19-9ed2-c33ad8aad4f0] {
    font-size: 14px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-91290544-773e-4f19-9ed2-c33ad8aad4f0] {
    font-size: 13px;
  }
}

.sd[data-s-414f8e5d-42e9-4215-b3ae-0bac7f3745ee] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 630px) {
  .sd[data-s-414f8e5d-42e9-4215-b3ae-0bac7f3745ee] {
    height: 50px;
    padding: 0px;
    max-width: 100%;
  }
}

.sd[data-s-cfe06057-05aa-4459-994d-7365c663df49] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 2px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 480px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-cfe06057-05aa-4459-994d-7365c663df49] {
    border-bottom: 2px solid rgb(228, 241, 254);
    border-left: 0px solid rgb(228, 241, 254);
    border-right: 2px solid rgb(228, 241, 254);
    border-top: 0px solid rgb(228, 241, 254);
    flex: none;
    height: 100%;
    width: 40px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-cfe06057-05aa-4459-994d-7365c663df49] {
    flex: none;
    width: 40px;
  }
}

.sd[data-s-80da235c-c798-4b04-b5b2-41a4a7f17b10] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 82px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-80da235c-c798-4b04-b5b2-41a4a7f17b10] {
    color: rgb(70, 156, 234);
    font-size: 12px;
    font-weight: 900;
  }
}

.sd[data-s-96f1bbcc-2681-47fa-94fb-81c9f26163c6] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 2px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 480px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-96f1bbcc-2681-47fa-94fb-81c9f26163c6] {
    border-bottom: 2px solid rgb(228, 241, 254);
    border-left: 0px solid rgb(228, 241, 254);
    border-right: 2px solid rgb(228, 241, 254);
    border-top: 0px solid rgb(228, 241, 254);
    flex: none;
    height: 100%;
    width: 40px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-96f1bbcc-2681-47fa-94fb-81c9f26163c6] {
    flex: none;
    width: 40px;
  }
}

.sd[data-s-d09f8081-5286-44de-84a7-78761e5fe210] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 82px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-d09f8081-5286-44de-84a7-78761e5fe210] {
    color: rgb(70, 156, 234);
    font-size: 12px;
    font-weight: 900;
  }
}

.sd[data-s-f144981d-34d5-4d2a-a6a9-e937ad968c86] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 2px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 480px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-f144981d-34d5-4d2a-a6a9-e937ad968c86] {
    border-bottom: 2px solid rgb(228, 241, 254);
    border-left: 0px solid rgb(228, 241, 254);
    border-right: 2px solid rgb(228, 241, 254);
    border-top: 0px solid rgb(228, 241, 254);
    flex: none;
    height: 100%;
    width: 40px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-f144981d-34d5-4d2a-a6a9-e937ad968c86] {
    flex: none;
    width: 40px;
  }
}

.sd[data-s-c119de57-3073-4695-b049-f22ea1ac47b8] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 82px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-c119de57-3073-4695-b049-f22ea1ac47b8] {
    color: rgb(70, 156, 234);
    font-size: 12px;
    font-weight: 900;
  }
}

.sd[data-s-52cd0809-e8b5-465f-a046-64a717a83f61] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 2px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 480px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-52cd0809-e8b5-465f-a046-64a717a83f61] {
    border-bottom: 2px solid rgb(228, 241, 254);
    border-left: 0px solid rgb(228, 241, 254);
    border-right: 2px solid rgb(228, 241, 254);
    border-top: 0px solid rgb(228, 241, 254);
    flex: none;
    height: 100%;
    width: 40px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-52cd0809-e8b5-465f-a046-64a717a83f61] {
    flex: none;
    width: 40px;
  }
}

.sd[data-s-01396ee7-2734-432b-b969-d301e4a9fc6c] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 82px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-01396ee7-2734-432b-b969-d301e4a9fc6c] {
    color: rgb(70, 156, 234);
    font-size: 12px;
    font-weight: 900;
  }
}

.sd[data-s-9bbbdc6d-cfd1-4dca-9f71-b82651a83d4f] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 2px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 480px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-9bbbdc6d-cfd1-4dca-9f71-b82651a83d4f] {
    border-bottom: 2px solid rgb(228, 241, 254);
    border-left: 0px solid rgb(228, 241, 254);
    border-right: 2px solid rgb(228, 241, 254);
    border-top: 0px solid rgb(228, 241, 254);
    flex: none;
    height: 100%;
    width: 90px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-9bbbdc6d-cfd1-4dca-9f71-b82651a83d4f] {
    flex: none;
    width: 65px;
    max-width: 100%;
    height: 100%;
  }
}

.sd[data-s-23448368-2ac2-40ea-b379-12162e20531b] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 82px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-23448368-2ac2-40ea-b379-12162e20531b] {
    color: rgb(70, 156, 234);
    font-size: 12px;
    font-weight: 900;
  }
}

.sd[data-s-369b113e-f51f-4f7b-a3c5-b33cd0677052] {
  align-content: center;
  align-items: center;
  display: none;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 890px) {
  .sd[data-s-369b113e-f51f-4f7b-a3c5-b33cd0677052] {
    display: none;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-369b113e-f51f-4f7b-a3c5-b33cd0677052] {
    display: flex;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-369b113e-f51f-4f7b-a3c5-b33cd0677052] {
    display: flex;
  }
}

.sd[data-s-7a6b8167-1332-4059-8655-a50b6c9ffd82] {
  align-content: flex-end;
  align-items: flex-end;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 2px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 0px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 120px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-7a6b8167-1332-4059-8655-a50b6c9ffd82] {
    flex: none;
    width: 80px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-7a6b8167-1332-4059-8655-a50b6c9ffd82] {
    flex: none;
    width: 65px;
    max-width: 100%;
  }
}

.sd[data-s-a31a6525-bd7c-4b08-8233-f3ec0fd62240] {
  color: #333;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 20px;
  font-weight: 400;
  height: 1px;
  line-height: 1.4;
  text-align: center;
  width: 119px;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-092ea7d5-86a1-4a1b-846c-28212c260541] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 119px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-092ea7d5-86a1-4a1b-846c-28212c260541] {
    font-size: 14px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-092ea7d5-86a1-4a1b-846c-28212c260541] {
    font-size: 13px;
    padding: 0px 0px 0px 0px;
  }
}

.sd[data-s-26f2921b-fc37-4467-a5ed-28e9d3e76cb0] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 630px) {
  .sd[data-s-26f2921b-fc37-4467-a5ed-28e9d3e76cb0] {
    height: 50px;
    padding: 0px;
    max-width: 100%;
  }
}

.sd[data-s-72e6ee44-5462-4e39-8914-a6e56cbccaac] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 2px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 480px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-72e6ee44-5462-4e39-8914-a6e56cbccaac] {
    border-bottom: 2px solid rgb(228, 241, 254);
    border-left: 0px solid rgb(228, 241, 254);
    border-right: 2px solid rgb(228, 241, 254);
    border-top: 0px solid rgb(228, 241, 254);
    flex: none;
    height: 100%;
    width: 40px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-72e6ee44-5462-4e39-8914-a6e56cbccaac] {
    flex: none;
    width: 40px;
  }
}

.sd[data-s-ab061b35-9de5-4c75-8fa4-c3cf8ad18b1c] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 82px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-ab061b35-9de5-4c75-8fa4-c3cf8ad18b1c] {
    color: rgb(70, 156, 234);
    font-size: 12px;
    font-weight: 900;
  }
}

.sd[data-s-f50943bf-7fe7-4fa8-9565-3e2d87a2bb06] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 2px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 480px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-f50943bf-7fe7-4fa8-9565-3e2d87a2bb06] {
    border-bottom: 2px solid rgb(228, 241, 254);
    border-left: 0px solid rgb(228, 241, 254);
    border-right: 2px solid rgb(228, 241, 254);
    border-top: 0px solid rgb(228, 241, 254);
    flex: none;
    height: 100%;
    width: 40px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-f50943bf-7fe7-4fa8-9565-3e2d87a2bb06] {
    flex: none;
    width: 40px;
  }
}

.sd[data-s-5bbcdf56-e83a-4cf6-8a4e-b42cadd94ba5] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 82px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-5bbcdf56-e83a-4cf6-8a4e-b42cadd94ba5] {
    color: rgb(70, 156, 234);
    font-size: 12px;
    font-weight: 900;
  }
}

.sd[data-s-8524eb5b-bcc3-4490-bb80-e67f16a2f9ee] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 2px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 480px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-8524eb5b-bcc3-4490-bb80-e67f16a2f9ee] {
    border-bottom: 2px solid rgb(228, 241, 254);
    border-left: 0px solid rgb(228, 241, 254);
    border-right: 2px solid rgb(228, 241, 254);
    border-top: 0px solid rgb(228, 241, 254);
    flex: none;
    height: 100%;
    width: 40px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-8524eb5b-bcc3-4490-bb80-e67f16a2f9ee] {
    flex: none;
    width: 40px;
  }
}

.sd[data-s-a21f1049-397c-4b0c-9668-7986955b9055] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 82px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-a21f1049-397c-4b0c-9668-7986955b9055] {
    color: rgb(70, 156, 234);
    font-size: 12px;
    font-weight: 900;
  }
}

.sd[data-s-024ccee2-b18f-4b08-8b3a-1be25bf9de15] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 2px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 480px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-024ccee2-b18f-4b08-8b3a-1be25bf9de15] {
    border-bottom: 2px solid rgb(228, 241, 254);
    border-left: 0px solid rgb(228, 241, 254);
    border-right: 2px solid rgb(228, 241, 254);
    border-top: 0px solid rgb(228, 241, 254);
    flex: none;
    height: 100%;
    width: 40px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-024ccee2-b18f-4b08-8b3a-1be25bf9de15] {
    flex: none;
    width: 40px;
  }
}

.sd[data-s-501f0573-0800-439d-a951-37d505e41729] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 82px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-501f0573-0800-439d-a951-37d505e41729] {
    color: rgb(70, 156, 234);
    font-size: 12px;
    font-weight: 900;
  }
}

.sd[data-s-23245b0f-d821-45cb-81f5-01687ddc4ab2] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 2px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 480px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-23245b0f-d821-45cb-81f5-01687ddc4ab2] {
    border-bottom: 2px solid rgb(228, 241, 254);
    border-left: 0px solid rgb(228, 241, 254);
    border-right: 2px solid rgb(228, 241, 254);
    border-top: 0px solid rgb(228, 241, 254);
    flex: none;
    height: 100%;
    width: 90px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-23245b0f-d821-45cb-81f5-01687ddc4ab2] {
    flex: none;
    width: 65px;
    max-width: 100%;
    height: 100%;
  }
}

.sd[data-s-21a9cecc-c002-4039-84f7-0bdfb04c20fe] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 82px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-21a9cecc-c002-4039-84f7-0bdfb04c20fe] {
    color: rgb(70, 156, 234);
    font-size: 12px;
    font-weight: 900;
  }
}

.sd[data-s-ada1d2af-3661-4c6c-9bc1-2a990de2c1b3] {
  align-content: center;
  align-items: center;
  display: none;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 890px) {
  .sd[data-s-ada1d2af-3661-4c6c-9bc1-2a990de2c1b3] {
    display: none;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-ada1d2af-3661-4c6c-9bc1-2a990de2c1b3] {
    display: flex;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-ada1d2af-3661-4c6c-9bc1-2a990de2c1b3] {
    display: flex;
  }
}

.sd[data-s-e6d54d30-c4f9-40e6-9d8c-3ead311ec2f3] {
  align-content: flex-end;
  align-items: flex-end;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 2px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 0px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 120px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-e6d54d30-c4f9-40e6-9d8c-3ead311ec2f3] {
    flex: none;
    width: 80px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-e6d54d30-c4f9-40e6-9d8c-3ead311ec2f3] {
    flex: none;
    width: 65px;
    max-width: 100%;
  }
}

.sd[data-s-965d0540-8b5b-4dd7-828b-5fdf95f75b7b] {
  color: #333;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 20px;
  font-weight: 400;
  height: 1px;
  line-height: 1.4;
  text-align: center;
  width: 119px;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-d0ae1c5c-9c3a-4a9e-89e3-ebc2a4e0f2d6] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 119px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-d0ae1c5c-9c3a-4a9e-89e3-ebc2a4e0f2d6] {
    font-size: 14px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-d0ae1c5c-9c3a-4a9e-89e3-ebc2a4e0f2d6] {
    font-size: 13px;
  }
}

.sd[data-s-3a9feb11-f78c-4c2a-ad17-e3fd16f010b6] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 630px) {
  .sd[data-s-3a9feb11-f78c-4c2a-ad17-e3fd16f010b6] {
    height: 50px;
    padding: 0px;
    max-width: 100%;
  }
}

.sd[data-s-466cb3da-7b1e-4bad-bf25-8fffa390feb1] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 2px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 480px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-466cb3da-7b1e-4bad-bf25-8fffa390feb1] {
    border-bottom: 2px solid rgb(228, 241, 254);
    border-left: 0px solid rgb(228, 241, 254);
    border-right: 2px solid rgb(228, 241, 254);
    border-top: 0px solid rgb(228, 241, 254);
    flex: none;
    height: 100%;
    width: 40px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-466cb3da-7b1e-4bad-bf25-8fffa390feb1] {
    flex: none;
    width: 40px;
  }
}

.sd[data-s-5f9591fa-729a-451a-86a5-ea759e58ddfe] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 82px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-5f9591fa-729a-451a-86a5-ea759e58ddfe] {
    color: rgb(70, 156, 234);
    font-size: 12px;
    font-weight: 900;
  }
}

.sd[data-s-d29e57b5-66e2-4faa-a743-5181f7b07c84] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 2px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 480px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-d29e57b5-66e2-4faa-a743-5181f7b07c84] {
    border-bottom: 2px solid rgb(228, 241, 254);
    border-left: 0px solid rgb(228, 241, 254);
    border-right: 2px solid rgb(228, 241, 254);
    border-top: 0px solid rgb(228, 241, 254);
    flex: none;
    height: 100%;
    width: 40px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-d29e57b5-66e2-4faa-a743-5181f7b07c84] {
    flex: none;
    width: 40px;
  }
}

.sd[data-s-81d98991-7a48-4bcd-833d-e1634700b400] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 82px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-81d98991-7a48-4bcd-833d-e1634700b400] {
    color: rgb(70, 156, 234);
    font-size: 12px;
    font-weight: 900;
  }
}

.sd[data-s-76bd88fe-fac9-4bb2-be7f-2ad8de08f231] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 2px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 480px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-76bd88fe-fac9-4bb2-be7f-2ad8de08f231] {
    border-bottom: 2px solid rgb(228, 241, 254);
    border-left: 0px solid rgb(228, 241, 254);
    border-right: 2px solid rgb(228, 241, 254);
    border-top: 0px solid rgb(228, 241, 254);
    flex: none;
    height: 100%;
    width: 40px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-76bd88fe-fac9-4bb2-be7f-2ad8de08f231] {
    flex: none;
    width: 40px;
  }
}

.sd[data-s-a94681a4-2cb6-49cc-a6e4-d4923956b6e8] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 82px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-a94681a4-2cb6-49cc-a6e4-d4923956b6e8] {
    color: rgb(70, 156, 234);
    font-size: 12px;
    font-weight: 900;
  }
}

.sd[data-s-b3bd9b00-d1d4-40ea-850f-eba9cbf05544] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 2px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 480px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-b3bd9b00-d1d4-40ea-850f-eba9cbf05544] {
    border-bottom: 2px solid rgb(228, 241, 254);
    border-left: 0px solid rgb(228, 241, 254);
    border-right: 2px solid rgb(228, 241, 254);
    border-top: 0px solid rgb(228, 241, 254);
    flex: none;
    height: 100%;
    width: 40px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-b3bd9b00-d1d4-40ea-850f-eba9cbf05544] {
    flex: none;
    width: 40px;
  }
}

.sd[data-s-fdd9c41a-fa9f-4545-88b5-b567b03584e5] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 82px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-fdd9c41a-fa9f-4545-88b5-b567b03584e5] {
    color: rgb(70, 156, 234);
    font-size: 12px;
    font-weight: 900;
  }
}

.sd[data-s-73b833c7-2d20-4256-8cbc-cf5ef916979b] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 2px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 480px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-73b833c7-2d20-4256-8cbc-cf5ef916979b] {
    border-bottom: 2px solid rgb(228, 241, 254);
    border-left: 0px solid rgb(228, 241, 254);
    border-right: 2px solid rgb(228, 241, 254);
    border-top: 0px solid rgb(228, 241, 254);
    flex: none;
    height: 100%;
    width: 90px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-73b833c7-2d20-4256-8cbc-cf5ef916979b] {
    flex: none;
    width: 65px;
    max-width: 100%;
    height: 100%;
  }
}

.sd[data-s-3bf750f2-acc5-4cc1-bc94-64fd0805a3f7] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 82px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-3bf750f2-acc5-4cc1-bc94-64fd0805a3f7] {
    color: rgb(70, 156, 234);
    font-size: 12px;
    font-weight: 900;
  }
}

.sd[data-s-dc632b60-c61d-4832-9d82-8abab310226e] {
  align-content: center;
  align-items: center;
  display: none;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 890px) {
  .sd[data-s-dc632b60-c61d-4832-9d82-8abab310226e] {
    display: none;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-dc632b60-c61d-4832-9d82-8abab310226e] {
    display: flex;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-dc632b60-c61d-4832-9d82-8abab310226e] {
    display: flex;
  }
}

.sd[data-s-66d3803d-208f-458f-b5d3-1aca29fa8ed9] {
  align-content: flex-end;
  align-items: flex-end;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 2px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 0px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 120px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-66d3803d-208f-458f-b5d3-1aca29fa8ed9] {
    flex: none;
    width: 80px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-66d3803d-208f-458f-b5d3-1aca29fa8ed9] {
    flex: none;
    width: 65px;
    max-width: 100%;
  }
}

.sd[data-s-c5a1521b-0c0a-4e94-a476-0438908f7f8c] {
  color: #333;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 20px;
  font-weight: 400;
  height: 1px;
  line-height: 1.4;
  text-align: center;
  width: 119px;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-add1eda9-bc48-4496-8eb9-c4ba14da8013] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 119px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-add1eda9-bc48-4496-8eb9-c4ba14da8013] {
    font-size: 14px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-add1eda9-bc48-4496-8eb9-c4ba14da8013] {
    font-size: 13px;
  }
}

.sd[data-s-4fbbb080-ae58-4463-8006-8eb1d4b96eb7] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 630px) {
  .sd[data-s-4fbbb080-ae58-4463-8006-8eb1d4b96eb7] {
    height: 50px;
    padding: 0px;
    max-width: 100%;
  }
}

.sd[data-s-87bdfa8a-3494-4b3e-89c4-8ff8b74a379e] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 2px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 480px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-87bdfa8a-3494-4b3e-89c4-8ff8b74a379e] {
    border-bottom: 2px solid rgb(228, 241, 254);
    border-left: 0px solid rgb(228, 241, 254);
    border-right: 2px solid rgb(228, 241, 254);
    border-top: 0px solid rgb(228, 241, 254);
    flex: none;
    height: 100%;
    width: 40px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-87bdfa8a-3494-4b3e-89c4-8ff8b74a379e] {
    flex: none;
    width: 40px;
  }
}

.sd[data-s-e7125977-fe78-43c9-a43c-cb193f18e0cc] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 82px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-e7125977-fe78-43c9-a43c-cb193f18e0cc] {
    color: rgb(70, 156, 234);
    font-size: 12px;
    font-weight: 900;
  }
}

.sd[data-s-10801eef-b614-4517-978e-a96f4234573a] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 2px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 480px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-10801eef-b614-4517-978e-a96f4234573a] {
    border-bottom: 2px solid rgb(228, 241, 254);
    border-left: 0px solid rgb(228, 241, 254);
    border-right: 2px solid rgb(228, 241, 254);
    border-top: 0px solid rgb(228, 241, 254);
    flex: none;
    height: 100%;
    width: 40px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-10801eef-b614-4517-978e-a96f4234573a] {
    flex: none;
    width: 40px;
  }
}

.sd[data-s-baf74cae-580f-45c4-9678-f60536d58ae7] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 82px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-baf74cae-580f-45c4-9678-f60536d58ae7] {
    color: rgb(70, 156, 234);
    font-size: 12px;
    font-weight: 900;
  }
}

.sd[data-s-af2cd869-9b59-41e5-943a-74611df5dac5] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 2px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 480px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-af2cd869-9b59-41e5-943a-74611df5dac5] {
    border-bottom: 2px solid rgb(228, 241, 254);
    border-left: 0px solid rgb(228, 241, 254);
    border-right: 2px solid rgb(228, 241, 254);
    border-top: 0px solid rgb(228, 241, 254);
    flex: none;
    height: 100%;
    width: 40px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-af2cd869-9b59-41e5-943a-74611df5dac5] {
    flex: none;
    width: 40px;
  }
}

.sd[data-s-a5ba209c-3b0d-4da2-8ba9-f2c0df9cbd54] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 82px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-a5ba209c-3b0d-4da2-8ba9-f2c0df9cbd54] {
    color: rgb(70, 156, 234);
    font-size: 12px;
    font-weight: 900;
  }
}

.sd[data-s-6daa0989-21d0-4131-b8c8-ceb4db08a071] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 2px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 480px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-6daa0989-21d0-4131-b8c8-ceb4db08a071] {
    border-bottom: 2px solid rgb(228, 241, 254);
    border-left: 0px solid rgb(228, 241, 254);
    border-right: 2px solid rgb(228, 241, 254);
    border-top: 0px solid rgb(228, 241, 254);
    flex: none;
    height: 100%;
    width: 40px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-6daa0989-21d0-4131-b8c8-ceb4db08a071] {
    flex: none;
    width: 40px;
  }
}

.sd[data-s-2723d9d6-ed15-4de0-a674-b3dde5d4bfd4] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 82px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-2723d9d6-ed15-4de0-a674-b3dde5d4bfd4] {
    color: rgb(70, 156, 234);
    font-size: 12px;
    font-weight: 900;
  }
}

.sd[data-s-e4390867-a002-4dcf-9e36-50264f89f130] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 2px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 480px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-e4390867-a002-4dcf-9e36-50264f89f130] {
    border-bottom: 2px solid rgb(228, 241, 254);
    border-left: 0px solid rgb(228, 241, 254);
    border-right: 2px solid rgb(228, 241, 254);
    border-top: 0px solid rgb(228, 241, 254);
    flex: none;
    height: 100%;
    width: 90px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-e4390867-a002-4dcf-9e36-50264f89f130] {
    flex: none;
    width: 65px;
    max-width: 100%;
    height: 100%;
  }
}

.sd[data-s-03b23d4e-3f6d-4032-bc69-32a9699dd0a1] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 82px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-03b23d4e-3f6d-4032-bc69-32a9699dd0a1] {
    color: rgb(70, 156, 234);
    font-size: 12px;
    font-weight: 900;
  }
}

.sd[data-s-9fa6a77c-5756-48ad-95d9-89fc7e121fc0] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  margin: 20px 0px 0px 0px;
  padding: 0px;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-9fa6a77c-5756-48ad-95d9-89fc7e121fc0] {
    margin: 20px 0px 0px 0px;
    padding: 0px;
  }
}

.sd[data-s-36e5e06b-ec03-4489-a6bb-ce8b7e346740] {
  align-content: flex-end;
  align-items: flex-end;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 2px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 2px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 120px;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-36e5e06b-ec03-4489-a6bb-ce8b7e346740] {
    padding: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-36e5e06b-ec03-4489-a6bb-ce8b7e346740] {
    flex: none;
    width: 80px;
    max-width: 100%;
  }
}

.sd[data-s-c6c19ef4-2a3b-4f80-987f-362b79e9103f] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 119px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 320px) {
  .sd[data-s-c6c19ef4-2a3b-4f80-987f-362b79e9103f] {
    font-size: 13px;
  }
}

.sd[data-s-37a1b77e-0fde-4ae1-87c7-3cc24e2de4a0] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 2px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 600px;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-37a1b77e-0fde-4ae1-87c7-3cc24e2de4a0] {
    padding: 10px 10px 10px 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-37a1b77e-0fde-4ae1-87c7-3cc24e2de4a0] {
    flex: none;
    width: 250px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-37a1b77e-0fde-4ae1-87c7-3cc24e2de4a0] {
    flex: none;
    width: 210px;
    max-width: 100%;
  }
}

.sd[data-s-80d7e375-c0cb-4e91-9246-bcbd32bcc33e] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  padding: 0px 0px 0px 0px;
  text-align: center;
  width: 128px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 320px) {
  .sd[data-s-80d7e375-c0cb-4e91-9246-bcbd32bcc33e] {
    font-size: 13px;
  }
}

.sd[data-s-296c116d-7da5-4a0c-a818-71cdb99badc6] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 890px) {
  .sd[data-s-296c116d-7da5-4a0c-a818-71cdb99badc6] {
    margin: 0px 0px 0px 0px;
    padding: 0px;
    max-width: 100%;
  }
}

.sd[data-s-885372c3-e9d5-4dde-9fac-97ed8d1ec0d7] {
  align-content: flex-end;
  align-items: flex-end;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 2px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 0px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 120px;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-885372c3-e9d5-4dde-9fac-97ed8d1ec0d7] {
    border-radius: 0px;
    padding: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-885372c3-e9d5-4dde-9fac-97ed8d1ec0d7] {
    flex: none;
    width: 80px;
    max-width: 100%;
  }
}

.sd[data-s-fd63092e-505d-4f75-aa3b-dc384f1efdef] {
  color: #333;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 20px;
  font-weight: 400;
  height: 1px;
  line-height: 1.4;
  text-align: center;
  width: 119px;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-73bf0ddd-c852-43f1-8e85-9879864e3adf] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 119px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 320px) {
  .sd[data-s-73bf0ddd-c852-43f1-8e85-9879864e3adf] {
    font-size: 13px;
  }
}

.sd[data-s-385cfda5-7dd8-42ab-90cc-e21532c87db2] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 0px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 600px;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-385cfda5-7dd8-42ab-90cc-e21532c87db2] {
    margin: 0px 0px 0px 0px;
    padding: 10px;
    max-width: 100%;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-385cfda5-7dd8-42ab-90cc-e21532c87db2] {
    flex: none;
    width: 250px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-385cfda5-7dd8-42ab-90cc-e21532c87db2] {
    flex: none;
    width: 210px;
    max-width: 100%;
  }
}

.sd[data-s-8d6b92c1-ddbd-4f8c-9706-28aa2009d8b5] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: right;
  width: 99px;
  max-width: 100%;
  justify-content: flex-end;
}

@media screen and (max-width: 320px) {
  .sd[data-s-8d6b92c1-ddbd-4f8c-9706-28aa2009d8b5] {
    font-size: 13px;
  }
}

.sd[data-s-947b3754-10dd-47f4-839d-f2216391ebcf] {
  color: rgb(70, 156, 234);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 700;
  height: 21px;
  line-height: 1.4;
  text-align: left;
  width: 30px;
  max-width: 100%;
  justify-content: flex-start;
}

@media screen and (max-width: 320px) {
  .sd[data-s-947b3754-10dd-47f4-839d-f2216391ebcf] {
    font-size: 14px;
  }
}

.sd[data-s-92bb7333-87f3-4903-954b-b0fdef39ca96] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-496f9bb7-027e-4477-8b8d-59afecc572ce] {
  align-content: flex-end;
  align-items: flex-end;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 2px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 0px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 120px;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-496f9bb7-027e-4477-8b8d-59afecc572ce] {
    padding: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-496f9bb7-027e-4477-8b8d-59afecc572ce] {
    flex: none;
    width: 80px;
    max-width: 100%;
  }
}

.sd[data-s-978fcefb-d4a7-467b-9bf9-33ddea3aba8a] {
  color: #333;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 20px;
  font-weight: 400;
  height: 1px;
  line-height: 1.4;
  text-align: center;
  width: 119px;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-6b99cff4-2e48-415b-90cc-f0d9379af0cd] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 119px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 320px) {
  .sd[data-s-6b99cff4-2e48-415b-90cc-f0d9379af0cd] {
    font-size: 13px;
  }
}

.sd[data-s-c914623e-de12-4672-9436-072f08651bc5] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 0px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 600px;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-c914623e-de12-4672-9436-072f08651bc5] {
    padding: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-c914623e-de12-4672-9436-072f08651bc5] {
    flex: none;
    width: 250px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-c914623e-de12-4672-9436-072f08651bc5] {
    flex: none;
    width: 210px;
    max-width: 100%;
  }
}

.sd[data-s-91045c25-6e91-4f1d-b9d6-016cdd6fee56] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: right;
  width: 99px;
  max-width: 100%;
  justify-content: flex-end;
}

@media screen and (max-width: 320px) {
  .sd[data-s-91045c25-6e91-4f1d-b9d6-016cdd6fee56] {
    font-size: 13px;
  }
}

.sd[data-s-7bbda844-78a9-4093-95e2-15e4510f0462] {
  color: rgb(70, 156, 234);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 700;
  height: 21px;
  line-height: 1.4;
  text-align: left;
  width: 30px;
  max-width: 100%;
  justify-content: flex-start;
}

@media screen and (max-width: 320px) {
  .sd[data-s-7bbda844-78a9-4093-95e2-15e4510f0462] {
    font-size: 14px;
  }
}

.sd[data-s-464d41ab-043c-45b5-9dfd-a19bd17c15ef] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-ef25fb92-8a58-4199-a2e9-295dbea96424] {
  align-content: flex-end;
  align-items: flex-end;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 2px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 0px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 120px;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-ef25fb92-8a58-4199-a2e9-295dbea96424] {
    padding: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-ef25fb92-8a58-4199-a2e9-295dbea96424] {
    flex: none;
    width: 80px;
    max-width: 100%;
  }
}

.sd[data-s-445c8685-9266-4f5c-964d-cbc242f34d90] {
  color: #333;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 20px;
  font-weight: 400;
  height: 1px;
  line-height: 1.4;
  text-align: center;
  width: 119px;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-4097a173-c48d-47f7-a82c-afe033ecbb76] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 119px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 320px) {
  .sd[data-s-4097a173-c48d-47f7-a82c-afe033ecbb76] {
    font-size: 13px;
  }
}

.sd[data-s-14bd1a51-d720-4cbf-a032-20b04a69ecad] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-bottom: 2px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 2px solid rgb(228, 241, 254);
  border-top: 0px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 600px;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-14bd1a51-d720-4cbf-a032-20b04a69ecad] {
    padding: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-14bd1a51-d720-4cbf-a032-20b04a69ecad] {
    flex: none;
    width: 250px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-14bd1a51-d720-4cbf-a032-20b04a69ecad] {
    flex: none;
    width: 210px;
    max-width: 100%;
  }
}

.sd[data-s-130c7158-69d0-49f7-8395-c98748498564] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: right;
  width: 99px;
  max-width: 100%;
  justify-content: flex-end;
}

@media screen and (max-width: 320px) {
  .sd[data-s-130c7158-69d0-49f7-8395-c98748498564] {
    font-size: 13px;
  }
}

.sd[data-s-c78aa8dd-3aed-44d6-b2c6-c99009d20832] {
  color: rgb(70, 156, 234);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 700;
  height: 21px;
  line-height: 1.4;
  text-align: left;
  width: 30px;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-a3f7a671-6d92-4a36-9816-dda09d92337a] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 12px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 20px 0px 0px 0px;
  padding: 0px 10px 0px 10px;
  text-align: center;
  width: 741px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-a3f7a671-6d92-4a36-9816-dda09d92337a] {
    width: 330px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-a3f7a671-6d92-4a36-9816-dda09d92337a] {
    padding: 0px 15px 0px 15px;
  }
}

.sd[data-s-86f705c5-1ad0-4bd6-b93a-4614d6732ae9] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  flex-direction: column;
  flex-wrap: nowrap;
  height: 179px;
  justify-content: center;
  margin: 50px 0px 0px 0px;
  width: 100%;
  max-width: 100%;
  --g-color-0: rgb(243, 249, 254);
  --g-position-0: 100%;
  --g-color-1: #ffffff;
  --g-position-1: 100%;
  --g-color-2: #ffffff;
  --g-position-2: 100%;
  --g-color-3: #ffffff;
  --g-position-3: 100%;
  --g-color-4: #ffffff;
  --g-position-4: 100%;
  --g-color-5: #ffffff;
  --g-position-5: 100%;
  --g-color-6: #ffffff;
  --g-position-6: 100%;
  --g-color-7: #ffffff;
  --g-position-7: 100%;
  --g-color-8: #ffffff;
  --g-position-8: 100%;
  --g-color-9: #ffffff;
  --g-position-9: 100%;
  --g-color-10: #ffffff;
  --g-position-10: 100%;
  --g-color-11: #ffffff;
  --g-position-11: 100%;
  --g-angle: 90deg;
}

@media screen and (max-width: 630px) {
  .sd[data-s-86f705c5-1ad0-4bd6-b93a-4614d6732ae9] {
    height: 47px;
    margin: 20px 0px 0px 0px;
    width: 100%;
    max-width: 100%;
  }
}

.sd[data-s-96389737-be51-4a20-9c91-83ada5067fe1] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 32px;
  font-weight: 700;
  height: 66px;
  line-height: 1.4;
  text-align: center;
  width: 50%;
  max-width: 50%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-96389737-be51-4a20-9c91-83ada5067fe1] {
    font-size: 24px;
    width: 100%;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-96389737-be51-4a20-9c91-83ada5067fe1] {
    font-size: 24px;
    padding: 0px 20px 0px 20px;
    width: 100%;
  }
}

.sd[data-s-a1bb4000-07af-4313-bd50-cc20e7c3718f] {
  flex: none;
  height: auto;
  width: 881px;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-a1bb4000-07af-4313-bd50-cc20e7c3718f] {
    margin: 0px 20px 0px 20px;
    width: 840px;
    max-width: calc(100% - 40px);
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-a1bb4000-07af-4313-bd50-cc20e7c3718f] {
    height: 315px;
    width: 660px;
    max-width: calc(100% - 40px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-a1bb4000-07af-4313-bd50-cc20e7c3718f] {
    height: 176px;
    width: 393px;
    max-width: calc(100% - 40px);
  }
}

.sd[data-s-77382550-f944-450e-af2e-93d508a80db7] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 890px) {
  .sd[data-s-77382550-f944-450e-af2e-93d508a80db7] {
    border-radius: 0px 24px 24px 0px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-77382550-f944-450e-af2e-93d508a80db7] {
    border-radius: 24px;
  }
}

.sd[data-s-2136fafd-d150-42dd-a264-c03fa3250cc7] {
  align-content: flex-start;
  align-items: flex-start;
  background: #FFFFFF;
  border-radius: 24px 0px 24px 24px;
  display: none;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 358px;
  justify-content: center;
  margin: 50px 0px 0px 0px;
  width: 856px;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-2136fafd-d150-42dd-a264-c03fa3250cc7] {
    display: none;
    margin: 50px 50px 0px 50px;
    max-width: calc(100% - 100px);
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-2136fafd-d150-42dd-a264-c03fa3250cc7] {
    border-radius: 24px;
    display: flex;
    flex: none;
    height: auto;
    margin: 30px 20px 0px 20px;
    width: 454px;
    max-width: calc(100% - 40px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-2136fafd-d150-42dd-a264-c03fa3250cc7] {
    display: flex;
    flex: none;
    height: auto;
    margin: 50px 20px 0px 20px;
    max-width: calc(100% - 40px);
  }
}

.sd[data-s-7dc19c22-d13d-42a0-937f-38c9a68af214] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 630px) {
  .sd[data-s-7dc19c22-d13d-42a0-937f-38c9a68af214] {
    margin: 30px 0px 0px 0px;
    max-width: 100%;
  }
}

.sd[data-s-ab4d4d56-0a89-449d-86fe-f9b537aad8e6] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 36px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  margin: 0px 0px 0px 45px;
  text-align: center;
  width: 447px;
  max-width: calc(100% - 45px);
  justify-content: center;
}

@media screen and (max-width: 890px) {
  .sd[data-s-ab4d4d56-0a89-449d-86fe-f9b537aad8e6] {
    font-size: 28px;
    margin: 0px 300px 0px 62px;
    text-align: left;
    max-width: calc(100% - 362px);
    justify-content: flex-start;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-ab4d4d56-0a89-449d-86fe-f9b537aad8e6] {
    font-size: 20px;
    margin: 0px 30px 15px 30px;
    max-width: calc(100% - 60px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-ab4d4d56-0a89-449d-86fe-f9b537aad8e6] {
    font-size: 20px;
    margin: 0px 0px 15px 0px;
    padding: 0px 20px 0px 20px;
    width: 100%;
    max-width: 100%;
  }
}

.sd[data-s-ffc9133f-098e-493b-ae4f-f674cb9a124a] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 10px 0px 0px 55px;
  text-align: left;
  width: 397px;
  max-width: calc(100% - 55px);
  justify-content: flex-start;
}

@media screen and (max-width: 890px) {
  .sd[data-s-ffc9133f-098e-493b-ae4f-f674cb9a124a] {
    margin: 10px 0px 0px 60px;
    max-width: calc(100% - 60px);
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-ffc9133f-098e-493b-ae4f-f674cb9a124a] {
    font-size: 14px;
    margin: 0px 30px 0px 31px;
    text-align: left;
    width: calc(100% - 61px);
    max-width: calc(100% - 61px);
    justify-content: flex-start;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-ffc9133f-098e-493b-ae4f-f674cb9a124a] {
    margin: 0px 0px 0px 0px;
    padding: 0px 10px 0px 20px;
    width: 100%;
    max-width: 100%;
  }
}

.sd[data-s-7cf3cdb5-b7db-4a99-b4e0-aa0af83dbab2] {
  flex: none;
  height: auto;
  margin: 0px 2px 0px 0px;
  width: 183px;
  max-width: calc(100% - 2px);
}

@media screen and (max-width: 630px) {
  .sd[data-s-7cf3cdb5-b7db-4a99-b4e0-aa0af83dbab2] {
    flex: none;
    height: auto;
    margin: 30px 70px 30px 70px;
    width: calc(100% - 140px);
    max-width: calc(100% - 140px);
  }
}

.sd[data-s-96dbf283-126f-41ad-9fbc-7fa72ae25ee4] {
  align-content: flex-start;
  align-items: flex-start;
  background: #FFFFFF;
  border-radius: 24px 0px 0px 24px;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 358px;
  justify-content: center;
  margin: 50px 0px 0px 0px;
  width: 595px;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-96dbf283-126f-41ad-9fbc-7fa72ae25ee4] {
    border-radius: 24px 0px 0px 24px;
    display: flex;
    margin: 50px 0px 0px 20px;
    padding: 0px 0px 0px 0px;
    width: 407px;
    max-width: calc(100% - 20px);
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-96dbf283-126f-41ad-9fbc-7fa72ae25ee4] {
    display: none;
    flex: none;
    height: auto;
    margin: 30px 20px 0px 20px;
    width: 454px;
    max-width: calc(100% - 40px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-96dbf283-126f-41ad-9fbc-7fa72ae25ee4] {
    display: none;
    flex: none;
    height: auto;
    margin: 50px 20px 0px 20px;
    max-width: calc(100% - 40px);
  }
}

.sd[data-s-cb59c352-fa7f-4eac-ba3c-2f43c42b0dd0] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 890px) {
  .sd[data-s-cb59c352-fa7f-4eac-ba3c-2f43c42b0dd0] {
    width: 100%;
    max-width: 100%;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-cb59c352-fa7f-4eac-ba3c-2f43c42b0dd0] {
    margin: 30px 0px 0px 0px;
    width: 100%;
    max-width: 100%;
  }
}

.sd[data-s-737425bc-75c6-4aa5-af62-ec0e30f486ab] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 36px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  margin: 0px 0px 0px 45px;
  text-align: center;
  width: 447px;
  max-width: calc(100% - 45px);
  justify-content: center;
}

@media screen and (max-width: 890px) {
  .sd[data-s-737425bc-75c6-4aa5-af62-ec0e30f486ab] {
    font-size: 28px;
    margin: 0px 0px 0px 30px;
    padding: 0px 0px 0px 0px;
    text-align: left;
    width: calc(100% - 30px);
    max-width: calc(100% - 30px);
    justify-content: flex-start;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-737425bc-75c6-4aa5-af62-ec0e30f486ab] {
    font-size: 20px;
    margin: 0px 30px 15px 30px;
    width: calc(100% - 60px);
    max-width: calc(100% - 60px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-737425bc-75c6-4aa5-af62-ec0e30f486ab] {
    font-size: 20px;
    margin: 0px 0px 15px 0px;
    padding: 0px 20px 0px 20px;
    width: 100%;
    max-width: 100%;
  }
}

.sd[data-s-8a0f3e71-d8c3-4ff4-8f00-79eed4b02de3] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 10px 0px 0px 55px;
  text-align: left;
  width: 397px;
  max-width: calc(100% - 55px);
  justify-content: flex-start;
}

@media screen and (max-width: 890px) {
  .sd[data-s-8a0f3e71-d8c3-4ff4-8f00-79eed4b02de3] {
    margin: 10px 0px 0px 30px;
    max-width: calc(100% - 30px);
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-8a0f3e71-d8c3-4ff4-8f00-79eed4b02de3] {
    font-size: 14px;
    margin: 0px 30px 0px 31px;
    text-align: left;
    width: calc(100% - 61px);
    max-width: calc(100% - 61px);
    justify-content: flex-start;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-8a0f3e71-d8c3-4ff4-8f00-79eed4b02de3] {
    margin: 0px 0px 0px 0px;
    padding: 0px 10px 0px 20px;
    width: 100%;
    max-width: 100%;
  }
}

.sd[data-s-7a8c0a92-f3e2-4cbc-aadf-4c3639ce2333] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-radius: 0px 24px 24px 0px;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 358px;
  justify-content: center;
  margin: 50px 0px 0px 0px;
  width: 430px;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-7a8c0a92-f3e2-4cbc-aadf-4c3639ce2333] {
    border-radius: 0px 24px 24px 0px;
    display: flex;
    margin: 50px 25px 0px 0px;
    width: 278px;
    max-width: calc(100% - 25px);
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-7a8c0a92-f3e2-4cbc-aadf-4c3639ce2333] {
    display: none;
    flex: none;
    height: auto;
    margin: 30px 20px 0px 20px;
    width: 454px;
    max-width: calc(100% - 40px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-7a8c0a92-f3e2-4cbc-aadf-4c3639ce2333] {
    display: none;
    flex: none;
    height: auto;
    margin: 50px 20px 0px 20px;
    max-width: calc(100% - 40px);
  }
}

.sd[data-s-42420138-5cc1-4999-8348-3308a464b6a6] {
  flex: none;
  height: auto;
  margin: 0px 2px 0px 0px;
  width: 238px;
  max-width: calc(100% - 2px);
}

@media screen and (max-width: 630px) {
  .sd[data-s-42420138-5cc1-4999-8348-3308a464b6a6] {
    flex: none;
    height: auto;
    margin: 30px 70px 30px 70px;
    width: calc(100% - 140px);
    max-width: calc(100% - 140px);
  }
}

.sd[data-s-e4d7b8d8-24ba-48fb-a38a-31062ebe368c] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  flex-direction: column;
  flex-wrap: nowrap;
  height: 179px;
  justify-content: center;
  margin: 80px 0px 0px 0px;
  width: 100%;
  max-width: 100%;
  --g-color-0: rgb(243, 249, 254);
  --g-position-0: 100%;
  --g-color-1: #ffffff;
  --g-position-1: 100%;
  --g-color-2: #ffffff;
  --g-position-2: 100%;
  --g-color-3: #ffffff;
  --g-position-3: 100%;
  --g-color-4: #ffffff;
  --g-position-4: 100%;
  --g-color-5: #ffffff;
  --g-position-5: 100%;
  --g-color-6: #ffffff;
  --g-position-6: 100%;
  --g-color-7: #ffffff;
  --g-position-7: 100%;
  --g-color-8: #ffffff;
  --g-position-8: 100%;
  --g-color-9: #ffffff;
  --g-position-9: 100%;
  --g-color-10: #ffffff;
  --g-position-10: 100%;
  --g-color-11: #ffffff;
  --g-position-11: 100%;
  --g-angle: 90deg;
}

@media screen and (max-width: 630px) {
  .sd[data-s-e4d7b8d8-24ba-48fb-a38a-31062ebe368c] {
    height: 70px;
    margin: 20px 0px 0px 0px;
    width: 100%;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-e4d7b8d8-24ba-48fb-a38a-31062ebe368c] {
    height: 71px;
    padding: 0px 20px 0px 20px;
    width: 100%;
    max-width: 100%;
  }
}

.sd[data-s-c5fcaf54-f1bf-4ed2-957a-d7be6fab3b62] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 32px;
  font-weight: 700;
  height: 66px;
  line-height: 1.4;
  text-align: center;
  width: 50%;
  max-width: 50%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-c5fcaf54-f1bf-4ed2-957a-d7be6fab3b62] {
    font-size: 28px;
    padding: 0px 0px 0px 0px;
    width: 100%;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-c5fcaf54-f1bf-4ed2-957a-d7be6fab3b62] {
    width: 100%;
  }
}

.sd[data-s-a84c71f4-5f9a-4540-b8e0-1a5aa2ec42eb] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-radius: 24px;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 205px;
  justify-content: flex-start;
  margin: 20px 0px 0px 0px;
  width: 856px;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-a84c71f4-5f9a-4540-b8e0-1a5aa2ec42eb] {
    margin: 20px 50px 0px 50px;
    max-width: calc(100% - 100px);
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-a84c71f4-5f9a-4540-b8e0-1a5aa2ec42eb] {
    flex: none;
    height: auto;
    margin: 20px 20px 0px 20px;
    max-width: calc(100% - 40px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-a84c71f4-5f9a-4540-b8e0-1a5aa2ec42eb] {
    flex: none;
    height: auto;
    margin: 20px 20px 0px 20px;
  }
}

.sd[data-s-c0d81553-d28d-4b7f-af26-d454d511e5f6] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 28px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  margin: 30px 0px 0px 0px;
  text-align: center;
  width: 100%;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 890px) {
  .sd[data-s-c0d81553-d28d-4b7f-af26-d454d511e5f6] {
    font-size: 24px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-c0d81553-d28d-4b7f-af26-d454d511e5f6] {
    font-size: 20px;
    margin: 20px 0px 0px 0px;
    width: 100%;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-c0d81553-d28d-4b7f-af26-d454d511e5f6] {
    padding: 0px 20px 0px 20px;
  }
}

.sd[data-s-39b02b18-dd30-46ce-9a64-a2ec752c9849] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 24px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 23px 50px 20px 50px;
  text-align: left;
  width: calc(100% - 100px);
  max-width: calc(100% - 100px);
  justify-content: flex-start;
}

@media screen and (max-width: 890px) {
  .sd[data-s-39b02b18-dd30-46ce-9a64-a2ec752c9849] {
    font-size: 20px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-39b02b18-dd30-46ce-9a64-a2ec752c9849] {
    font-size: 16px;
    margin: 20px 30px 30px 30px;
    width: calc(100% - 60px);
    max-width: calc(100% - 60px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-39b02b18-dd30-46ce-9a64-a2ec752c9849] {
    margin: 23px 20px 20px 20px;
    width: calc(100% - 40px);
    max-width: calc(100% - 40px);
  }
}

.sd[data-s-dab5b755-9c93-4077-be66-d3579b4441c2] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-radius: 24px;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 276px;
  justify-content: flex-start;
  margin: 20px 0px 0px 0px;
  width: 856px;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-dab5b755-9c93-4077-be66-d3579b4441c2] {
    flex: none;
    height: auto;
    margin: 20px 50px 0px 50px;
    max-width: calc(100% - 100px);
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-dab5b755-9c93-4077-be66-d3579b4441c2] {
    flex: none;
    height: auto;
    margin: 20px 20px 0px 20px;
    max-width: calc(100% - 40px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-dab5b755-9c93-4077-be66-d3579b4441c2] {
    flex: none;
    height: auto;
    margin: 20px 20px 0px 20px;
  }
}

.sd[data-s-f317cb35-1c0c-456e-b75f-1612446a4b1f] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 28px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  margin: 30px 0px 0px 0px;
  text-align: center;
  width: 100%;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 890px) {
  .sd[data-s-f317cb35-1c0c-456e-b75f-1612446a4b1f] {
    font-size: 24px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-f317cb35-1c0c-456e-b75f-1612446a4b1f] {
    font-size: 20px;
  }
}

.sd[data-s-573bc186-ca6e-4b51-958b-42adcb51957d] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 24px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 23px 50px 20px 50px;
  text-align: left;
  width: calc(100% - 100px);
  max-width: calc(100% - 100px);
  justify-content: flex-start;
}

@media screen and (max-width: 890px) {
  .sd[data-s-573bc186-ca6e-4b51-958b-42adcb51957d] {
    font-size: 20px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-573bc186-ca6e-4b51-958b-42adcb51957d] {
    font-size: 16px;
    margin: 23px 30px 20px 30px;
    width: calc(100% - 60px);
    max-width: calc(100% - 60px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-573bc186-ca6e-4b51-958b-42adcb51957d] {
    margin: 23px 20px 20px 20px;
    width: calc(100% - 40px);
    max-width: calc(100% - 40px);
  }
}

.sd[data-s-c4683be4-09a9-4b01-8eba-3ad9d37c3116] {
  align-content: center;
  align-items: center;
  background: rgb(70, 156, 234);
  border-radius: 12px;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 59px;
  justify-content: center;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  width: 755px;
  max-width: 100%;
}

.sd[data-s-c4683be4-09a9-4b01-8eba-3ad9d37c3116]:hover {
  background: rgba(70, 156, 234, 0.5);
  flex: none;
}

@media screen and (max-width: 890px) {
  .sd[data-s-c4683be4-09a9-4b01-8eba-3ad9d37c3116] {
    margin: 0px 50px 50px 50px;
    max-width: calc(100% - 100px);
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-c4683be4-09a9-4b01-8eba-3ad9d37c3116] {
    margin: 0px 30px 30px 30px;
    max-width: calc(100% - 60px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-c4683be4-09a9-4b01-8eba-3ad9d37c3116] {
    margin: 0px 20px 30px 20px;
    max-width: calc(100% - 40px);
  }
}

.sd[data-s-2dcc8dbd-7e1c-4798-842f-3f8cdf9cccda] {
  color: rgb(255, 255, 255);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 18px;
  font-weight: 900;
  height: 38px;
  line-height: 1.4;
  text-align: center;
  width: 286px;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-8385d5d5-6988-438c-b112-6bc506c9d24a] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-radius: 24px;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 205px;
  justify-content: flex-start;
  margin: 20px 0px 0px 0px;
  width: 856px;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-8385d5d5-6988-438c-b112-6bc506c9d24a] {
    flex: none;
    height: auto;
    margin: 20px 50px 0px 50px;
    max-width: calc(100% - 100px);
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-8385d5d5-6988-438c-b112-6bc506c9d24a] {
    flex: none;
    height: auto;
    margin: 20px 20px 0px 20px;
    max-width: calc(100% - 40px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-8385d5d5-6988-438c-b112-6bc506c9d24a] {
    flex: none;
    height: auto;
    margin: 20px 20px 0px 20px;
  }
}

.sd[data-s-a307baee-0f22-4fe0-839d-f7eeb029723a] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 28px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  margin: 30px 0px 0px 0px;
  text-align: center;
  width: 100%;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 890px) {
  .sd[data-s-a307baee-0f22-4fe0-839d-f7eeb029723a] {
    font-size: 24px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-a307baee-0f22-4fe0-839d-f7eeb029723a] {
    font-size: 20px;
    margin: 20px 0px 0px 0px;
    width: 100%;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-a307baee-0f22-4fe0-839d-f7eeb029723a] {
    padding: 0px 0px 0px 14px;
  }
}

.sd[data-s-fa8b5369-f4d6-44e9-a9e1-75cd2c6f153d] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 24px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 23px 50px 20px 50px;
  text-align: left;
  width: calc(100% - 100px);
  max-width: calc(100% - 100px);
  justify-content: flex-start;
}

@media screen and (max-width: 890px) {
  .sd[data-s-fa8b5369-f4d6-44e9-a9e1-75cd2c6f153d] {
    font-size: 20px;
    margin: 23px 50px 30px 50px;
    width: calc(100% - 100px);
    max-width: calc(100% - 100px);
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-fa8b5369-f4d6-44e9-a9e1-75cd2c6f153d] {
    font-size: 16px;
    margin: 23px 30px 30px 30px;
    width: calc(100% - 60px);
    max-width: calc(100% - 60px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-fa8b5369-f4d6-44e9-a9e1-75cd2c6f153d] {
    flex: none;
    height: 75px;
    margin: 23px 20px 20px 20px;
    width: calc(100% - 40px);
    max-width: calc(100% - 40px);
  }
}

.sd[data-s-57431973-d2c3-4459-8fe0-f2d4de0d45ef] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-radius: 24px;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 205px;
  justify-content: flex-start;
  margin: 20px 0px 0px 0px;
  width: 856px;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-57431973-d2c3-4459-8fe0-f2d4de0d45ef] {
    margin: 20px 50px 0px 50px;
    max-width: calc(100% - 100px);
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-57431973-d2c3-4459-8fe0-f2d4de0d45ef] {
    flex: none;
    height: auto;
    margin: 20px 20px 0px 20px;
    max-width: calc(100% - 40px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-57431973-d2c3-4459-8fe0-f2d4de0d45ef] {
    flex: none;
    height: auto;
    margin: 20px 20px 0px 20px;
  }
}

.sd[data-s-2735d475-cea0-44c9-9490-0e22a5a3f015] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 28px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  margin: 30px 0px 0px 0px;
  text-align: center;
  width: 100%;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 890px) {
  .sd[data-s-2735d475-cea0-44c9-9490-0e22a5a3f015] {
    font-size: 24px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-2735d475-cea0-44c9-9490-0e22a5a3f015] {
    font-size: 20px;
    margin: 20px 0px 0px 0px;
    width: 100%;
    max-width: 100%;
  }
}

.sd[data-s-8cbcc6d1-4662-4640-ab28-ac0f16d14a10] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 24px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 23px 50px 20px 50px;
  text-align: left;
  width: calc(100% - 100px);
  max-width: calc(100% - 100px);
  justify-content: flex-start;
}

@media screen and (max-width: 890px) {
  .sd[data-s-8cbcc6d1-4662-4640-ab28-ac0f16d14a10] {
    font-size: 20px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-8cbcc6d1-4662-4640-ab28-ac0f16d14a10] {
    font-size: 16px;
    margin: 23px 30px 30px 30px;
    width: calc(100% - 60px);
    max-width: calc(100% - 60px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-8cbcc6d1-4662-4640-ab28-ac0f16d14a10] {
    margin: 23px 20px 20px 20px;
    width: calc(100% - 40px);
    max-width: calc(100% - 40px);
  }
}

.sd[data-s-380b5657-6339-49fa-9da5-5aa19559eeee] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-radius: 24px;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 259px;
  justify-content: flex-start;
  margin: 20px 0px 0px 0px;
  width: 856px;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-380b5657-6339-49fa-9da5-5aa19559eeee] {
    flex: none;
    height: 236px;
    margin: 20px 50px 0px 50px;
    max-width: calc(100% - 100px);
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-380b5657-6339-49fa-9da5-5aa19559eeee] {
    flex: none;
    height: auto;
    margin: 20px 20px 0px 20px;
    max-width: calc(100% - 40px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-380b5657-6339-49fa-9da5-5aa19559eeee] {
    flex: none;
    height: auto;
    margin: 20px 20px 0px 20px;
  }
}

.sd[data-s-54d6640b-da4e-4658-8567-3290500dc7b4] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 28px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  margin: 30px 0px 0px 0px;
  text-align: center;
  width: 100%;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 890px) {
  .sd[data-s-54d6640b-da4e-4658-8567-3290500dc7b4] {
    font-size: 24px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-54d6640b-da4e-4658-8567-3290500dc7b4] {
    font-size: 20px;
    padding: 0px 30px 0px 30px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-54d6640b-da4e-4658-8567-3290500dc7b4] {
    padding: 0px 20px 0px 20px;
  }
}

.sd[data-s-69a58017-2159-4b8d-81d5-6de1b5d3885a] {
  color: #1575ac;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 24px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 23px 50px 20px 50px;
  text-align: left;
  width: calc(100% - 100px);
  max-width: calc(100% - 100px);
  justify-content: flex-start;
}

@media screen and (max-width: 890px) {
  .sd[data-s-69a58017-2159-4b8d-81d5-6de1b5d3885a] {
    font-size: 20px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-69a58017-2159-4b8d-81d5-6de1b5d3885a] {
    font-size: 16px;
    margin: 23px 30px 30px 30px;
    width: calc(100% - 60px);
    max-width: calc(100% - 60px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-69a58017-2159-4b8d-81d5-6de1b5d3885a] {
    margin: 23px 20px 20px 20px;
    width: calc(100% - 40px);
    max-width: calc(100% - 40px);
  }
}

.sd[data-s-a2409aea-1fbf-493d-b04e-d1d71105d31c] {
  align-content: center;
  align-items: center;
  background: #eff0f4;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  border-left: 0px solid rgba(0, 0, 0, 0.2);
  border-right: 0px solid rgba(0, 0, 0, 0.2);
  border-top: 0px solid rgba(0, 0, 0, 0.2);
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 100%;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-a2409aea-1fbf-493d-b04e-d1d71105d31c] {
    margin: 0px 0px 0px 0px;
    width: 100%;
    max-width: 100%;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-a2409aea-1fbf-493d-b04e-d1d71105d31c] {
    justify-content: flex-start;
    padding: 0px 0px 0px 26px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-a2409aea-1fbf-493d-b04e-d1d71105d31c] {
    padding: 0px 0px 0px 20px;
  }
}

.sd[data-s-db82c014-5182-4a4f-8588-129dc4cd44b6] {
  align-content: center;
  align-items: center;
  background: #eff0f4;
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 15px;
  justify-content: center;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  width: 60px;
  max-width: 100%;
}

.sd[data-s-99f9c57c-eb9a-4a37-a50e-b46bfd160be5] {
  align-content: center;
  align-items: center;
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: auto;
  justify-content: center;
  margin: 0px 0px 0px 0px;
  padding: 0px;
  width: 100%;
  max-width: 100%;
}

.sd[data-s-ff8df96b-02d9-4e64-a65b-479010cabaf2] {
  color: #12575f;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 12px;
  font-weight: 400;
  height: 12px;
  line-height: 1.4;
  padding: 0px 0px 0px 0px;
  text-align: right;
  width: 56px;
  max-width: 100%;
  justify-content: flex-end;
}

.sd[data-s-ff8df96b-02d9-4e64-a65b-479010cabaf2]:hover {
  text-decoration: underline;
}

.sd[data-s-01c73eec-c70c-4c15-a877-06ec9929bddd] {
  color: #12575f;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 12px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  padding: 0px 0px 0px 0px;
  text-align: center;
  width: 14px;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-dae051f4-0b9d-440b-9b6e-897704bac6ac] {
  align-content: center;
  align-items: center;
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: auto;
  justify-content: center;
  padding: 0px;
  width: 1087px;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-dae051f4-0b9d-440b-9b6e-897704bac6ac] {
    flex: none;
    width: 685px;
    max-width: 100%;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-dae051f4-0b9d-440b-9b6e-897704bac6ac] {
    width: 308px;
    max-width: 100%;
  }
}

.sd[data-s-7d64db40-70e7-4138-b4e3-dfe1c379246f] {
  color: #12575f;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 12px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  text-align: left;
  width: 100%;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-01d94776-8760-4a2b-b011-741472376c3c] {
  align-content: flex-start;
  align-items: flex-start;
  background: #eff0f4;
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: auto;
  justify-content: center;
  margin: 0px 0px 0px 0px;
  padding: 20px 0px 50px 0px;
  width: 100%;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-01d94776-8760-4a2b-b011-741472376c3c] {
    height: 799px;
    margin: 0px 0px 0px 0px;
    width: 100%;
    max-width: 100%;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-01d94776-8760-4a2b-b011-741472376c3c] {
    flex: none;
    height: auto;
    margin: 0px 0px 0px 0px;
    padding: 20px 0px 56px 0px;
    width: 100%;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-01d94776-8760-4a2b-b011-741472376c3c] {
    justify-content: flex-start;
    padding: 20px 0px 56px 0px;
  }
}

.sd[data-s-702d2656-ce2a-4016-a62a-a08c25699ab6] {
  align-content: flex-start;
  align-items: flex-start;
  background: rgba(0, 0, 0, 0.0);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: auto;
  justify-content: space-between;
  width: 1160px;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-702d2656-ce2a-4016-a62a-a08c25699ab6] {
    align-content: center;
    align-items: center;
    flex: none;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    width: 744px;
    max-width: 100%;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-702d2656-ce2a-4016-a62a-a08c25699ab6] {
    flex: none;
    flex-direction: column;
    flex-wrap: nowrap;
    height: auto;
    width: 90%;
    max-width: 90%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-702d2656-ce2a-4016-a62a-a08c25699ab6] {
    flex: none;
    width: 100%;
    max-width: 100%;
  }
}

.sd[data-s-26e0f865-66e4-42e0-a697-19f67e96c321] {
  align-content: flex-start;
  align-items: flex-start;
  background: rgba(0, 0, 0, 0.0);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: auto;
  justify-content: space-between;
  width: 100%;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-26e0f865-66e4-42e0-a697-19f67e96c321] {
    flex: none;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-26e0f865-66e4-42e0-a697-19f67e96c321] {
    flex: none;
    flex-direction: column;
    flex-wrap: nowrap;
    height: auto;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-26e0f865-66e4-42e0-a697-19f67e96c321] {
    flex: none;
    padding: 0px 0px 0px 0px;
    width: 80%;
    max-width: 80%;
  }
}

.sd[data-s-3506a5a4-054b-42c3-96b6-601f26af3e1b] {
  align-content: flex-start;
  align-items: flex-start;
  background: rgba(0, 0, 0, 0.0);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: auto;
  justify-content: flex-start;
  margin: 0px 0px 0px 0px;
  width: 167.69px;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-3506a5a4-054b-42c3-96b6-601f26af3e1b] {
    flex: none;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 112px;
    max-width: 100%;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-3506a5a4-054b-42c3-96b6-601f26af3e1b] {
    flex: none;
    height: auto;
    margin: 0px 0px 0px 0px;
    width: auto;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-3506a5a4-054b-42c3-96b6-601f26af3e1b] {
    flex: none;
    margin: 0px 0px 0px 0px;
    width: auto;
  }
}

.sd[data-s-c4751fc5-593e-465e-9098-2fa78f4b3e14] {
  align-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.0);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 26px;
  justify-content: center;
  width: auto;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-c4751fc5-593e-465e-9098-2fa78f4b3e14] {
    flex: none;
    height: 21px;
    width: 136px;
    max-width: 100%;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-c4751fc5-593e-465e-9098-2fa78f4b3e14] {
    height: 39px;
    width: 175px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-c4751fc5-593e-465e-9098-2fa78f4b3e14] {
    height: 42px;
    width: 176px;
    max-width: 100%;
  }
}

.sd[data-s-e7107517-7111-4944-bd7d-087fd1fcede6] {
  flex: none;
  height: auto;
  width: 26px;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-e7107517-7111-4944-bd7d-087fd1fcede6] {
    flex: none;
    height: auto;
    width: 20px;
    max-width: 100%;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-e7107517-7111-4944-bd7d-087fd1fcede6] {
    flex: none;
    height: auto;
    width: 29px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-e7107517-7111-4944-bd7d-087fd1fcede6] {
    flex: none;
    height: auto;
    width: 34px;
    max-width: 100%;
  }
}

.sd[data-s-26ddc457-c2be-4bf5-b018-624133fbeb2f] {
  flex: none;
  height: auto;
  margin: 0px 0px 0px 10px;
  width: 127px;
  max-width: calc(100% - 10px);
}

@media screen and (max-width: 890px) {
  .sd[data-s-26ddc457-c2be-4bf5-b018-624133fbeb2f] {
    flex: none;
    margin: 0px 0px 0px 5px;
    width: calc(76% - 5px);
    max-width: calc(76% - 5px);
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-26ddc457-c2be-4bf5-b018-624133fbeb2f] {
    flex: none;
    height: auto;
    margin: 0px 0px 0px 5px;
    width: 135px;
    max-width: calc(100% - 5px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-26ddc457-c2be-4bf5-b018-624133fbeb2f] {
    flex: none;
    height: auto;
    margin: 0px 0px 0px 10px;
    width: 134px;
    max-width: calc(100% - 10px);
  }
}

.sd[data-s-ef1fe662-9381-460b-9e87-268a5f2642e5] {
  align-content: flex-start;
  align-items: flex-start;
  background: rgba(0, 0, 0, 0.0);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 25px;
  justify-content: center;
  margin: 16px 0px 0px 0px;
  width: auto;
  max-width: 100%;
}

.sd[data-s-400e7105-1faa-461d-aa07-94ec1c2fb259] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 500;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 890px) {
  .sd[data-s-400e7105-1faa-461d-aa07-94ec1c2fb259] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-400e7105-1faa-461d-aa07-94ec1c2fb259] {
    font-size: 14px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-400e7105-1faa-461d-aa07-94ec1c2fb259] {
    font-size: 14px;
  }
}

.sd[data-s-1d502c97-7d64-4451-b323-db137e8423fb] {
  align-content: flex-start;
  align-items: flex-start;
  background: rgba(0, 0, 0, 0.0);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: auto;
  justify-content: center;
  margin: 0px 0px 0px 0px;
  width: auto;
  max-width: 100%;
}

.sd[data-s-9b1879de-2ef1-4212-b43e-36cda808bf7e] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 10px;
  font-weight: 500;
  height: auto;
  line-height: 2;
  text-align: left;
  width: auto;
  max-width: 100%;
  justify-content: flex-start;
}

@media screen and (max-width: 890px) {
  .sd[data-s-9b1879de-2ef1-4212-b43e-36cda808bf7e] {
    flex: none;
    text-align: left;
    width: 163px;
    max-width: 100%;
    justify-content: flex-start;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-9b1879de-2ef1-4212-b43e-36cda808bf7e] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-9b1879de-2ef1-4212-b43e-36cda808bf7e] {
    font-size: 12px;
  }
}

.sd[data-s-b8a18f92-6c0d-4095-a7c9-a75fb75364bb] {
  align-content: flex-start;
  align-items: flex-start;
  background: #eff0f4;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: auto;
  justify-content: flex-start;
  width: 135px;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-b8a18f92-6c0d-4095-a7c9-a75fb75364bb] {
    flex: none;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 116px;
    max-width: 100%;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-b8a18f92-6c0d-4095-a7c9-a75fb75364bb] {
    flex: none;
    margin: 20px 0px 0px 0px;
    width: auto;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-b8a18f92-6c0d-4095-a7c9-a75fb75364bb] {
    flex: none;
    margin: 15px 0px 0px 0px;
    width: auto;
    max-width: 100%;
  }
}

.sd[data-s-d69d5643-19db-4824-b602-0f21501c3f4d] {
  color: rgba(18, 87, 95, 0.5);
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 700;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 890px) {
  .sd[data-s-d69d5643-19db-4824-b602-0f21501c3f4d] {
    font-size: 12px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-d69d5643-19db-4824-b602-0f21501c3f4d] {
    font-size: 14px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-d69d5643-19db-4824-b602-0f21501c3f4d] {
    font-size: 14px;
  }
}

.sd[data-s-77d7d138-2ae6-4c92-a0be-bd0f9de25bce] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 10px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-77d7d138-2ae6-4c92-a0be-bd0f9de25bce]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-77d7d138-2ae6-4c92-a0be-bd0f9de25bce] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-77d7d138-2ae6-4c92-a0be-bd0f9de25bce] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-77d7d138-2ae6-4c92-a0be-bd0f9de25bce] {
    font-size: 14px;
  }
}

.sd[data-s-a919a4e3-304e-4d7c-9f52-189129dab214] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-a919a4e3-304e-4d7c-9f52-189129dab214]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-a919a4e3-304e-4d7c-9f52-189129dab214] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-a919a4e3-304e-4d7c-9f52-189129dab214] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-a919a4e3-304e-4d7c-9f52-189129dab214] {
    font-size: 14px;
  }
}

.sd[data-s-eac75047-a9ff-49b3-b340-36b538d48753] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-eac75047-a9ff-49b3-b340-36b538d48753]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-eac75047-a9ff-49b3-b340-36b538d48753] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-eac75047-a9ff-49b3-b340-36b538d48753] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-eac75047-a9ff-49b3-b340-36b538d48753] {
    font-size: 14px;
  }
}

.sd[data-s-d549f66c-3b05-4d7b-bf8d-f38482735911] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-9d3fcd6a-c635-43a3-8bf9-18ee8e5befe9] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-9d3fcd6a-c635-43a3-8bf9-18ee8e5befe9]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-9d3fcd6a-c635-43a3-8bf9-18ee8e5befe9] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-9d3fcd6a-c635-43a3-8bf9-18ee8e5befe9] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-9d3fcd6a-c635-43a3-8bf9-18ee8e5befe9] {
    font-size: 14px;
  }
}

.sd[data-s-aaee37a6-ed41-49ed-8112-60a9e5264950] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 5px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

@media screen and (max-width: 320px) {
  .sd[data-s-aaee37a6-ed41-49ed-8112-60a9e5264950] {
    margin: 5px 0px 0px 0px;
  }
}

.sd[data-s-9a8a4839-a141-4747-8f65-81fda9692914] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-2a7bc8cf-5d41-4aa4-b409-1b78f851a8c0] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-2a7bc8cf-5d41-4aa4-b409-1b78f851a8c0]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-2a7bc8cf-5d41-4aa4-b409-1b78f851a8c0] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-2a7bc8cf-5d41-4aa4-b409-1b78f851a8c0] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-2a7bc8cf-5d41-4aa4-b409-1b78f851a8c0] {
    font-size: 14px;
  }
}

.sd[data-s-0dab807e-238f-466c-8587-d615c96af5ee] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 5px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

.sd[data-s-d6c30ef7-acd6-4ab0-8cde-3772e549b90c] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-e6418917-9f78-487f-bab2-6ac999c7372f] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-e6418917-9f78-487f-bab2-6ac999c7372f]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-e6418917-9f78-487f-bab2-6ac999c7372f] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-e6418917-9f78-487f-bab2-6ac999c7372f] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-e6418917-9f78-487f-bab2-6ac999c7372f] {
    font-size: 14px;
  }
}

.sd[data-s-171a5060-39a0-4f4f-82fd-805710884254] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 5px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

.sd[data-s-cfcf2284-5af2-4184-8def-32a9bd4883d3] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-367b6039-2753-4fec-9b26-a33e5c95feab] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-367b6039-2753-4fec-9b26-a33e5c95feab]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-367b6039-2753-4fec-9b26-a33e5c95feab] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-367b6039-2753-4fec-9b26-a33e5c95feab] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-367b6039-2753-4fec-9b26-a33e5c95feab] {
    font-size: 14px;
  }
}

.sd[data-s-6a231cb8-124b-4d5e-81ea-2fd99d9498f4] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 5px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

.sd[data-s-c5461727-981c-4db9-9663-025e6a606400] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-9a439702-d4ca-4b0d-9bd2-0af0c4847ea3] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-9a439702-d4ca-4b0d-9bd2-0af0c4847ea3]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-9a439702-d4ca-4b0d-9bd2-0af0c4847ea3] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-9a439702-d4ca-4b0d-9bd2-0af0c4847ea3] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-9a439702-d4ca-4b0d-9bd2-0af0c4847ea3] {
    font-size: 14px;
  }
}

.sd[data-s-301fef2c-ebcb-4dbb-9cf3-1ec1da6fd2cf] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 5px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

.sd[data-s-e3e077e2-fb53-48c8-8fd8-22b1d535e2ef] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-54df9557-1038-40a5-b739-bf297963b48d] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-54df9557-1038-40a5-b739-bf297963b48d]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-54df9557-1038-40a5-b739-bf297963b48d] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-54df9557-1038-40a5-b739-bf297963b48d] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-54df9557-1038-40a5-b739-bf297963b48d] {
    font-size: 14px;
  }
}

.sd[data-s-0b6ab71f-8c97-409a-ab75-663cc4fb2104] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 5px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

.sd[data-s-74294618-2b69-4150-8a37-090ca55b96e5] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-fb11051a-bf90-4cce-90c5-4b56b0acf106] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-fb11051a-bf90-4cce-90c5-4b56b0acf106]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-fb11051a-bf90-4cce-90c5-4b56b0acf106] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-fb11051a-bf90-4cce-90c5-4b56b0acf106] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-fb11051a-bf90-4cce-90c5-4b56b0acf106] {
    font-size: 14px;
  }
}

.sd[data-s-d07c37fb-4e50-4c87-8c23-d7e0683a9d4f] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 5px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

.sd[data-s-7f7ef055-5804-42c5-8b77-550a929db554] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-b5e11c2d-e2a6-4b66-b358-4e7c89eb4e1d] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-b5e11c2d-e2a6-4b66-b358-4e7c89eb4e1d]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-b5e11c2d-e2a6-4b66-b358-4e7c89eb4e1d] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-b5e11c2d-e2a6-4b66-b358-4e7c89eb4e1d] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-b5e11c2d-e2a6-4b66-b358-4e7c89eb4e1d] {
    font-size: 14px;
  }
}

.sd[data-s-6e168c55-f3de-4f7b-849d-03bebd2e5bdd] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 5px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

.sd[data-s-b7a4ada8-4d69-4aeb-8841-a0e45728dbfe] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-12a73126-d96d-40e2-8ba2-dc2a5ed9df94] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: left;
  width: auto;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-12a73126-d96d-40e2-8ba2-dc2a5ed9df94]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-12a73126-d96d-40e2-8ba2-dc2a5ed9df94] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-12a73126-d96d-40e2-8ba2-dc2a5ed9df94] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-12a73126-d96d-40e2-8ba2-dc2a5ed9df94] {
    font-size: 14px;
  }
}

.sd[data-s-9dffc2dd-ccbe-49fc-b11b-58b3e90dc958] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 19px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

@media screen and (max-width: 320px) {
  .sd[data-s-9dffc2dd-ccbe-49fc-b11b-58b3e90dc958] {
    margin: 25px 0px 0px 0px;
    max-width: 100%;
  }
}

.sd[data-s-154f7988-c8af-4e71-86a1-73fe1b9e76d5] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-82ddf2b3-c7a0-43d6-ac2b-e1113aea2a9c] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-82ddf2b3-c7a0-43d6-ac2b-e1113aea2a9c]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-82ddf2b3-c7a0-43d6-ac2b-e1113aea2a9c] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-82ddf2b3-c7a0-43d6-ac2b-e1113aea2a9c] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-82ddf2b3-c7a0-43d6-ac2b-e1113aea2a9c] {
    font-size: 14px;
  }
}

.sd[data-s-a12c315a-5a3a-4919-97ff-d7faf5b23d05] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 5px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

.sd[data-s-4b6a9675-fc9e-4606-bea3-7e0cca78c241] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 500;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-d8274268-3827-48e7-8342-855c1eabecde] {
  align-content: flex-start;
  align-items: flex-start;
  background: #eff0f4;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: auto;
  justify-content: flex-start;
  width: 135px;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-d8274268-3827-48e7-8342-855c1eabecde] {
    flex: none;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 112px;
    max-width: 100%;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-d8274268-3827-48e7-8342-855c1eabecde] {
    flex: none;
    width: auto;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-d8274268-3827-48e7-8342-855c1eabecde] {
    flex: none;
    width: auto;
  }
}

.sd[data-s-547dc9b9-790c-4270-af45-bc9e18712972] {
  color: rgba(18, 87, 95, 0.5);
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 700;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 890px) {
  .sd[data-s-547dc9b9-790c-4270-af45-bc9e18712972] {
    font-size: 12px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-547dc9b9-790c-4270-af45-bc9e18712972] {
    font-size: 14px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-547dc9b9-790c-4270-af45-bc9e18712972] {
    font-size: 14px;
  }
}

.sd[data-s-6de62e7f-2455-4595-9c24-4177d4329c70] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 10px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-6de62e7f-2455-4595-9c24-4177d4329c70]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-6de62e7f-2455-4595-9c24-4177d4329c70] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-6de62e7f-2455-4595-9c24-4177d4329c70] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-6de62e7f-2455-4595-9c24-4177d4329c70] {
    font-size: 14px;
  }
}

.sd[data-s-34d715ab-e57f-4e4c-9b60-7ab61fb133af] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-34d715ab-e57f-4e4c-9b60-7ab61fb133af]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-34d715ab-e57f-4e4c-9b60-7ab61fb133af] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-34d715ab-e57f-4e4c-9b60-7ab61fb133af] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-34d715ab-e57f-4e4c-9b60-7ab61fb133af] {
    font-size: 14px;
  }
}

.sd[data-s-c14426ba-26a1-461b-9881-eda0984431f2] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-c14426ba-26a1-461b-9881-eda0984431f2]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-c14426ba-26a1-461b-9881-eda0984431f2] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-c14426ba-26a1-461b-9881-eda0984431f2] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-c14426ba-26a1-461b-9881-eda0984431f2] {
    font-size: 14px;
  }
}

.sd[data-s-306faae5-7888-46b3-8d44-0f0be88f9b76] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-a8d87e7e-d12c-4138-b58a-0f62d80ddd94] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-a8d87e7e-d12c-4138-b58a-0f62d80ddd94]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-a8d87e7e-d12c-4138-b58a-0f62d80ddd94] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-a8d87e7e-d12c-4138-b58a-0f62d80ddd94] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-a8d87e7e-d12c-4138-b58a-0f62d80ddd94] {
    font-size: 14px;
  }
}

.sd[data-s-f57d9728-1b66-4293-85a2-abf0c5df8e0f] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-43bd1dfa-5aea-4c41-b9b0-2c187be66bb2] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-43bd1dfa-5aea-4c41-b9b0-2c187be66bb2]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-43bd1dfa-5aea-4c41-b9b0-2c187be66bb2] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-43bd1dfa-5aea-4c41-b9b0-2c187be66bb2] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-43bd1dfa-5aea-4c41-b9b0-2c187be66bb2] {
    font-size: 14px;
  }
}

.sd[data-s-de810899-db4e-4bf9-9f9e-32d75df72f1e] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-6cfc89ea-a625-4194-b8fd-9aba322ec481] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: left;
  width: auto;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-6cfc89ea-a625-4194-b8fd-9aba322ec481]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-6cfc89ea-a625-4194-b8fd-9aba322ec481] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-6cfc89ea-a625-4194-b8fd-9aba322ec481] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-6cfc89ea-a625-4194-b8fd-9aba322ec481] {
    font-size: 14px;
  }
}

.sd[data-s-6a042098-c3ee-4680-abc3-3cc792f91b92] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 890px) {
  .sd[data-s-6a042098-c3ee-4680-abc3-3cc792f91b92] {
    justify-content: flex-start;
  }
}

.sd[data-s-ab3a9765-bb8f-415d-b3ae-cdc753e9f78d] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: left;
  width: auto;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-ab3a9765-bb8f-415d-b3ae-cdc753e9f78d]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-ab3a9765-bb8f-415d-b3ae-cdc753e9f78d] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-ab3a9765-bb8f-415d-b3ae-cdc753e9f78d] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-ab3a9765-bb8f-415d-b3ae-cdc753e9f78d] {
    font-size: 14px;
  }
}

.sd[data-s-4875f60a-bb4a-4f9a-8732-5cc531bcfd6e] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 890px) {
  .sd[data-s-4875f60a-bb4a-4f9a-8732-5cc531bcfd6e] {
    justify-content: flex-start;
  }
}

.sd[data-s-016d8167-faf3-48da-8085-24b131c5c907] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-016d8167-faf3-48da-8085-24b131c5c907]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-016d8167-faf3-48da-8085-24b131c5c907] {
    font-size: 10px;
    text-align: left;
    justify-content: flex-start;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-016d8167-faf3-48da-8085-24b131c5c907] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-016d8167-faf3-48da-8085-24b131c5c907] {
    font-size: 14px;
  }
}

.sd[data-s-17926301-9b56-455e-bca0-8a65b312226d] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 500;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-686c52c2-13ee-4a08-8740-13780b0a6074] {
  align-content: flex-start;
  align-items: flex-start;
  background: #eff0f4;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: auto;
  justify-content: flex-start;
  width: 135px;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-686c52c2-13ee-4a08-8740-13780b0a6074] {
    flex: none;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 112px;
    max-width: 100%;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-686c52c2-13ee-4a08-8740-13780b0a6074] {
    flex: none;
    width: auto;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-686c52c2-13ee-4a08-8740-13780b0a6074] {
    flex: none;
    width: auto;
  }
}

.sd[data-s-2f6b4f06-e2b5-456c-88a6-50171b930e08] {
  color: rgba(18, 87, 95, 0.5);
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 700;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 890px) {
  .sd[data-s-2f6b4f06-e2b5-456c-88a6-50171b930e08] {
    font-size: 12px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-2f6b4f06-e2b5-456c-88a6-50171b930e08] {
    font-size: 14px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-2f6b4f06-e2b5-456c-88a6-50171b930e08] {
    font-size: 14px;
  }
}

.sd[data-s-3579e4ad-c141-4433-81bb-522f024a5d5e] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 10px 0px 0px 0px;
  text-align: left;
  width: auto;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-3579e4ad-c141-4433-81bb-522f024a5d5e]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-3579e4ad-c141-4433-81bb-522f024a5d5e] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-3579e4ad-c141-4433-81bb-522f024a5d5e] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-3579e4ad-c141-4433-81bb-522f024a5d5e] {
    font-size: 14px;
  }
}

.sd[data-s-2b49d414-4b6f-4bf3-975b-25cf7d65b7fa] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-2b49d414-4b6f-4bf3-975b-25cf7d65b7fa]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-2b49d414-4b6f-4bf3-975b-25cf7d65b7fa] {
    font-size: 10px;
    text-align: left;
    justify-content: flex-start;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-2b49d414-4b6f-4bf3-975b-25cf7d65b7fa] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-2b49d414-4b6f-4bf3-975b-25cf7d65b7fa] {
    font-size: 14px;
  }
}

.sd[data-s-e7f48c5b-49e1-468d-9ab8-561bdf4d0221] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-e7f48c5b-49e1-468d-9ab8-561bdf4d0221]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-e7f48c5b-49e1-468d-9ab8-561bdf4d0221] {
    font-size: 10px;
    text-align: left;
    justify-content: flex-start;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-e7f48c5b-49e1-468d-9ab8-561bdf4d0221] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-e7f48c5b-49e1-468d-9ab8-561bdf4d0221] {
    font-size: 14px;
  }
}

.sd[data-s-f98812c7-1f90-448f-b248-11b10e5bb2f0] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-c845898c-bfbf-4296-9e3f-0d4040c6c81b] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-c845898c-bfbf-4296-9e3f-0d4040c6c81b]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-c845898c-bfbf-4296-9e3f-0d4040c6c81b] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-c845898c-bfbf-4296-9e3f-0d4040c6c81b] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-c845898c-bfbf-4296-9e3f-0d4040c6c81b] {
    font-size: 14px;
  }
}

.sd[data-s-3edc8b12-da48-4c83-ad6a-9b7a24e979bd] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-7caf8895-eed0-42f0-a4d3-ed9c68d0c4b2] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: left;
  width: auto;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-7caf8895-eed0-42f0-a4d3-ed9c68d0c4b2]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-7caf8895-eed0-42f0-a4d3-ed9c68d0c4b2] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-7caf8895-eed0-42f0-a4d3-ed9c68d0c4b2] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-7caf8895-eed0-42f0-a4d3-ed9c68d0c4b2] {
    font-size: 14px;
  }
}

.sd[data-s-b96ace45-afd5-414f-94ac-3367caee9eaf] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-cd118f43-fc6c-4865-b47e-a50b278bdaeb] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-cd118f43-fc6c-4865-b47e-a50b278bdaeb]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-cd118f43-fc6c-4865-b47e-a50b278bdaeb] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-cd118f43-fc6c-4865-b47e-a50b278bdaeb] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-cd118f43-fc6c-4865-b47e-a50b278bdaeb] {
    font-size: 14px;
  }
}

.sd[data-s-1fed00d4-7c9f-4a0b-a602-ae3b54bdf5ed] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-e191c0df-89a9-4b28-a87c-996f64167e26] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: left;
  width: auto;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-e191c0df-89a9-4b28-a87c-996f64167e26]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-e191c0df-89a9-4b28-a87c-996f64167e26] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-e191c0df-89a9-4b28-a87c-996f64167e26] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-e191c0df-89a9-4b28-a87c-996f64167e26] {
    font-size: 14px;
  }
}

.sd[data-s-79d72086-4a10-4323-88eb-c3a71905126b] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-20e2c3af-aafe-40ab-abc7-6a7e276a47d5] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-20e2c3af-aafe-40ab-abc7-6a7e276a47d5]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-20e2c3af-aafe-40ab-abc7-6a7e276a47d5] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-20e2c3af-aafe-40ab-abc7-6a7e276a47d5] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-20e2c3af-aafe-40ab-abc7-6a7e276a47d5] {
    font-size: 14px;
  }
}

.sd[data-s-341f83d0-4723-46d3-aa46-c6353bd84a04] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-4e461010-2966-4ccf-9f2a-073e5f40784e] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-4e461010-2966-4ccf-9f2a-073e5f40784e]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-4e461010-2966-4ccf-9f2a-073e5f40784e] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-4e461010-2966-4ccf-9f2a-073e5f40784e] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-4e461010-2966-4ccf-9f2a-073e5f40784e] {
    font-size: 14px;
  }
}

.sd[data-s-e6ffceca-7ac7-4d13-8349-7a9fe10b860c] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 500;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-2bd6c1c5-4c50-4f3f-a1da-d027eabc3abb] {
  align-content: flex-start;
  align-items: flex-start;
  background: #eff0f4;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: auto;
  justify-content: flex-end;
  width: 135px;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-2bd6c1c5-4c50-4f3f-a1da-d027eabc3abb] {
    flex: none;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    width: 112px;
    max-width: 100%;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-2bd6c1c5-4c50-4f3f-a1da-d027eabc3abb] {
    flex: none;
    width: auto;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-2bd6c1c5-4c50-4f3f-a1da-d027eabc3abb] {
    flex: none;
    width: auto;
  }
}

.sd[data-s-56902356-6584-4d00-88cc-1c61be0f50a4] {
  color: rgba(18, 87, 95, 0.5);
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 700;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 890px) {
  .sd[data-s-56902356-6584-4d00-88cc-1c61be0f50a4] {
    font-size: 12px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-56902356-6584-4d00-88cc-1c61be0f50a4] {
    font-size: 14px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-56902356-6584-4d00-88cc-1c61be0f50a4] {
    font-size: 14px;
  }
}

.sd[data-s-2d5e1e16-c79e-4d5b-9a68-4edc6e2bcdf1] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 10px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-2d5e1e16-c79e-4d5b-9a68-4edc6e2bcdf1]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-2d5e1e16-c79e-4d5b-9a68-4edc6e2bcdf1] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-2d5e1e16-c79e-4d5b-9a68-4edc6e2bcdf1] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-2d5e1e16-c79e-4d5b-9a68-4edc6e2bcdf1] {
    font-size: 14px;
  }
}

.sd[data-s-d3740514-f0f3-4666-a4fb-da911ee9f2f7] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-d3740514-f0f3-4666-a4fb-da911ee9f2f7]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-d3740514-f0f3-4666-a4fb-da911ee9f2f7] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-d3740514-f0f3-4666-a4fb-da911ee9f2f7] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-d3740514-f0f3-4666-a4fb-da911ee9f2f7] {
    font-size: 14px;
  }
}

.sd[data-s-d2bc77d1-249e-4396-bdd2-4676b88d8ae1] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-d2bc77d1-249e-4396-bdd2-4676b88d8ae1]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-d2bc77d1-249e-4396-bdd2-4676b88d8ae1] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-d2bc77d1-249e-4396-bdd2-4676b88d8ae1] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-d2bc77d1-249e-4396-bdd2-4676b88d8ae1] {
    font-size: 14px;
  }
}

.sd[data-s-ee3f05f9-4218-4ad0-9103-e76110557f48] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-74c6c9ed-0f9a-44ce-aaf3-290057972f72] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-74c6c9ed-0f9a-44ce-aaf3-290057972f72]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-74c6c9ed-0f9a-44ce-aaf3-290057972f72] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-74c6c9ed-0f9a-44ce-aaf3-290057972f72] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-74c6c9ed-0f9a-44ce-aaf3-290057972f72] {
    font-size: 14px;
  }
}

.sd[data-s-9f93c541-23cd-4672-a06f-ec4f573432f1] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-8057a730-e982-4a11-9ad6-7edda6c6cab4] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-8057a730-e982-4a11-9ad6-7edda6c6cab4]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-8057a730-e982-4a11-9ad6-7edda6c6cab4] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-8057a730-e982-4a11-9ad6-7edda6c6cab4] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-8057a730-e982-4a11-9ad6-7edda6c6cab4] {
    font-size: 14px;
  }
}

.sd[data-s-6b683622-8354-4b45-9971-6945470f8217] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-82536fb8-0412-4d74-aa52-3b3f5b870b96] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-82536fb8-0412-4d74-aa52-3b3f5b870b96]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-82536fb8-0412-4d74-aa52-3b3f5b870b96] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-82536fb8-0412-4d74-aa52-3b3f5b870b96] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-82536fb8-0412-4d74-aa52-3b3f5b870b96] {
    font-size: 14px;
  }
}

.sd[data-s-52472433-6023-4bdb-94dc-9dff7f04f1c8] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 5px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

.sd[data-s-3001ea30-fb85-414f-ba00-ec128b5b436b] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-8650123d-261f-4d93-9ba6-37e16d3cc6d0] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: left;
  width: auto;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-8650123d-261f-4d93-9ba6-37e16d3cc6d0]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-8650123d-261f-4d93-9ba6-37e16d3cc6d0] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-8650123d-261f-4d93-9ba6-37e16d3cc6d0] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-8650123d-261f-4d93-9ba6-37e16d3cc6d0] {
    font-size: 14px;
  }
}

.sd[data-s-ca76d105-b5f4-4580-8ebe-0829113640f8] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 19px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

@media screen and (max-width: 320px) {
  .sd[data-s-ca76d105-b5f4-4580-8ebe-0829113640f8] {
    margin: 25px 0px 0px 0px;
    max-width: 100%;
  }
}

.sd[data-s-2ee1d2af-7942-4083-97a9-f22f176d0fb1] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-07ccc0b3-15ce-4f41-9af5-4514847f3261] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: left;
  width: auto;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-07ccc0b3-15ce-4f41-9af5-4514847f3261]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-07ccc0b3-15ce-4f41-9af5-4514847f3261] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-07ccc0b3-15ce-4f41-9af5-4514847f3261] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-07ccc0b3-15ce-4f41-9af5-4514847f3261] {
    font-size: 14px;
  }
}

.sd[data-s-e99d9222-a497-44f9-96e9-50a9fdbdd632] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 19px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

@media screen and (max-width: 320px) {
  .sd[data-s-e99d9222-a497-44f9-96e9-50a9fdbdd632] {
    margin: 25px 0px 0px 0px;
    max-width: 100%;
  }
}

.sd[data-s-697fc873-fb02-4628-9630-32a6b71021d1] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-0a2d84f0-ed26-4e78-8b00-f35456dfbe4c] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: left;
  width: auto;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-0a2d84f0-ed26-4e78-8b00-f35456dfbe4c]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-0a2d84f0-ed26-4e78-8b00-f35456dfbe4c] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-0a2d84f0-ed26-4e78-8b00-f35456dfbe4c] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-0a2d84f0-ed26-4e78-8b00-f35456dfbe4c] {
    font-size: 14px;
  }
}

.sd[data-s-24672ef0-4df0-4114-b196-39812deb1901] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 19px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

@media screen and (max-width: 320px) {
  .sd[data-s-24672ef0-4df0-4114-b196-39812deb1901] {
    margin: 25px 0px 0px 0px;
    max-width: 100%;
  }
}

.sd[data-s-dbba2687-dde5-4324-8d46-34ce45a82005] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-208e08bc-de38-4248-930f-dc4f68f2d2ba] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-208e08bc-de38-4248-930f-dc4f68f2d2ba]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-208e08bc-de38-4248-930f-dc4f68f2d2ba] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-208e08bc-de38-4248-930f-dc4f68f2d2ba] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-208e08bc-de38-4248-930f-dc4f68f2d2ba] {
    font-size: 14px;
  }
}

.sd[data-s-6ca2a7dc-7621-41a3-906f-5f3c1e31d48f] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 5px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

.sd[data-s-1af8ba46-1f6e-4ce5-9990-f6bfc7e7caac] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-ba40c4a8-de4a-4e96-8f87-2b9146264272] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: left;
  width: auto;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-ba40c4a8-de4a-4e96-8f87-2b9146264272]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-ba40c4a8-de4a-4e96-8f87-2b9146264272] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-ba40c4a8-de4a-4e96-8f87-2b9146264272] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-ba40c4a8-de4a-4e96-8f87-2b9146264272] {
    font-size: 14px;
  }
}

.sd[data-s-13d37840-5ab5-407c-b203-4480024984fb] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 19px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

@media screen and (max-width: 320px) {
  .sd[data-s-13d37840-5ab5-407c-b203-4480024984fb] {
    margin: 25px 0px 0px 0px;
    max-width: 100%;
  }
}

.sd[data-s-cc15381e-d016-4177-bcfc-02f5f0378d88] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-7aa405d7-d36b-4e53-8f5e-a554e4b44ba7] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-7aa405d7-d36b-4e53-8f5e-a554e4b44ba7]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-7aa405d7-d36b-4e53-8f5e-a554e4b44ba7] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-7aa405d7-d36b-4e53-8f5e-a554e4b44ba7] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-7aa405d7-d36b-4e53-8f5e-a554e4b44ba7] {
    font-size: 14px;
  }
}

.sd[data-s-55b44a0b-d13e-40eb-8ab0-f0a828885c0f] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 5px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

.sd[data-s-11ba92b6-9929-415a-bd35-2abca0cae815] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-d66dd66e-4146-4cbe-8dfd-c3ea6c555367] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-d66dd66e-4146-4cbe-8dfd-c3ea6c555367]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-d66dd66e-4146-4cbe-8dfd-c3ea6c555367] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-d66dd66e-4146-4cbe-8dfd-c3ea6c555367] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-d66dd66e-4146-4cbe-8dfd-c3ea6c555367] {
    font-size: 14px;
  }
}

.sd[data-s-24c2adc0-b46c-4b61-b342-139cad66e09e] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 5px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

.sd[data-s-5bbbdcaf-a59f-4461-955d-1081dd30197e] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-40558150-e0ed-4ba1-a7f1-0624718ef389] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-40558150-e0ed-4ba1-a7f1-0624718ef389]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-40558150-e0ed-4ba1-a7f1-0624718ef389] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-40558150-e0ed-4ba1-a7f1-0624718ef389] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-40558150-e0ed-4ba1-a7f1-0624718ef389] {
    font-size: 14px;
  }
}

.sd[data-s-59748255-3d5e-498e-b922-310bf445002d] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 5px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

.sd[data-s-ea1dfa36-d54d-4dd0-8c05-66c2ca90701a] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-fc019bc6-9e3f-4014-9ecb-fc1e4978b301] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-fc019bc6-9e3f-4014-9ecb-fc1e4978b301]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-fc019bc6-9e3f-4014-9ecb-fc1e4978b301] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-fc019bc6-9e3f-4014-9ecb-fc1e4978b301] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-fc019bc6-9e3f-4014-9ecb-fc1e4978b301] {
    font-size: 14px;
  }
}

.sd[data-s-30844495-878d-4471-b5ba-8884c4035140] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 5px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

.sd[data-s-4b5a8627-3342-42e7-8e58-41013124c589] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  padding: 0px;
}

.sd[data-s-10e0384b-9479-4402-888d-2f73a2c5dead] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-10e0384b-9479-4402-888d-2f73a2c5dead]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-10e0384b-9479-4402-888d-2f73a2c5dead] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-10e0384b-9479-4402-888d-2f73a2c5dead] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-10e0384b-9479-4402-888d-2f73a2c5dead] {
    font-size: 14px;
  }
}

.sd[data-s-6c8a7708-e17f-4828-93ff-8b6f4cbcd2a7] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 5px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

.sd[data-s-340b14c9-cbb6-4294-8945-68cb35ef12de] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 500;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-798eb3f5-c190-4420-b841-eccb0f2ca50a] {
  align-content: flex-start;
  align-items: flex-start;
  background: #eff0f4;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: auto;
  justify-content: flex-start;
  width: 135px;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-798eb3f5-c190-4420-b841-eccb0f2ca50a] {
    flex: none;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 112px;
    max-width: 100%;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-798eb3f5-c190-4420-b841-eccb0f2ca50a] {
    flex: none;
    width: auto;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-798eb3f5-c190-4420-b841-eccb0f2ca50a] {
    flex: none;
    width: auto;
  }
}

.sd[data-s-ad1df1b9-3181-4cc7-a52c-7e409939f0f5] {
  color: rgba(18, 87, 95, 0.5);
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 700;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 890px) {
  .sd[data-s-ad1df1b9-3181-4cc7-a52c-7e409939f0f5] {
    font-size: 12px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-ad1df1b9-3181-4cc7-a52c-7e409939f0f5] {
    font-size: 14px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-ad1df1b9-3181-4cc7-a52c-7e409939f0f5] {
    font-size: 14px;
  }
}

.sd[data-s-dbaccb4a-ef26-4b93-8712-b85cbddb585d] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-657aa4ab-ff3e-4419-be72-6ea2ab2f7c94] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 10px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-657aa4ab-ff3e-4419-be72-6ea2ab2f7c94]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-657aa4ab-ff3e-4419-be72-6ea2ab2f7c94] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-657aa4ab-ff3e-4419-be72-6ea2ab2f7c94] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-657aa4ab-ff3e-4419-be72-6ea2ab2f7c94] {
    font-size: 14px;
  }
}

.sd[data-s-f783a362-d82f-4419-a757-c0821e2f09a0] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 10px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

.sd[data-s-256f00da-b7c7-486b-a75f-56872c672ca3] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-db06817d-533e-4b88-afb5-fbe4a8605526] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-db06817d-533e-4b88-afb5-fbe4a8605526]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-db06817d-533e-4b88-afb5-fbe4a8605526] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-db06817d-533e-4b88-afb5-fbe4a8605526] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-db06817d-533e-4b88-afb5-fbe4a8605526] {
    font-size: 14px;
  }
}

.sd[data-s-c927b515-01d3-442f-a575-7cb14cc01e76] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 5px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

.sd[data-s-b1ab7d15-ba4d-4969-84a9-c0e0d6cb6cde] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-9666ad42-0d2f-4c0a-9275-07836c805bac] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-9666ad42-0d2f-4c0a-9275-07836c805bac]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-9666ad42-0d2f-4c0a-9275-07836c805bac] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-9666ad42-0d2f-4c0a-9275-07836c805bac] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-9666ad42-0d2f-4c0a-9275-07836c805bac] {
    font-size: 14px;
  }
}

.sd[data-s-d9a2e8a7-6271-4056-9e6b-d9cfe1a39b6f] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 5px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

.sd[data-s-b7d57a41-10bd-4d10-8bd0-a53207f56f00] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-abc1834d-77b3-4d24-9fda-b39ff34de802] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-abc1834d-77b3-4d24-9fda-b39ff34de802]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-abc1834d-77b3-4d24-9fda-b39ff34de802] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-abc1834d-77b3-4d24-9fda-b39ff34de802] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-abc1834d-77b3-4d24-9fda-b39ff34de802] {
    font-size: 14px;
  }
}

.sd[data-s-fd96c881-6114-4211-ada3-a14e4f6f1048] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 5px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

.sd[data-s-b43e036e-7fc6-4dfe-a071-dc7fa8332d0f] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-cd0cdee6-7c4b-49bf-9cd1-ccae0f895717] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-cd0cdee6-7c4b-49bf-9cd1-ccae0f895717]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-cd0cdee6-7c4b-49bf-9cd1-ccae0f895717] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-cd0cdee6-7c4b-49bf-9cd1-ccae0f895717] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-cd0cdee6-7c4b-49bf-9cd1-ccae0f895717] {
    font-size: 14px;
  }
}

.sd[data-s-421df56c-ae92-4a26-9eea-557e4859501a] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 5px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

.sd[data-s-ea6fea1a-98d5-4afa-be03-74db604bb3aa] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-2ad61391-879c-4561-b558-40c07aa5cbe4] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: left;
  width: auto;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-2ad61391-879c-4561-b558-40c07aa5cbe4]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-2ad61391-879c-4561-b558-40c07aa5cbe4] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-2ad61391-879c-4561-b558-40c07aa5cbe4] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-2ad61391-879c-4561-b558-40c07aa5cbe4] {
    font-size: 14px;
  }
}

.sd[data-s-ce67f403-00d9-471b-9cf0-a6b70fff6c98] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 19px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

@media screen and (max-width: 320px) {
  .sd[data-s-ce67f403-00d9-471b-9cf0-a6b70fff6c98] {
    margin: 25px 0px 0px 0px;
    max-width: 100%;
  }
}

.sd[data-s-9516a1e4-8a00-4d33-ba5a-c97b8786b5aa] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-977fa440-c3fd-4326-b078-a49d65917a34] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: left;
  width: auto;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-977fa440-c3fd-4326-b078-a49d65917a34]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-977fa440-c3fd-4326-b078-a49d65917a34] {
    font-size: 10px;
    text-align: left;
    justify-content: flex-start;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-977fa440-c3fd-4326-b078-a49d65917a34] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-977fa440-c3fd-4326-b078-a49d65917a34] {
    font-size: 14px;
  }
}

.sd[data-s-38ea0a0c-776c-47a6-9a9f-c505310d74c9] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 19px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-38ea0a0c-776c-47a6-9a9f-c505310d74c9] {
    margin: 19px 0px 0px 0px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-38ea0a0c-776c-47a6-9a9f-c505310d74c9] {
    margin: 25px 0px 0px 0px;
    max-width: 100%;
  }
}

.sd[data-s-26bee432-1c0b-4a05-b453-58cf7ba65c18] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: left;
  width: auto;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-26bee432-1c0b-4a05-b453-58cf7ba65c18]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-26bee432-1c0b-4a05-b453-58cf7ba65c18] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-26bee432-1c0b-4a05-b453-58cf7ba65c18] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-26bee432-1c0b-4a05-b453-58cf7ba65c18] {
    font-size: 14px;
  }
}

.sd[data-s-c1066c6d-7b5c-49b9-af2d-08b82aa391aa] {
  align-content: center;
  align-items: center;
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: auto;
  justify-content: center;
  padding: 0px;
  max-width: 100%;
}

.sd[data-s-ed9877d6-d4ee-4491-9bba-7227c30a662a] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: left;
  width: auto;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-ed9877d6-d4ee-4491-9bba-7227c30a662a]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-ed9877d6-d4ee-4491-9bba-7227c30a662a] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-ed9877d6-d4ee-4491-9bba-7227c30a662a] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-ed9877d6-d4ee-4491-9bba-7227c30a662a] {
    font-size: 14px;
  }
}

.sd[data-s-f66563ba-8f67-4880-8aa8-09da4f556246] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 5px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

.sd[data-s-663b3057-bf09-450f-b48c-2fbb4d86e4fc] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-489fc784-0547-4b14-935d-8cea9d3c5dd7] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-489fc784-0547-4b14-935d-8cea9d3c5dd7]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-489fc784-0547-4b14-935d-8cea9d3c5dd7] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-489fc784-0547-4b14-935d-8cea9d3c5dd7] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-489fc784-0547-4b14-935d-8cea9d3c5dd7] {
    font-size: 14px;
  }
}

.sd[data-s-e202312d-c595-4aec-a3da-716f4d5e4245] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-2426cdd1-7608-4a12-bc9e-3a3afbd0ae4e] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-2426cdd1-7608-4a12-bc9e-3a3afbd0ae4e]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-2426cdd1-7608-4a12-bc9e-3a3afbd0ae4e] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-2426cdd1-7608-4a12-bc9e-3a3afbd0ae4e] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-2426cdd1-7608-4a12-bc9e-3a3afbd0ae4e] {
    font-size: 14px;
  }
}

.sd[data-s-2b80722a-c405-456a-a652-696ac33c0662] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 5px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

.sd[data-s-cdacee16-2109-4e05-b126-d10e12461558] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-6f83fb8a-fb83-4bba-adfe-fbd2d76e28ff] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-6f83fb8a-fb83-4bba-adfe-fbd2d76e28ff]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-6f83fb8a-fb83-4bba-adfe-fbd2d76e28ff] {
    font-size: 10px;
    text-align: left;
    justify-content: flex-start;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-6f83fb8a-fb83-4bba-adfe-fbd2d76e28ff] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-6f83fb8a-fb83-4bba-adfe-fbd2d76e28ff] {
    font-size: 14px;
  }
}

.sd[data-s-7794dac1-e0d0-49a9-9d11-5b4bf1efd963] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-7794dac1-e0d0-49a9-9d11-5b4bf1efd963]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-7794dac1-e0d0-49a9-9d11-5b4bf1efd963] {
    font-size: 10px;
    text-align: left;
    justify-content: flex-start;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-7794dac1-e0d0-49a9-9d11-5b4bf1efd963] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-7794dac1-e0d0-49a9-9d11-5b4bf1efd963] {
    font-size: 14px;
  }
}

.sd[data-s-18ce4d73-007f-42d6-8805-035d1ddf9a51] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-1bf6c106-09a0-424b-a9de-878424c4a085] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: left;
  width: auto;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-1bf6c106-09a0-424b-a9de-878424c4a085]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-1bf6c106-09a0-424b-a9de-878424c4a085] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-1bf6c106-09a0-424b-a9de-878424c4a085] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-1bf6c106-09a0-424b-a9de-878424c4a085] {
    font-size: 14px;
  }
}

.sd[data-s-fa0fa9ae-7691-468d-90c8-b873437d9d59] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 19px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

@media screen and (max-width: 320px) {
  .sd[data-s-fa0fa9ae-7691-468d-90c8-b873437d9d59] {
    margin: 25px 0px 0px 0px;
    max-width: 100%;
  }
}

.sd[data-s-9bf5bbe0-e14c-45dc-aee2-cc5b09735322] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-ebaf63d2-bbb6-44f8-af80-72f9d814f532] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: left;
  width: auto;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-ebaf63d2-bbb6-44f8-af80-72f9d814f532]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-ebaf63d2-bbb6-44f8-af80-72f9d814f532] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-ebaf63d2-bbb6-44f8-af80-72f9d814f532] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-ebaf63d2-bbb6-44f8-af80-72f9d814f532] {
    font-size: 14px;
  }
}

.sd[data-s-4569bf15-6b84-4a6a-a87a-c5cda5d903c9] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 19px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

@media screen and (max-width: 320px) {
  .sd[data-s-4569bf15-6b84-4a6a-a87a-c5cda5d903c9] {
    margin: 25px 0px 0px 0px;
    max-width: 100%;
  }
}

.sd[data-s-d78e85de-3eff-4000-ab12-5975dbfd3cc7] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-d21a4b47-4dcd-437d-916f-a1582d9cb784] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: left;
  width: auto;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-d21a4b47-4dcd-437d-916f-a1582d9cb784]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-d21a4b47-4dcd-437d-916f-a1582d9cb784] {
    font-size: 10px;
    text-align: left;
    justify-content: flex-start;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-d21a4b47-4dcd-437d-916f-a1582d9cb784] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-d21a4b47-4dcd-437d-916f-a1582d9cb784] {
    font-size: 14px;
  }
}

.sd[data-s-c471bc3c-9f87-448d-b769-729ee7e46841] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 19px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-c471bc3c-9f87-448d-b769-729ee7e46841] {
    margin: 19px 0px 0px 0px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-c471bc3c-9f87-448d-b769-729ee7e46841] {
    margin: 25px 0px 0px 0px;
    max-width: 100%;
  }
}

.sd[data-s-e6c9d06a-2d35-4e43-b610-f7eeebdaf636] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-b2558a05-dc07-4a15-b83f-eff2071f292a] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-b2558a05-dc07-4a15-b83f-eff2071f292a]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-b2558a05-dc07-4a15-b83f-eff2071f292a] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-b2558a05-dc07-4a15-b83f-eff2071f292a] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-b2558a05-dc07-4a15-b83f-eff2071f292a] {
    font-size: 14px;
  }
}

.sd[data-s-db08b8f2-0acb-4512-a9df-47a97de1a84d] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 5px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

.sd[data-s-81376725-35ca-4edb-8eeb-af3d695de081] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-6c845ea8-6bc9-469a-94df-b29fb008686a] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-6c845ea8-6bc9-469a-94df-b29fb008686a]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-6c845ea8-6bc9-469a-94df-b29fb008686a] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-6c845ea8-6bc9-469a-94df-b29fb008686a] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-6c845ea8-6bc9-469a-94df-b29fb008686a] {
    font-size: 14px;
  }
}

.sd[data-s-f8d7e21c-ed51-4d27-a384-22d14524f91b] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 5px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

.sd[data-s-ed2057e4-c972-4bd8-8f56-4f7ca7ab28ba] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-4d355b8e-ba83-424a-87ad-99cdf873d84c] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-4d355b8e-ba83-424a-87ad-99cdf873d84c]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-4d355b8e-ba83-424a-87ad-99cdf873d84c] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-4d355b8e-ba83-424a-87ad-99cdf873d84c] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-4d355b8e-ba83-424a-87ad-99cdf873d84c] {
    font-size: 14px;
  }
}

.sd[data-s-bd791de1-5691-4a42-87d4-3d2e43f495f4] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-a4a5ae2f-83ee-4b16-9ed0-b39dacb50df6] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-a4a5ae2f-83ee-4b16-9ed0-b39dacb50df6]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-a4a5ae2f-83ee-4b16-9ed0-b39dacb50df6] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-a4a5ae2f-83ee-4b16-9ed0-b39dacb50df6] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-a4a5ae2f-83ee-4b16-9ed0-b39dacb50df6] {
    font-size: 14px;
  }
}

.sd[data-s-40cf8ef9-bb90-4155-801d-f36c3d5bfeae] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 5px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

.sd[data-s-613bde39-b00e-4250-8fab-8aca22763631] {
  color: #12575f;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 500;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}





.sd[data-r-0_0_0_1_3_3818e2a6-5b47-4968-80b3-16e8f9867c94]:before {
  background-image: url("https://coincheck.com/images/lp/denki/icon_feature_01.svg")
}
.sd[data-r-0_0_1_1_3_5bdb173c-2ba7-42f4-8665-628252079a7b]:before {
  background-image: url("https://coincheck.com/images/lp/denki/icon_feature_02.svg")
}
.sd[data-r-0_0_1_1_1_3_ad2d92a9-0697-4c01-b12d-51390588a414]:before {
  background-image: url("https://coincheck.com/images/lp/denki/icon_feature_03.svg")
}
.sd[data-r-0_1_1_1_1_3_bd32a4c9-9808-4903-bf41-6c3089f325e3]:before {
  background-image: url("https://coincheck.com/images/lp/denki/icon_feature_04.svg")
}
.sd[data-r-0_0_2_3_56e14068-aa07-41bc-b030-1f756880385b]:before {
  background-image: url("https://coincheck.com/images/lp/denki/icon_feature_02.svg")
}
.sd[data-r-0_0_1_2_3_4085e993-f202-44e5-b28a-1b38dfb474bc]:before {
  background-image: url("https://coincheck.com/images/lp/denki/icon_feature_03.svg")
}
.sd[data-r-0_1_1_2_3_f342ea81-19d7-4dee-90a8-9eec4d5829ad]:before {
  background-image: url("https://coincheck.com/images/lp/denki/icon_feature_04.svg")
}
.sd[data-r-0_3_3_abc58190-ebe8-4b2b-8ff1-88e134c5920a]:before {
  background-image: url("https://coincheck.com/images/lp/denki/icon_feature_02.svg")
}
.sd[data-r-0_0_4_3_8fd3dde5-7067-40e4-9ac5-b308dae2fa5d]:before {
  background-image: url("https://coincheck.com/images/lp/denki/icon_feature_03.svg")
}
.sd[data-r-0_1_4_3_3dc243a4-5140-4b8b-9f10-f5823d19f53b]:before {
  background-image: url("https://coincheck.com/images/lp/denki/icon_feature_04.svg")
}
.sd[data-r-0_5_3_2c248ae8-4de6-40f1-b383-e9677f0b34d8]:before {
  background-image: url("https://coincheck.com/images/lp/denki/icon_feature_04.svg")
}
.sd[data-r-0_6_3_2d80f690-f411-4dbb-a5de-251a40d197c5]:before {
  background-image: url("https://coincheck.com/images/lp/denki/icon_feature_04.svg")
}
.sd[data-r-1_0_0_0_8_3_ec5c48de-90b5-492b-8ead-625cb2b20eab]:before {
  background-image: url("https://coincheck.com/images/lp/denki/img_plan01.svg")
}
.sd[data-r-1_1_8_3_43f44923-5639-4243-bbca-4545ee89bf99]:before {
  background-image: url("https://coincheck.com/images/lp/denki/img_plan02.svg")
}
.sd[data-r-1_9_3_1c0a5427-54e3-4c1a-9b82-2762a5a5e39c]:before {
  background-image: url("https://coincheck.com/images/lp/denki/img_plan02.svg")
}



</style>
