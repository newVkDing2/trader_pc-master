<template>
  <!--  -->
  <div>
    <main data-s-1a87fac4-74af-4ab4-a9de-02d98904cdd1="" class="sd appear">
      <div data-s-dfbd1752-e426-4b3a-86e8-056b2add410e="" class="sd appear"><img
        data-s-b58e999a-7bd9-4778-8f04-6924ca0be6a3="" class="sd appear" alt=""
        src="@/assets/navpage/main_img.svg" loading="lazy">
        <p data-s-0a1c851d-401b-4977-9822-a561bd526d86="" data-r-1_0_1_0a1c851d-401b-4977-9822-a561bd526d86=""
           class="text sd appear"> {{ $t('gas.mainTitle') }}<br>
           {{ $t('gas.mainTitle2') }}
           <br>{{ $t('gas.mainTitle3') }}
           </p>
        <div data-s-f5502410-61a1-4ea6-8674-f84808eac3d7="" class="sd appear"><p
          data-s-a8c6a1a3-45f4-4b7a-b00c-bd702ac89538="" data-r-0_2_0_1_a8c6a1a3-45f4-4b7a-b00c-bd702ac89538=""
          class="text sd appear"> {{ $t('gas.mainTitle') }}<br>{{ $t('gas.mainTitle2') }}<br>{{ $t('gas.mainTitle3') }}</p></div>
        <a style="cursor: pointer" @click="$router.push({ path: '/user/register' })" rel="noopener" target="_blank"
           data-s-f8c96819-1f48-46a4-9dfe-1994b1bcf97f="" class="sd appear"><p
          data-s-48689cdf-58ee-4b88-be64-38b28a9575a0="" data-r-0_3_0_1_48689cdf-58ee-4b88-be64-38b28a9575a0=""
          class="text sd appear">
          {{ $t('denki.register') }}
          </p></a>
        <div style="cursor: pointer" data-s-355c793f-9365-44aa-8764-9f3b06cee5a1="" class="sd appear"><a @click="$router.push({ path: '/user/login' })"
                                                                                 rel="noopener" target="_blank"
                                                                                 data-s-2ad73264-258d-494f-a984-18937eabbf7b=""
                                                                                 data-r-0_4_0_1_2ad73264-258d-494f-a984-18937eabbf7b=""
                                                                                 class="text sd appear">{{ $t('gas.existingAccount') }}</a>
        </div>
        <div data-s-0364dec9-060b-4c47-afbd-1881ae915950="" class="sd appear">
          <div data-s-65d7b99e-7c09-4d14-ad01-6f4317dc0f34="" class="sd appear"><p
            data-s-5143a57c-afe4-43e9-ae5a-6fa17bb0e849="" data-r-0_0_5_0_1_5143a57c-afe4-43e9-ae5a-6fa17bb0e849=""
            class="text sd appear">{{ $t('gas.termsAgreement') }}</p><a
            @click="handleClick"
            data-s-c01ae96f-d813-4655-9a0b-6142b1f9a91b="" data-r-1_0_5_0_1_c01ae96f-d813-4655-9a0b-6142b1f9a91b=""
            class="text sd appear">{{ $t('gas.terms') }}</a>
            <p data-s-a7f03657-0fc7-4175-a5ae-986d00df4039="" data-r-2_0_5_0_1_a7f03657-0fc7-4175-a5ae-986d00df4039=""
               class="text sd appear">{{ $t('gas.and') }}</p><a
              @click="handleClick"
              data-s-dc72f89d-4a9c-475f-a48e-4dccc11e4a65="" data-r-3_0_5_0_1_dc72f89d-4a9c-475f-a48e-4dccc11e4a65=""
              class="text sd appear">{{ $t('gas.privacyPolicy') }}</a></div>
          <p data-s-2fb002fe-56a2-49cb-abf1-efefe1152c92="" data-r-1_5_0_1_2fb002fe-56a2-49cb-abf1-efefe1152c92=""
             class="text sd appear">{{ $t('gas.agreeTerms') }}</p></div>
        <div data-s-7465c868-d39e-4954-9137-164ea4e0d413="" class="sd appear">
          <div data-s-e50ab3bc-6766-462d-8f34-d998536512b9="" class="sd appear"><p
            data-s-9696ce1e-6e7b-4579-9c1e-79c0ad5cca56="" data-r-0_0_6_0_1_9696ce1e-6e7b-4579-9c1e-79c0ad5cca56=""
            class="text sd appear">{{ $t('gas.termsAgreement') }}</p><a
            @click="handleClick"
            data-s-01de9459-6635-4531-989c-bf9ee747e1c1="" data-r-1_0_6_0_1_01de9459-6635-4531-989c-bf9ee747e1c1=""
            class="text sd appear">{{ $t('gas.terms') }}</a>
            <p data-s-1b35ffd1-eec7-49b0-99d9-c56f2ff4a62e="" data-r-2_0_6_0_1_1b35ffd1-eec7-49b0-99d9-c56f2ff4a62e=""
               class="text sd appear">{{ $t('gas.and') }}</p></div>
          <div data-s-c58a7e93-c58e-4c94-9e2c-fb1a8f3e5f74="" class="sd appear"><a
            @click="handleClick"
            data-s-7a23ece8-b0bf-46a7-a37a-6d10cde440d3="" data-r-0_1_6_0_1_7a23ece8-b0bf-46a7-a37a-6d10cde440d3=""
            class="text sd appear">{{ $t('gas.privacyPolicy') }}</a>
            <p data-s-645fcb09-ca67-4576-9d63-7a98b503501f="" data-r-1_1_6_0_1_645fcb09-ca67-4576-9d63-7a98b503501f=""
               class="text sd appear">{{ $t('gas.agreeTerms') }}</p></div>
        </div>
      </div>
      <div data-s-033aed06-6612-4372-8816-92cac4808954="" class="sd appear">
        <img data-s-7bc2df94-f337-4888-9a43-0c5f8aa94bc5="" class="sd" alt="" src="@/assets/navpage/main_img.svg" loading="lazy" />
      </div>
    </main>
    <div data-s-9893622b-76f7-4b96-a86b-face03641463="" class="sd appear"></div>
    <main data-s-e1a68eb9-3ba6-41ac-b068-8d31e2f22f38="" class="sd appear">
      <div data-s-94fe6a9c-fe78-4a5c-a1cc-801e6eca8ac4="" class="sd appear">
        <div data-s-9041b019-772c-4725-b570-da108230e002="" data-r-0_0_3_9041b019-772c-4725-b570-da108230e002=""
             class="image sd appear">
          <!--        <style>.sd[data-r-0_0_3_9041b019-772c-4725-b570-da108230e002]:before {-->
          <!--          background-image: url("https://coincheck.com/images/lp/denki/icon_feature_02.svg")-->
          <!--        }</style>-->
        </div>
        <p data-s-9f08a71c-171a-49f3-ac91-725d30de2016="" data-r-1_0_3_9f08a71c-171a-49f3-ac91-725d30de2016=""
           class="text sd appear">
           {{ $t('gas.bitcoinPaymentPlan') }}

           </p>
        <p data-s-bb2c4ebb-ad9b-4d02-bb43-e516c2f03063="" data-r-2_0_3_bb2c4ebb-ad9b-4d02-bb43-e516c2f03063=""
           class="text sd appear">{ $t('denki.discountRate') }}

           <br>{{ $t('denki.q1') }}
           </p></div>
      <div data-s-837d18a3-e502-4039-8a7a-abcbd619d480="" class="sd appear"></div>
      <div data-s-c9d25a1d-ac63-480b-85e3-f6b4b70a7efc="" class="sd appear"><p
        data-s-d04a1c94-c3a2-4503-9e9c-be1b444355df="" data-r-0_2_3_d04a1c94-c3a2-4503-9e9c-be1b444355df=""
        class="text sd appear">
        {{ $t('gas.twoPlans') }}
        </p></div>
      <div data-s-817cf854-57ce-4448-bd6e-f6610a7c822b="" class="sd appear">
        <div data-s-fe9100f7-e107-4f00-993b-6f19871c53f7="" class="sd appear">
          <div data-s-cde69f08-7b1b-47c6-8418-9e78f413bec8="" class="sd appear">
            <div data-s-37be3576-82aa-4501-9230-006e09cfd46c="" class="sd appear"><p
              data-s-a25f1e6f-1088-4d3b-995b-07fa04e6a676="" data-r-0_0_0_0_3_3_a25f1e6f-1088-4d3b-995b-07fa04e6a676=""
              class="text sd appear">
              {{ $t('gas.bitcoinRewardPlan') }}

              </p>
              <div data-s-06a2554d-2e24-4dd3-89a1-e4685b01a0a3=""
                   data-r-1_0_0_0_3_3_06a2554d-2e24-4dd3-89a1-e4685b01a0a3="" class="image sd">

              </div>
              <p data-s-da91dbf9-7e00-43ef-a165-10bc8047de3e="" data-r-2_0_0_0_3_3_da91dbf9-7e00-43ef-a165-10bc8047de3e=""
                 class="text sd appear">
                 {{ $t('gas.qq1') }}

                 </p>
              <p data-s-b7def8a8-b90b-4aa5-9793-d15b2fd3c717="" data-r-3_0_0_0_3_3_b7def8a8-b90b-4aa5-9793-d15b2fd3c717=""
                 class="text sd appear">
                 {{ $t('gas.qq2') }}

                 </p></div>
          </div>
        </div>
        <div data-s-79624cc0-5c6e-4b6b-a471-ec57afade229="" class="sd appear"><p
          data-s-d7cc535e-5b7a-4d4a-ab87-cbaf79b3e099="" data-r-0_1_3_3_d7cc535e-5b7a-4d4a-ab87-cbaf79b3e099=""
          class="text sd appear">{{ $t('gas.bitcoinPaymentPlan') }}</p><img data-s-9d3b46d5-2ddc-4ba1-b6a2-dcbe43f89546="" class="sd" alt=""
                                                       src="@/assets/navpage/s-260x240_webp_e286d4da-fa58-493d-a830-569559cd08de.webp">
          <p data-s-5961091d-b368-4f15-a19e-411e9e6b7073="" data-r-2_1_3_3_5961091d-b368-4f15-a19e-411e9e6b7073=""
             class="text sd appear">
             {{ $t('gas.qq3') }}

             </p>
          <p data-s-59e7aee9-494e-4ee1-b5b6-4f7a8ef52f03="" data-r-3_1_3_3_59e7aee9-494e-4ee1-b5b6-4f7a8ef52f03=""
             class="text sd appear">
             {{ $t('gas.qq4') }}
             <br></p></div>
      </div>
      <div data-s-5c2df289-fa67-4503-9abb-d8f95ca79b87="" class="sd appear"><p
        data-s-a56c68db-7abe-4edf-87ee-2b295b99dbac="" data-r-0_4_3_a56c68db-7abe-4edf-87ee-2b295b99dbac=""
        class="text sd appear">{{ $t('gas.bitcoinPaymentPlan') }}</p>
        <div data-s-9b86f961-c0f1-4582-aa73-55fc602c96db="" data-r-1_4_3_9b86f961-c0f1-4582-aa73-55fc602c96db=""
             class="image sd appear">

        </div>
        <p data-s-c1964ed4-7799-4da5-bc33-247d9910cd2a="" data-r-2_4_3_c1964ed4-7799-4da5-bc33-247d9910cd2a=""
           class="text sd appear">{{ $t('gas.qq3') }}</p>
        <p data-s-cc671be7-5533-45aa-a28f-6fb2af88599d="" data-r-3_4_3_cc671be7-5533-45aa-a28f-6fb2af88599d=""
           class="text sd appear">
          {{ $t('gas.qq5') }}
           </p></div>
      <div data-s-ecd63421-cbc6-470a-8466-63afe28e1ae6="" class="sd appear"><p
        data-s-1d782d73-cf41-4195-86fc-5e542e89d1de="" data-r-0_5_3_1d782d73-cf41-4195-86fc-5e542e89d1de=""
        class="text sd appear">

        {{ $t('gas.content1') }}
        <br>

        {{ $t('gas.content2') }}
        <br>　

        {{ $t('gas.content3') }}
        <br>
        {{ $t('gas.content4') }}
        <br>
        {{ $t('gas.content5') }}
        <br>
        {{ $t('gas.content6') }}
        <br>
        {{ $t('gas.content7') }}
        <br>
      </p></div>
      <div data-s-4fb7a4cd-fd0b-4711-b7a3-2bb96a607533="" class="sd appear"><p
        data-s-7d4e919b-8d5a-4c00-ad6d-231a1a5d4dc2="" data-r-0_6_3_7d4e919b-8d5a-4c00-ad6d-231a1a5d4dc2=""
        class="text sd appear">

        {{ $t('gas.content8') }}
        </p></div>
      <div data-s-676e301e-3d1d-435f-8093-47b6e4aed3e0="" class="sd appear">
        <div data-s-58451f75-2db7-4475-9d84-83f1658e94ae="" class="sd appear">
          <div data-s-0f679322-b754-427a-b53b-b5b2af034e74="" class="sd appear">
            <div data-s-13d6982b-6a58-4059-abce-6a3fb4df1c60="" data-r-0_0_0_7_3_13d6982b-6a58-4059-abce-6a3fb4df1c60=""
                 class="image sd">
            </div>
            <p data-s-d6918d55-d620-4fc5-8dd2-b3798ae71739="" data-r-1_0_0_7_3_d6918d55-d620-4fc5-8dd2-b3798ae71739=""
               class="text sd appear">
               {{ $t('gas.content9') }}

               </p>
            <p data-s-5e5ed02b-e2ef-4d0b-8989-6fa87c2bc7ec="" data-r-2_0_0_7_3_5e5ed02b-e2ef-4d0b-8989-6fa87c2bc7ec=""
               class="text sd appear">
               {{ $t('gas.content10') }}

               <br>
               {{ $t('gas.content11') }}

               </p></div>
          <div data-s-52a44394-61d3-418a-84be-bb20e88315a9="" class="sd appear">
            <div data-s-0558c05f-5523-4d04-8cc8-2e7641309e50="" class="sd appear">
              <div data-s-1fb6bfe1-acdf-4181-a495-a6731c0be3e7=""
                   data-r-0_0_1_0_7_3_1fb6bfe1-acdf-4181-a495-a6731c0be3e7="" class="image sd">
              </div>
              <p data-s-5921d50c-1bdc-43c8-99ec-ce6de357eacb="" data-r-1_0_1_0_7_3_5921d50c-1bdc-43c8-99ec-ce6de357eacb=""
                 class="text sd appear">
                 {{ $t('gas.content12') }}

                 </p>
              <p data-s-a9aa3fad-2392-44bc-9ae2-ad51c508df30="" data-r-2_0_1_0_7_3_a9aa3fad-2392-44bc-9ae2-ad51c508df30=""
                 class="text sd appear">
                 {{ $t('gas.content13') }}

                 </p></div>
            <div data-s-0003de53-30e0-4cca-9597-19803df01de9="" class="sd appear">
              <div data-s-1bcc3714-1196-4020-9cae-f3a4ebe3cefc=""
                   data-r-0_1_1_0_7_3_1bcc3714-1196-4020-9cae-f3a4ebe3cefc="" class="image sd">
              </div>
              <p data-s-108ab89e-a305-4451-8253-7e2c9dce370e="" data-r-1_1_1_0_7_3_108ab89e-a305-4451-8253-7e2c9dce370e=""
                 class="text sd appear">
                 {{ $t('gas.content14') }}

                 </p>
              <p data-s-bc6d1be8-df80-47d5-b29a-ff4bcafe9463="" data-r-2_1_1_0_7_3_bc6d1be8-df80-47d5-b29a-ff4bcafe9463=""
                 class="text sd appear">
                 {{ $t('gas.content15') }}

                 </p></div>
          </div>
        </div>
      </div>
      <div data-s-9a258a79-71a4-4f34-8600-034deb8c443e="" class="sd appear">
        <div data-s-86fdf011-4504-4b79-aff4-5f4bf1e92429="" class="sd appear">
          <div data-s-1dfffff9-90d8-4c21-935a-43fe3d267ba3="" data-r-0_0_8_3_1dfffff9-90d8-4c21-935a-43fe3d267ba3=""
               class="image sd appear">
          </div>
          <p data-s-869aac83-8d5e-4c33-bf96-d6bd452bf5b0="" data-r-1_0_8_3_869aac83-8d5e-4c33-bf96-d6bd452bf5b0=""
             class="text sd appear">{{ $t('gas.content14') }}</p>
          <p data-s-eeeaa9ae-963b-441b-91d4-e2ad54ee8876="" data-r-2_0_8_3_eeeaa9ae-963b-441b-91d4-e2ad54ee8876=""
             class="text sd appear">{{ $t('gas.content15') }}</p></div>
        <p data-s-86d9dfda-fcbf-46cb-b10a-54700461ba9e="" data-r-1_8_3_86d9dfda-fcbf-46cb-b10a-54700461ba9e=""
           class="text sd appear">

           {{ $t('gas.content16') }}
           <br>
        </p></div>
      <div data-s-e68ce90b-f8ea-438e-b7df-80f59143551e="" class="sd appear"><p
        data-s-28e6e4cd-a9bf-4dd9-a689-a50db2dd1e56="" data-r-0_9_3_28e6e4cd-a9bf-4dd9-a689-a50db2dd1e56=""
        class="text sd appear">
        {{ $t('gas.content76') }}
        </p></div>
      <div data-s-5753f849-d32d-41d5-a44f-0bef705e85e0="" class="sd appear">
        <div data-s-41ac3161-fd7f-4615-a5dd-6bc56905ca82="" class="sd appear"><p
          data-s-9c016254-d58b-4ec1-ae2d-ebd029bcc9bd="" data-r-0_0_10_3_9c016254-d58b-4ec1-ae2d-ebd029bcc9bd=""
          class="text sd appear">
          {{ $t('gas.content75') }}
          </p></div>
      </div>
      <div data-s-0036f732-00b9-45d7-82f7-9c101e2ecf6a="" class="sd appear">
        <div data-s-0db6cd6d-c209-42f5-91fa-7333dc2c52a1="" class="sd appear"><p
          data-s-a86c6c25-34b6-4d98-9f0f-2ffffcff7578="" data-r-0_0_11_3_a86c6c25-34b6-4d98-9f0f-2ffffcff7578=""
          class="text sd appear">

          {{ $t('gas.content77') }}
          </p></div>
      </div>
      <div data-s-2e53cc40-88d6-4bbd-a88a-738a3469620a="" class="sd appear"></div>
      <div data-s-1faa49b2-e96f-4672-8d08-819d926e50aa="" class="sd appear"></div>
      <div data-s-46a98a4c-2644-4680-9862-42f980139a4b="" class="sd appear">
        <div data-s-2ab817cc-ffb4-452a-b8b5-81fb2833a4a6="" class="sd appear"></div>
        <div data-s-e4b0a822-bf18-47cf-b432-feb110f59e7b="" class="sd appear"><p
          data-s-929acddc-ff92-4c18-9f30-ee3dc592a09b="" data-r-0_1_14_3_929acddc-ff92-4c18-9f30-ee3dc592a09b=""
          class="text sd appear">
          {{ $t('gas.unit13') }}
          </p></div>
        <div data-s-30ab7ae5-1e9c-4102-93fb-b1587b7b9d72="" class="sd appear"><p
          data-s-2bae05ad-f774-4915-b594-0cdc94eda8ba="" data-r-0_2_14_3_2bae05ad-f774-4915-b594-0cdc94eda8ba=""
          class="text sd appear">
          1{{ $t('gas.unit8') }}
          </p></div>
        <div data-s-88aa6095-e4e1-405c-b7ca-db9f4d22191a="" class="sd appear"><p
          data-s-4fa45b87-9f4b-4654-b727-2fd7bcd2e99f="" data-r-0_3_14_3_4fa45b87-9f4b-4654-b727-2fd7bcd2e99f=""
          class="text sd appear">
          {{ $t('gas.unit6') }}<br>
          （{{ $t('gas.unit2') }}／{{ $t('gas.unit14') }}）

          </p></div>
        <div data-s-c9ac86b6-9464-4636-b646-5d4a233f99ee="" class="sd appear"><p
          data-s-6c74151a-237d-473b-9ad1-a47d56937807="" data-r-0_4_14_3_6c74151a-237d-473b-9ad1-a47d56937807=""
          class="text sd appear">
          {{ $t('gas.unit7') }}（{{ $t('gas.unit2') }}／㎥）
          </p></div>
      </div>
      <div data-s-a8c6236b-0c83-4f94-adbd-f7cef8714e6a="" class="sd appear">
        <div data-s-9db3a8cb-3d41-43e2-a398-802df9ea7ae3="" class="sd appear"></div>
        <div data-s-952dfde9-34a1-428b-a900-ef154d6beb6d="" class="sd appear"><p
          data-s-11a51b82-624f-4ff5-a8c7-f3280ea645e0="" data-r-0_1_15_3_11a51b82-624f-4ff5-a8c7-f3280ea645e0=""
          class="text sd appear">
          A{{ $t('gas.unit1') }}
          </p></div>
        <div data-s-b8f90d33-d6cf-4983-84f6-8f4acb20a2e0="" class="sd appear"><p
          data-s-18db633c-cee9-42bc-86b9-3a8463e7eaab="" data-r-0_2_15_3_18db633c-cee9-42bc-86b9-3a8463e7eaab=""
          class="text sd appear">
          0㎥から20㎥{{ $t('gas.unit5') }}
          </p></div>
        <div data-s-90014959-c32d-43ed-ae98-058399ce1427="" class="sd appear"><p
          data-s-e1d064a2-61a6-4a41-8e39-eb72cfa5a44d="" data-r-0_3_15_3_e1d064a2-61a6-4a41-8e39-eb72cfa5a44d=""
          class="text sd appear">
          759.00{{ $t('gas.unit2') }}
          </p></div>
        <div data-s-7933abbf-5f7f-4597-aef4-8f74d478120f="" class="sd appear"><p
          data-s-c69360f2-f4aa-4998-9d22-9506ea230916="" data-r-0_4_15_3_c69360f2-f4aa-4998-9d22-9506ea230916=""
          class="text sd appear">
          145.31{{ $t('gas.unit2') }}
          </p></div>
      </div>
      <div data-s-39a08a7b-eefd-4c88-a22b-ab05a62e6acb="" class="sd appear">
        <div data-s-2e70346e-e15c-4d48-a665-35ef8818507b="" class="sd appear"></div>
        <div data-s-9666e4e4-3250-4038-8dda-cdc68cdcab11="" class="sd appear"><p
          data-s-35932cbd-a124-4818-a044-8a9735d749e2="" data-r-0_1_16_3_35932cbd-a124-4818-a044-8a9735d749e2=""
          class="text sd appear">
          B{{ $t('gas.unit1') }}
          </p></div>
        <div data-s-abfb6929-b35c-4f8c-a8bc-2690cbe5d13d="" class="sd appear"><p
          data-s-052b6ae9-04b6-485c-b645-1c0410935fb3="" data-r-0_2_16_3_052b6ae9-04b6-485c-b645-1c0410935fb3=""
          class="text sd appear">
          20㎥{{ $t('gas.unit4') }}80㎥{{ $t('gas.unit5') }}
          </p></div>
        <div data-s-d3516f5b-b7f1-4940-b1f8-dfa54d6d9da2="" class="sd appear"><p
          data-s-9cbf8f0a-9689-43db-93cb-26b100e7b758="" data-r-0_3_16_3_9cbf8f0a-9689-43db-93cb-26b100e7b758=""
          class="text sd appear">
          1,056.00{{ $t('gas.unit2') }}&nbsp;
          </p></div>
        <div data-s-fee427d0-7f37-449e-971d-66d0932ee74b="" class="sd appear"><p
          data-s-46cdc5d2-3725-4d7e-aeae-fd05c69bc2d0="" data-r-0_4_16_3_46cdc5d2-3725-4d7e-aeae-fd05c69bc2d0=""
          class="text sd appear">
          130.46{{ $t('gas.unit2') }}
          </p></div>
      </div>
      <div data-s-01d1048a-5b6f-4079-b50d-efe0e1940b8b="" class="sd appear">
        <div data-s-d3e291ba-f77c-44f8-8130-442c73bde67e="" class="sd appear"><p
          data-s-5429c703-616d-4778-81a6-813201a94166="" data-r-0_0_17_3_5429c703-616d-4778-81a6-813201a94166=""
          class="text sd appear">
          {{ $t('gas.unit13') }}
          </p></div>
        <div data-s-6d78d203-4eb0-4d08-9755-e1158835d01a="" class="sd appear"><p
          data-s-fa8f73f2-bbed-4ed6-ab6b-c9d9fdc43c5e="" data-r-0_1_17_3_fa8f73f2-bbed-4ed6-ab6b-c9d9fdc43c5e=""
          class="text sd appear">
          C{{ $t('gas.unit1') }}
          </p></div>
        <div data-s-0193240d-bb98-4f12-be75-45ca13104fc1="" class="sd appear"><p
          data-s-eb71640b-3960-478b-94a5-4af8f55adadf="" data-r-0_2_17_3_eb71640b-3960-478b-94a5-4af8f55adadf=""
          class="text sd appear">
          80㎥{{ $t('gas.unit4') }}200㎥{{ $t('gas.unit5') }}
          </p></div>
        <div data-s-f7c1198d-110a-4f60-8080-d0e7b1a46e75="" class="sd appear"><p
          data-s-d567a1b9-a65e-4a29-b006-4dfca8333a2c="" data-r-0_3_17_3_d567a1b9-a65e-4a29-b006-4dfca8333a2c=""
          class="text sd appear">
          1,056.00{{ $t('gas.unit2') }}&nbsp;
          </p></div>
        <div data-s-272d0514-00ba-4d04-957e-56ab4b517036="" class="sd appear"><p
          data-s-b1502755-54ce-4841-92cf-ddaa97c2ea30="" data-r-0_4_17_3_b1502755-54ce-4841-92cf-ddaa97c2ea30=""
          class="text sd appear">
          130.46{{ $t('gas.unit2') }}
          </p></div>
      </div>
      <div data-s-55763c05-1c04-47d8-9e71-8040aed072c4="" class="sd appear">
        <div data-s-55accd5e-9724-4ff3-b5e4-daca2939fc7b="" class="sd appear">
          <div data-s-81febd22-9188-4667-91ae-07bd6e859e53="" class="sd appear"><p
            data-s-0d6d3d19-7ca2-4f57-9057-dc419b4e6136="" data-r-0_0_0_18_3_0d6d3d19-7ca2-4f57-9057-dc419b4e6136=""
            class="text sd appear">
            {{ $t('gas.unit13') }}
            <br></p></div>
          <div data-s-43827771-3870-4bf7-9c70-9738c6453cfa="" class="sd appear"><p
            data-s-738696ee-7ce7-483d-8ef5-6e7889d4a483="" data-r-0_1_0_18_3_738696ee-7ce7-483d-8ef5-6e7889d4a483=""
            class="text sd appear">
            C{{ $t('gas.unit1') }}
            </p></div>
          <div data-s-0fb8e5ac-7078-4aad-8ba6-5c4a38ade849="" class="sd appear"><p
            data-s-15dea3ae-eafd-4f31-9de4-4ebb7f0c273c="" data-r-0_2_0_18_3_15dea3ae-eafd-4f31-9de4-4ebb7f0c273c=""
            class="text sd appear">
            80㎥{{ $t('gas.unit4') }}200㎥{{ $t('gas.unit5') }}
            </p></div>
          <div data-s-78e357d6-f29c-410c-9119-9b2c2931c6b4="" class="sd appear"><p
            data-s-5c1f2934-7350-4b26-ae0b-501e84d772e4="" data-r-0_3_0_18_3_5c1f2934-7350-4b26-ae0b-501e84d772e4=""
            class="text sd appear">
            1,232.00{{ $t('gas.unit2') }}&nbsp;
            </p></div>
          <div data-s-b65bc9a8-1aca-4c94-84b3-9253fb4eb51a="" class="sd appear"><p
            data-s-122f0111-a02e-4b2f-9587-3d3816515375="" data-r-0_4_0_18_3_122f0111-a02e-4b2f-9587-3d3816515375=""
            class="text sd appear">
            128.26{{ $t('gas.unit2') }}
            </p></div>
        </div>
      </div>
      <div data-s-7dd4b581-4d37-4bbd-a5d6-57d0403b31e4="" class="sd appear">
        <div data-s-c5e6f585-b816-48d4-ba68-ec1e116ed1b7="" class="sd appear"><p
          data-s-1af41fd6-f43b-4d42-8ca8-0e008e60eb6c="" data-r-0_0_19_3_1af41fd6-f43b-4d42-8ca8-0e008e60eb6c=""
          class="text sd appear">
          {{ $t('gas.unit1') }}
          </p></div>
        <div data-s-5b041758-1451-4cec-8d04-2d2975170577="" class="sd appear"><p
          data-s-99c84498-1003-4fe0-b502-76429bdc41da="" data-r-0_1_19_3_99c84498-1003-4fe0-b502-76429bdc41da=""
          class="text sd appear">
          D{{ $t('gas.unit1') }}
          </p></div>
        <div data-s-62699a21-411e-4ebf-a756-4295b82a72d3="" class="sd appear"><p
          data-s-712f7b4f-3e63-4285-b803-0b0b59b6520f="" data-r-0_2_19_3_712f7b4f-3e63-4285-b803-0b0b59b6520f=""
          class="text sd appear">
          200㎥{{ $t('gas.unit4') }}500㎥{{ $t('gas.unit5') }}
          </p></div>
        <div data-s-ec3d779b-9718-4169-acfa-a0d956240122="" class="sd appear"><p
          data-s-68a9445b-b132-458f-abdc-11fda62ce1e2="" data-r-0_3_19_3_68a9445b-b132-458f-abdc-11fda62ce1e2=""
          class="text sd appear">
          1,892.00{{ $t('gas.unit2') }}&nbsp;
          </p></div>
        <div data-s-7431102c-67c4-4adb-b68a-c473f9b12683="" class="sd appear"><p
          data-s-654ab658-fe00-4492-866b-a6304dc436dd="" data-r-0_4_19_3_654ab658-fe00-4492-866b-a6304dc436dd=""
          class="text sd appear">
          124.96{{ $t('gas.unit2') }}
          </p></div>
      </div>
      <div data-s-d68f8d83-8126-45e9-b5c1-fd12cf00a741="" class="sd appear">
        <div data-s-31f97f61-1000-403e-8c34-cb2c0f4963de="" class="sd appear"></div>
        <div data-s-06d9fdc1-d7bb-41c7-b69d-614bae6a590a="" class="sd appear"><p
          data-s-3d876c0a-eff7-4b0c-89f9-c7c6e9e0a73f="" data-r-0_1_20_3_3d876c0a-eff7-4b0c-89f9-c7c6e9e0a73f=""
          class="text sd appear">
          E{{ $t('gas.unit1') }}
          </p></div>
        <div data-s-b9608ece-59ec-4173-8640-5e474b0ca808="" class="sd appear"><p
          data-s-645fc458-81ba-4aba-91bc-1f633a33bbc7="" data-r-0_2_20_3_645fc458-81ba-4aba-91bc-1f633a33bbc7=""
          class="text sd appear">
          500㎥{{ $t('gas.unit4') }}800㎥{{ $t('gas.unit5') }}
          </p></div>
        <div data-s-5a141787-5265-4ecc-8e1e-58b8c72bc6fb="" class="sd appear"><p
          data-s-f4d34ccd-6bdf-4176-91b6-fd8f76d5aa90="" data-r-0_3_20_3_f4d34ccd-6bdf-4176-91b6-fd8f76d5aa90=""
          class="text sd appear">
          6,292.00{{ $t('gas.unit2') }}
          </p></div>
        <div data-s-50a30a4a-0853-4636-987f-e845bb6c1b49="" class="sd appear"><p
          data-s-89229649-de5d-408b-8524-3bb602b470c4="" data-r-0_4_20_3_89229649-de5d-408b-8524-3bb602b470c4=""
          class="text sd appear">
          116.16{{ $t('gas.unit2') }}
          </p></div>
      </div>
      <div data-s-9de896cf-6356-4af2-afae-6cfae90aadfb="" class="sd appear">
        <div data-s-496a933b-4635-4ff3-b5c4-28b77243aaf4="" class="sd appear"></div>
        <div data-s-e3949e4e-ab25-425e-89e5-6b8ad87ec616="" class="sd appear"><p
          data-s-099a4f90-a6ad-4fb5-8a28-1fc2a95ad0e0="" data-r-0_1_21_3_099a4f90-a6ad-4fb5-8a28-1fc2a95ad0e0=""
          class="text sd appear">
          F{{ $t('gas.unit1') }}
          </p></div>
        <div data-s-b64b7fe1-43b7-4f53-9a63-eea73dc4068e="" class="sd appear"><p
          data-s-a758094f-0096-4d52-bd38-7352dd1b1144="" data-r-0_2_21_3_a758094f-0096-4d52-bd38-7352dd1b1144=""
          class="text sd appear">
          800㎥{{ $t('gas.unit4') }}る場合
          </p></div>
        <div data-s-39efc829-e0f5-464a-87c2-c82ba4ed06bf="" class="sd appear"><p
          data-s-df2b7f8d-30a0-4325-bce8-0bc7cd814ffa="" data-r-0_3_21_3_df2b7f8d-30a0-4325-bce8-0bc7cd814ffa=""
          class="text sd appear">
          12,452.00{{ $t('gas.unit2') }}
          </p></div>
        <div data-s-a0c8312a-1cd7-4ff1-862d-29895ced7cb2="" class="sd appear"><p
          data-s-7f981fe1-08eb-4a10-bb6b-eebcf5dd3796="" data-r-0_4_21_3_7f981fe1-08eb-4a10-bb6b-eebcf5dd3796=""
          class="text sd appear">
          108.46{{ $t('gas.unit2') }}
          <br></p></div>
      </div>
      <div data-s-7a649968-8ed7-4f1f-bd58-d29695e09bfd="" class="sd appear"></div>
      <p data-s-976d73b0-dd5b-4ede-b7a4-3a0089d993e0="" data-r-23_3_976d73b0-dd5b-4ede-b7a4-3a0089d993e0=""
         class="text sd appear">

         {{ $t('gas.content72') }}
         <br></p>
      <div data-s-870fa616-8aca-48e1-9824-e4bc23ca453c="" class="sd appear">
        <div data-s-79b73014-40ca-4faa-92d9-b03a27bcce0b="" class="sd appear"><p
          data-s-4b810f18-3031-493d-9dae-6432923ff5b1="" data-r-0_0_24_3_4b810f18-3031-493d-9dae-6432923ff5b1=""
          class="text sd appear">

          {{ $t('gas.content74') }}
          </p></div>
      </div>
      <div data-s-af030653-10e1-4d71-aedc-24f2685425a3="" class="sd appear"></div>
      <div data-s-cc711b8f-f272-4599-932a-50a1d1737a6f="" class="sd appear">
        <div data-s-163e4626-3a5a-4bc3-8e62-b28030681587="" class="sd appear"></div>
        <div data-s-a37d5398-8a22-4464-89a7-2f509cb1ff0a="" class="sd appear"><p
          data-s-f963c7c6-da95-4366-a7d7-65be9c59e450="" data-r-0_1_26_3_f963c7c6-da95-4366-a7d7-65be9c59e450=""
          class="text sd appear">
          {{ $t('gas.unit11') }}
          </p></div>
        <div data-s-84c85868-ccd6-47ad-9008-e0ddefd05972="" class="sd appear"><p
          data-s-17e80326-c0e8-4910-a2b3-5a047e3ebdf0="" data-r-0_2_26_3_17e80326-c0e8-4910-a2b3-5a047e3ebdf0=""
          class="text sd appear">
          {{ $t('gas.unit12') }}
          </p></div>
        <div data-s-8923bea9-0883-42b5-b5f1-dd09bb9ae1ac="" class="sd appear"><p
          data-s-446b16c7-898d-49fd-9104-a277d59ccf2c="" data-r-0_3_26_3_446b16c7-898d-49fd-9104-a277d59ccf2c=""
          class="text sd appear">
          {{ $t('gas.unit13') }}{{ $t('gas.unit1') }}
          </p></div>
        <div data-s-2978b8ce-636f-4ec2-be4b-8680bdf13e63="" class="sd appear"><p
          data-s-457bdc74-1e20-4aea-9e07-56f6adb436d5="" data-r-0_4_26_3_457bdc74-1e20-4aea-9e07-56f6adb436d5=""
          class="text sd appear">
          1{{ $t('gas.unit8') }}
          </p></div>
        <div data-s-918085c1-59a9-4d5d-9f5e-c621401cc584="" class="sd appear"><p
          data-s-4a4ff563-8d3e-404e-80d7-6c704917c1a8="" data-r-0_5_26_3_4a4ff563-8d3e-404e-80d7-6c704917c1a8=""
          class="text sd appear">
          {{ $t('gas.unit6') }}
          <br>
          （{{ $t('gas.unit2') }}／{{ $t('gas.unit14') }}）
          </p></div>
        <div data-s-0f3098df-0ab1-4e52-988f-5c0db4992014="" class="sd appear"><p
          data-s-0002b91a-928a-4371-a85b-7373d6267c60="" data-r-0_6_26_3_0002b91a-928a-4371-a85b-7373d6267c60=""
          class="text sd appear">
          {{ $t('gas.unit7') }}
          <br>
          （{{ $t('gas.unit2') }}／㎥）
          </p></div>
      </div>
      <div data-s-60775ffc-fb36-4666-a327-e9cff6e9b393="" class="sd appear">
        <div data-s-03b5d211-2333-41d9-9fc5-1e270d357b0b="" class="sd appear"></div>
        <div data-s-7845a9b0-79b2-403d-9447-5e6aa94e21b0="" class="sd appear"></div>
        <div data-s-6c600cbb-de51-4e17-9a91-e0bc4d6dc087="" class="sd appear"></div>
        <div data-s-bcc3691a-b4f9-4e8a-80d0-ba36be91d87f="" class="sd appear"><p
          data-s-d906a1c2-20c6-4bcd-858e-c4d7a0c7b171="" data-r-0_3_27_3_d906a1c2-20c6-4bcd-858e-c4d7a0c7b171=""
          class="text sd appear">
          A{{ $t('gas.unit1') }}
          </p></div>
        <div data-s-3f451033-61db-4c18-9dda-b70c3f02edd6="" class="sd appear"><p
          data-s-0bdbefff-3d2d-4da0-a710-16e76d1d65c8="" data-r-0_4_27_3_0bdbefff-3d2d-4da0-a710-16e76d1d65c8=""
          class="text sd appear">
          0㎥から20㎥{{ $t('gas.unit5') }}&nbsp;
          </p></div>
        <div data-s-008dd6b3-d48c-492e-8fa5-ef51d187f167="" class="sd appear"><p
          data-s-0ccdafa4-956b-4032-bd4a-1e0d5ba28139="" data-r-0_5_27_3_0ccdafa4-956b-4032-bd4a-1e0d5ba28139=""
          class="text sd appear">
          759.00{{ $t('gas.unit2') }}
          </p></div>
        <div data-s-cc6f07b5-3098-4362-8687-4fe38a59c257="" class="sd appear"><p
          data-s-36d638de-9c13-411d-9efd-a529c0472ac7="" data-r-0_6_27_3_36d638de-9c13-411d-9efd-a529c0472ac7=""
          class="text sd appear">
          145.31{{ $t('gas.unit2') }}
          </p></div>
      </div>
      <div data-s-b43ac507-94dd-47df-a231-6047e26db800="" class="sd appear">
        <div data-s-7cd4de17-1c32-4f8a-8f43-31d22adb92a4="" class="sd appear"><p
          data-s-83473e6a-22f0-498b-9007-0528bf502b1e="" data-r-0_0_28_3_83473e6a-22f0-498b-9007-0528bf502b1e=""
          class="text sd appear">
          {{ $t('gas.unit13') }}
          <br></p></div>
        <div data-s-f4900c21-4fdf-4b3e-8d27-bfa7bfea0b2d="" class="sd appear"><p
          data-s-b8b0fbfc-80c5-432f-ab98-eba438ea377d="" data-r-0_1_28_3_b8b0fbfc-80c5-432f-ab98-eba438ea377d=""
          class="text sd appear">
          {{ $t('gas.unit16') }}
          </p></div>
        <div data-s-fbc8c957-b9f6-4f6f-ae63-bcaf83f1a6c6="" class="sd appear"><p
          data-s-6f3c240c-a144-41bb-af2e-2c68c9b6928b="" data-r-0_2_28_3_6f3c240c-a144-41bb-af2e-2c68c9b6928b=""
          class="text sd appear">
          12{{ $t('gas.unit14') }}〜4{{ $t('gas.unit14') }}
          </p></div>
        <div data-s-51391f9e-7833-4e8c-99e9-ac7d07a2597e="" class="sd appear"><p
          data-s-a5641b4c-b607-4d3d-bd3e-7c1295e73708="" data-r-0_3_28_3_a5641b4c-b607-4d3d-bd3e-7c1295e73708=""
          class="text sd appear">
          B{{ $t('gas.unit1') }}
          </p></div>
        <div data-s-b0c639fd-bea9-4815-b9fc-f1e9721dae46="" class="sd appear"><p
          data-s-9c1ff328-c872-4fb8-a8a2-aad3ff4951d4="" data-r-0_4_28_3_9c1ff328-c872-4fb8-a8a2-aad3ff4951d4=""
          class="text sd appear">
          20㎥{{ $t('gas.unit4') }}80㎥{{ $t('gas.unit5') }}

          </p></div>
        <div data-s-1187bf03-9ccb-46e1-af71-cd13077a5ea5="" class="sd appear"><p
          data-s-3ba1bddb-4178-40f7-a861-8aad9ab3aa92="" data-r-0_5_28_3_3ba1bddb-4178-40f7-a861-8aad9ab3aa92=""
          class="text sd appear">
          1,265.00{{ $t('gas.unit2') }}
          </p></div>
        <div data-s-8e6d2c5e-a93d-4d7f-a2c5-c87aa7c96df4="" class="sd appear"><p
          data-s-3b50330f-0dcf-4ccb-a481-8a7b040b602d="" data-r-0_6_28_3_3b50330f-0dcf-4ccb-a481-8a7b040b602d=""
          class="text sd appear">
          120.01{{ $t('gas.unit2') }}
          <br></p></div>
      </div>
      <div data-s-22eefe48-59b7-4a89-8f0c-7b203164c68c="" class="sd appear">
        <div data-s-9500a0af-2a1f-44c8-8835-e4ba4967e3e3="" class="sd appear"><p
          data-s-3bb766da-0a45-4ada-904f-3abe6fffcedb="" data-r-0_0_29_3_3bb766da-0a45-4ada-904f-3abe6fffcedb=""
          class="text sd appear">
          {{ $t('gas.unit1') }}
          </p></div>
        <div data-s-3314bb0a-aacf-43af-b1a6-f7a47c7936d1="" class="sd appear"></div>
        <div data-s-725bc7f7-c769-46d5-ba54-4310cddf68ea="" class="sd appear"></div>
        <div data-s-00bf95d1-d7e7-4799-8339-32b9232ae050="" class="sd appear"><p
          data-s-b0ec9eb1-b1da-4a49-ac04-ab55abe15f3b="" data-r-0_3_29_3_b0ec9eb1-b1da-4a49-ac04-ab55abe15f3b=""
          class="text sd appear">
          C{{ $t('gas.unit1') }}
          </p></div>
        <div data-s-d41d61c4-dac1-4ea2-bc6c-cf9d26229304="" class="sd appear"><p
          data-s-33fa6d99-86d9-46b9-a9d5-61ac65577a8d="" data-r-0_4_29_3_33fa6d99-86d9-46b9-a9d5-61ac65577a8d=""
          class="text sd appear">
          80㎥{{ $t('gas.unit4') }}{{ $t('gas.unit15') }}
          </p></div>
        <div data-s-ef1347e2-18ee-4860-9ca0-e1eb96e6f53e="" class="sd appear"><p
          data-s-397a1833-7964-401f-9039-4090c562a741="" data-r-0_5_29_3_397a1833-7964-401f-9039-4090c562a741=""
          class="text sd appear">
          2,145.00{{ $t('gas.unit2') }}&nbsp;

          </p></div>
        <div data-s-66ca291d-9b41-41c2-a263-3311e8dec40e="" class="sd appear"><p
          data-s-a087e664-a36d-4a96-99ca-9a270f894480="" data-r-0_6_29_3_a087e664-a36d-4a96-99ca-9a270f894480=""
          class="text sd appear">
          109.01{{ $t('gas.unit2') }}
          <br></p></div>
      </div>
      <div data-s-0673417c-d201-4dc1-862f-fa0db4e5e8ed="" class="sd appear">
        <div data-s-e169e62c-70c2-4a6d-9f36-024fef833f49="" class="sd appear"></div>
        <div data-s-294fe60e-d054-4e92-8358-d274f73d15f1="" class="sd appear"><p
          data-s-c662aeea-50d3-42a5-9cb2-53c41406b988="" data-r-0_1_30_3_c662aeea-50d3-42a5-9cb2-53c41406b988=""
          class="text sd appear">
          {{ $t('gas.content79') }}
          </p></div>
        <div data-s-f3d03c03-0874-43a0-96f7-3b9a36cb3ef1="" class="sd appear"><p
          data-s-2f3c2756-5473-4f5e-8a60-1494422d2984="" data-r-0_2_30_3_2f3c2756-5473-4f5e-8a60-1494422d2984=""
          class="text sd appear">
          5{{ $t('gas.unit14') }}〜11{{ $t('gas.unit14') }}

          </p></div>
        <div data-s-8d94b100-b7c7-4f0c-8d72-94c0cf7b50af="" class="sd appear"><p
          data-s-e31b3d7d-8ad1-4a8d-8bbb-d1fd076c70e3="" data-r-0_3_30_3_e31b3d7d-8ad1-4a8d-8bbb-d1fd076c70e3=""
          class="text sd appear">
          A{{ $t('gas.unit1') }}〜F{{ $t('gas.unit1') }}

          </p></div>
        <div data-s-e282b468-73ec-4fb6-b2e2-ece2d74a98ab="" class="sd appear"><p
          data-s-28031a9f-2f38-42fc-84d2-65e9cbd52c49="" data-r-0_4_30_3_28031a9f-2f38-42fc-84d2-65e9cbd52c49=""
          class="text sd appear">

          {{ $t('gas.content80') }}
          </p></div>
      </div>
      <p data-s-7f5f146a-ed0c-41ef-bd32-8829f14ac9d6="" data-r-31_3_7f5f146a-ed0c-41ef-bd32-8829f14ac9d6=""
         class="text sd appear">

         {{ $t('gas.content72') }}
         <br></p>
      <div data-s-c334716a-3e59-46b2-a8ef-5e30c0fa67f5="" class="sd appear">
        <div data-s-df529923-6234-446e-b8ae-9c062d2562c5="" class="sd appear"><p
          data-s-8abb1f36-93d4-43ac-8e95-245734672080="" data-r-0_0_32_3_8abb1f36-93d4-43ac-8e95-245734672080=""
          class="text sd appear">

          {{ $t('gas.content71') }}
          </p></div>
      </div>
      <p data-s-b722e6f5-e8a3-478c-a865-80bb633c8b65="" data-r-33_3_b722e6f5-e8a3-478c-a865-80bb633c8b65=""
         class="text sd appear">

         {{ $t('gas.content70') }}
         </p>
      <p data-s-281c6251-a5a5-4387-bc29-9855b8d59641="" data-r-34_3_281c6251-a5a5-4387-bc29-9855b8d59641=""
         class="text sd appear">

         {{ $t('gas.content73') }}
         </p>
      <div data-s-d926c86a-a6ff-4f0f-b5da-46eb0b812841="" class="sd appear">
        <div data-s-0d19c4f6-a3c0-4d70-9bcf-5ca0ae75fdea="" class="sd appear"></div>
        <div data-s-38926642-d849-4993-88f6-aaa4ff656871="" class="sd appear"><p
          data-s-9b183862-f7cb-40a2-abfc-583e1a30c14d="" data-r-0_1_35_3_9b183862-f7cb-40a2-abfc-583e1a30c14d=""
          class="text sd appear">
          {{ $t('gas.unit13') }}
          </p></div>
        <div data-s-20a2b9dd-7ef7-4d63-b22a-980d866bea2a="" class="sd appear"><p
          data-s-acb5cc05-1991-4d18-8d33-106bcd3adc66="" data-r-0_2_35_3_acb5cc05-1991-4d18-8d33-106bcd3adc66=""
          class="text sd appear">
          1{{ $t('gas.unit8') }}
          </p></div>
        <div data-s-5dbff142-8dc8-4143-a688-50277f0a01df="" class="sd appear"><p
          data-s-befc74c8-130e-48b9-8a37-02bfacf921bf="" data-r-0_3_35_3_befc74c8-130e-48b9-8a37-02bfacf921bf=""
          class="text sd appear">
          {{ $t('gas.unit6') }}
          <br>
          （{{ $t('gas.unit2') }}／{{ $t('gas.unit14') }}）
          </p></div>
        <div data-s-6b8eb299-a442-4eb6-a33f-c4a8cc00c2a4="" class="sd appear"><p
          data-s-62494797-2197-4a70-9bb6-af527503e979="" data-r-0_4_35_3_62494797-2197-4a70-9bb6-af527503e979=""
          class="text sd appear">
          {{ $t('gas.unit7') }}（{{ $t('gas.unit2') }}／㎥）

          </p></div>
      </div>
      <div data-s-f07632b9-bd91-4b0c-8d0a-be58a8b1da7f="" class="sd appear">
        <div data-s-7a3d7ced-77c5-4d34-8935-c090e64f7545="" class="sd appear"></div>
        <div data-s-4131a4ed-bed3-4211-9d34-307a76b07ced="" class="sd appear"><p
          data-s-599adbf8-517d-44f0-8abe-0def7f0cb6e8="" data-r-0_1_36_3_599adbf8-517d-44f0-8abe-0def7f0cb6e8=""
          class="text sd appear">
          A{{ $t('gas.unit1') }}
          </p></div>
        <div data-s-e74b65ec-bf49-4e9a-bd16-12c457617014="" class="sd appear"><p
          data-s-28091fce-e3e6-4c2e-a9eb-988a9caa44b3="" data-r-0_2_36_3_28091fce-e3e6-4c2e-a9eb-988a9caa44b3=""
          class="text sd appear">
          0㎥から20㎥{{ $t('gas.unit5') }}
          </p></div>
        <div data-s-86cc4883-b8e5-4779-9d11-20190960d3b5="" class="sd appear"><p
          data-s-59861c3d-d8f7-4ad1-9e19-0acd87fc5eda="" data-r-0_3_36_3_59861c3d-d8f7-4ad1-9e19-0acd87fc5eda=""
          class="text sd appear">
          759.00{{ $t('gas.unit2') }}
          </p></div>
        <div data-s-9978e308-9405-43f0-8e10-e149829ae94b="" class="sd appear"><p
          data-s-4d3e2caf-9803-4a74-83ac-7088b9583a48="" data-r-0_4_36_3_4d3e2caf-9803-4a74-83ac-7088b9583a48=""
          class="text sd appear">
          210.52{{ $t('gas.unit2') }}
          </p></div>
      </div>
      <div data-s-f43ab8e3-563d-4f55-ac91-5130922ca521="" class="sd appear">
        <div data-s-43aaa184-cd6d-4d99-975a-806fe9e232f1="" class="sd appear"></div>
        <div data-s-14e86aa4-b69b-40aa-8cdd-dc92a5f3e583="" class="sd appear"><p
          data-s-936d5143-f0ae-4c5a-9cda-24a70e8c815d="" data-r-0_1_37_3_936d5143-f0ae-4c5a-9cda-24a70e8c815d=""
          class="text sd appear">
          B{{ $t('gas.unit1') }}
          </p></div>
        <div data-s-14d0f39a-ecdc-46b5-a570-9be38b252b3a="" class="sd appear"><p
          data-s-eba68b16-5e59-444c-9e72-d688d0c46cc8="" data-r-0_2_37_3_eba68b16-5e59-444c-9e72-d688d0c46cc8=""
          class="text sd appear">
          20㎥{{ $t('gas.unit4') }}50㎥{{ $t('gas.unit5') }}

          <br></p></div>
        <div data-s-cb447b10-5ecb-410b-85b3-9542bf545d96="" class="sd appear"><p
          data-s-5df1525f-9ee7-4ead-b7d1-3c6012e95328="" data-r-0_3_37_3_5df1525f-9ee7-4ead-b7d1-3c6012e95328=""
          class="text sd appear">
          1,588.88{{ $t('gas.unit2') }}
          </p></div>
        <div data-s-bb08a053-7ac8-4026-b76b-f2046a8a401b="" class="sd appear"><p
          data-s-ea9ea65c-aa86-4e4f-8cc0-a8018ebdeb7b="" data-r-0_4_37_3_ea9ea65c-aa86-4e4f-8cc0-a8018ebdeb7b=""
          class="text sd appear">
          169.03{{ $t('gas.unit2') }}
          </p></div>
      </div>
      <div data-s-cb389a58-5b23-48b8-8686-81df2f925b89="" class="sd appear">
        <div data-s-822c2854-da4b-4880-962f-a98df7f70115="" class="sd appear">
          <div data-s-9b70fa16-7677-424c-ba98-b86579cb9141="" class="sd appear"><p
            data-s-957317a7-8419-4cad-a0c7-7ebb4c6e974a="" data-r-0_0_0_38_3_957317a7-8419-4cad-a0c7-7ebb4c6e974a=""
            class="text sd appear">
            {{ $t('gas.unit13') }}
            <br></p></div>
          <div data-s-ddd6cce9-9975-4095-8b68-d91398cf438a="" class="sd appear"><p
            data-s-9cbc62b9-c574-4de9-891b-386f90b3495f="" data-r-0_1_0_38_3_9cbc62b9-c574-4de9-891b-386f90b3495f=""
            class="text sd appear">
            C{{ $t('gas.unit1') }}
            </p></div>
          <div data-s-a58d7863-eda3-4711-89fc-13a580f80a0e="" class="sd appear"><p
            data-s-bd3a3337-774d-4e01-b568-bf1227a3e2ea="" data-r-0_2_0_38_3_bd3a3337-774d-4e01-b568-bf1227a3e2ea=""
            class="text sd appear">
            50㎥{{ $t('gas.unit4') }}100㎥{{ $t('gas.unit5') }}

            </p></div>
          <div data-s-63f297c8-0390-4fbb-8270-802273aac3f0="" class="sd appear"><p
            data-s-aca71b17-c62a-4c16-a73e-e315d5310e09="" data-r-0_3_0_38_3_aca71b17-c62a-4c16-a73e-e315d5310e09=""
            class="text sd appear">
            1,833.33{{ $t('gas.unit2') }}
            </p></div>
          <div data-s-c024a465-b09f-4eef-b964-8e24e6ea7a33="" class="sd appear"><p
            data-s-fa9a2560-269f-4680-9c1c-ba4f1d854314="" data-r-0_4_0_38_3_fa9a2560-269f-4680-9c1c-ba4f1d854314=""
            class="text sd appear">
            164.14{{ $t('gas.unit2') }}
            </p></div>
        </div>
      </div>
      <div data-s-2b229007-c2c7-4624-935b-9188937fdae0="" class="sd appear">
        <div data-s-724fbf84-5ea6-412f-8ac0-f52f5bc52e1d="" class="sd appear"><p
          data-s-0b01e73f-abc0-4879-b612-ccc55344a18c="" data-r-0_0_39_3_0b01e73f-abc0-4879-b612-ccc55344a18c=""
          class="text sd appear">{{ $t('gas.unit1') }}</p></div>
        <div data-s-74991610-40fe-473a-9ebd-6b21de9b6c31="" class="sd appear"><p
          data-s-17fb5a61-8a25-49e8-a0e1-b98433b244cb="" data-r-0_1_39_3_17fb5a61-8a25-49e8-a0e1-b98433b244cb=""
          class="text sd appear">D{{ $t('gas.unit1') }}</p></div>
        <div data-s-ce6c796c-58da-4d7c-b9eb-4ef897ffa6b4="" class="sd appear"><p
          data-s-c81c623c-4ccb-4e54-b2ff-4ee9c9f1690c="" data-r-0_2_39_3_c81c623c-4ccb-4e54-b2ff-4ee9c9f1690c=""
          class="text sd appear">100㎥{{ $t('gas.unit4') }}250㎥{{ $t('gas.unit5') }}</p></div>
        <div data-s-9c83d667-7013-4826-a9fd-c71fcd43d99f="" class="sd appear"><p
          data-s-de54fbac-836d-4eb6-83bd-f21364debec8="" data-r-0_3_39_3_de54fbac-836d-4eb6-83bd-f21364debec8=""
          class="text sd appear">2,077.77{{ $t('gas.unit2') }}</p></div>
        <div data-s-b42747b3-87c2-4557-bd07-616eb1b51413="" class="sd appear"><p
          data-s-3fb9eb22-689c-4dc8-ae4d-19297ec3ecc0="" data-r-0_4_39_3_3fb9eb22-689c-4dc8-ae4d-19297ec3ecc0=""
          class="text sd appear">161.70{{ $t('gas.unit2') }}</p></div>
      </div>
      <div data-s-c78be206-5650-4201-be71-8863e7cc60bd="" class="sd appear">
        <div data-s-ada93234-5154-4611-896b-0646ebc92dca="" class="sd appear"></div>
        <div data-s-eccf15cd-be18-416d-b286-15bcb63373bf="" class="sd appear"><p
          data-s-fe7d9d24-ce70-40be-a24f-8160eaa1e1f0="" data-r-0_1_40_3_fe7d9d24-ce70-40be-a24f-8160eaa1e1f0=""
          class="text sd appear">E{{ $t('gas.unit1') }}</p></div>
        <div data-s-c8e035f9-8259-47cb-aa49-710f28b05ddc="" class="sd appear"><p
          data-s-ccec750d-32fe-4471-abef-bed5663e0d08="" data-r-0_2_40_3_ccec750d-32fe-4471-abef-bed5663e0d08=""
          class="text sd appear">250㎥{{ $t('gas.unit4') }}500㎥{{ $t('gas.unit5') }}</p></div>
        <div data-s-4f20012d-1f52-4832-93f4-835382d81022="" class="sd appear"><p
          data-s-0b543ffd-d02d-4822-839a-b93ca3e1309e="" data-r-0_3_40_3_0b543ffd-d02d-4822-839a-b93ca3e1309e=""
          class="text sd appear">2,648.14{{ $t('gas.unit2') }}</p></div>
        <div data-s-f010df38-d544-48da-89b9-a0bc33c12cfd="" class="sd appear"><p
          data-s-94d69c3d-126e-49fc-aef9-c8ea3a3e2e55="" data-r-0_4_40_3_94d69c3d-126e-49fc-aef9-c8ea3a3e2e55=""
          class="text sd appear">159.41{{ $t('gas.unit2') }}</p></div>
      </div>
      <div data-s-2e0031e3-cd1f-4fff-bef4-09fe9008b808="" class="sd appear">
        <div data-s-f37ef9a5-7fdd-4f7e-b5aa-10705f6676b7="" class="sd appear"></div>
        <div data-s-4d68818f-72d0-480e-bf18-0c4059806019="" class="sd appear"><p
          data-s-adf4e371-7dbc-419a-8ec7-5c804ce52e47="" data-r-0_1_41_3_adf4e371-7dbc-419a-8ec7-5c804ce52e47=""
          class="text sd appear">F{{ $t('gas.unit1') }}</p></div>
        <div data-s-f6585607-1569-435c-bdb9-78ecee3b4d77="" class="sd appear"><p
          data-s-e6f20930-bab7-40e9-af42-f61332952d06="" data-r-0_2_41_3_e6f20930-bab7-40e9-af42-f61332952d06=""
          class="text sd appear">500㎥{{ $t('gas.unit4') }}る場合</p></div>
        <div data-s-41169d8e-6778-4635-87ae-185d4950e6cb="" class="sd appear"><p
          data-s-a2b6367e-573b-4862-b884-073b6d64e153="" data-r-0_3_41_3_a2b6367e-573b-4862-b884-073b6d64e153=""
          class="text sd appear">7,109.25{{ $t('gas.unit2') }}</p></div>
        <div data-s-6bd572c9-9e2b-48fe-821c-ec124e719502="" class="sd appear"><p
          data-s-7e8e55de-1114-4072-9b36-dcfd9685e0fa="" data-r-0_4_41_3_7e8e55de-1114-4072-9b36-dcfd9685e0fa=""
          class="text sd appear">150.49{{ $t('gas.unit2') }}<br></p></div>
      </div>
      <p data-s-47a9b604-b970-4835-a5ff-ead7d9bb6352="" data-r-42_3_47a9b604-b970-4835-a5ff-ead7d9bb6352=""
         class="text sd appear">
        {{ $t('gas.content17') }}
        <br>{{ $t('gas.content18') }}
        <br>{{ $t('gas.content19') }}
        <br>
      </p>
      <div data-s-b7bcc40f-84ed-46b9-85ec-9eae2b6a7270="" class="sd appear">
        <div data-s-6f6d5324-39ab-4375-8d07-87fe7d4210d7="" class="sd appear"><p
          data-s-b041f9aa-dc19-48c4-a462-db06d9be9986="" data-r-0_0_43_3_b041f9aa-dc19-48c4-a462-db06d9be9986=""
          class="text sd appear">
          {{ $t('gas.content20') }}</p></div>
        <div data-s-1d8de012-acb7-4d28-b4dc-20d576720f82="" class="sd appear"><p
          data-s-e88ffdbb-74b6-4df2-8bb0-1516b7853783="" data-r-0_1_43_3_e88ffdbb-74b6-4df2-8bb0-1516b7853783=""
          class="text sd appear">
          {{ $t('gas.bitcoinRewardPlan') }}
          </p></div>
        <p data-s-c452206f-8650-4c61-a29b-f05f661bab59="" data-r-2_43_3_c452206f-8650-4c61-a29b-f05f661bab59=""
           class="text sd appear">
           {{ $t('gas.content21') }}
           </p></div>
      <div data-s-d2448091-f8e7-4916-9bb1-66e60f8845e8="" class="sd appear"><p
        data-s-bcca1012-cbd6-4ee7-a9b3-ffc33696f079="" data-r-0_44_3_bcca1012-cbd6-4ee7-a9b3-ffc33696f079=""
        class="text sd appear">
        {{ $t('gas.content78') }}

        </p>
        <div data-s-5a26b6cf-2d8e-4aa5-b148-3be561e796c9="" class="sd appear"><p
          data-s-38f04e35-96b8-4c30-bce3-08996b19a936="" data-r-0_1_44_3_38f04e35-96b8-4c30-bce3-08996b19a936=""
          class="text sd appear">
          {{ $t('gas.content24') }}

          </p>
          <p data-s-9abd4e5b-f36a-492e-96a3-61806f0a5571="" data-r-1_1_44_3_9abd4e5b-f36a-492e-96a3-61806f0a5571=""
             class="text sd appear">
             {{ $t('gas.content23') }}

             </p></div>
      </div>
      <img data-s-a039acc9-0956-4acc-892e-2a4ff59b9462="" class="sd" alt=""
           src="https://coincheck.com/images/lp/gas/floor_heating_01.png" loading="lazy">
      <div data-s-ce1d35b3-f4f8-4d03-b363-39e6070afb9e="" class="sd appear"><p
        data-s-16fb4c2d-d28d-4acb-850d-3d2c48c374ef="" data-r-0_46_3_16fb4c2d-d28d-4acb-850d-3d2c48c374ef=""
        class="text sd appear">
        {{ $t('gas.content20') }}
        </p>
        <div data-s-4c4efb45-9a71-41d0-b97f-11b28c39a4d9="" class="sd appear"><p
          data-s-89ad5e20-98a0-41cf-98b1-3815fe9ae042="" data-r-0_1_46_3_89ad5e20-98a0-41cf-98b1-3815fe9ae042=""
          class="text sd appear">{{ $t('gas.bitcoinPaymentPlan') }}</p></div>
        <p data-s-45b7018b-b2f6-47c5-8ce2-aadd46dcbcd3="" data-r-2_46_3_45b7018b-b2f6-47c5-8ce2-aadd46dcbcd3=""
           class="text sd appear">{{ $t('gas.content21') }}</p></div>
      <div data-s-97fa5464-bb41-4f28-ae94-209d48dd386f="" class="sd appear"><p
        data-s-ad138eee-326b-46a7-96d4-2dbe89839e88="" data-r-0_47_3_ad138eee-326b-46a7-96d4-2dbe89839e88=""
        class="text sd appear">

        {{ $t('gas.content22') }}
         </p>
        <div data-s-928fea55-fc58-4c38-b872-234c3f3b3b31="" class="sd appear"><p
          data-s-9535d976-5679-43aa-a766-00c676977ba1="" data-r-0_1_47_3_9535d976-5679-43aa-a766-00c676977ba1=""
          class="text sd appear">

          {{ $t('gas.content26') }}
          </p>
          <div data-s-0b459c23-15d8-481b-ab67-ee256a909c39="" class="sd appear"><p
            data-s-4ae4f395-77af-4590-b572-1df14a3d0c27="" data-r-0_1_1_47_3_4ae4f395-77af-4590-b572-1df14a3d0c27=""
            class="text sd appear">
              {{ $t('gas.content29') }}
            </p>
            <p data-s-a982a94c-bfc8-4c2b-ba4c-2d4650945f0c="" data-r-1_1_1_47_3_a982a94c-bfc8-4c2b-ba4c-2d4650945f0c=""
               class="text sd appear">

               {{ $t('gas.content30') }}
               </p></div>
        </div>
        <p data-s-863fb5b7-1e9e-45a3-a087-a8ff28cb9d01="" data-r-2_47_3_863fb5b7-1e9e-45a3-a087-a8ff28cb9d01=""
           class="text sd appear">

           {{ $t('gas.content31') }}
           </p>
        <p data-s-13d9a420-46c1-4ec2-ae32-2e9bc80bae75="" data-r-3_47_3_13d9a420-46c1-4ec2-ae32-2e9bc80bae75=""
           class="text sd appear"></p>
        <p data-s-84f28e4c-c623-4258-a5a0-52a5a1ad7f39="" data-r-4_47_3_84f28e4c-c623-4258-a5a0-52a5a1ad7f39=""
           class="text sd appear">

          {{ $t('gas.content32') }}
        <br>

          {{ $t('gas.content31') }}
        </p></div>
      <img data-s-a0fa46ee-3173-42db-92ef-98eaa9bda984="" class="sd" alt=""
           src="https://coincheck.com/images/lp/gas/floor_heating_02.png" loading="lazy">
      <p data-s-af44c370-aae3-4307-a291-095887b5ba49="" data-r-49_3_af44c370-aae3-4307-a291-095887b5ba49=""
         class="text sd appear">

       {{ $t('gas.content27') }}
        <br>

        {{ $t('gas.content28') }}
      </p>
      <p data-s-bebfff3d-d6d6-4fbf-bc5d-544ed28e9ab5="" data-r-50_3_bebfff3d-d6d6-4fbf-bc5d-544ed28e9ab5=""
         class="text sd appear">
         {{ $t('gas.content33') }}
         <br>

         {{ $t('gas.content34') }}
         <br>
          {{ $t('gas.content35') }}
         <br>
          {{ $t('gas.content36') }}
        <br>
        {{ $t('gas.content37') }}
        <br>
        {{ $t('gas.content38') }}
      </p>
      <div data-s-c75965fa-3099-4217-a54c-0eaf0c7c26f9="" class="sd appear"><p
        data-s-9e63de9b-360d-4e0b-99ce-66717e431a89="" data-r-0_51_3_9e63de9b-360d-4e0b-99ce-66717e431a89=""
        class="text sd appear">

        {{ $t('gas.content39') }}
        </p></div>
      <div data-s-97fbf3a8-0fef-4ec1-9248-59e05871cf95="" class="sd appear"><p
        data-s-c8e959c3-0ad2-471e-87f3-8ce971cb6f93="" data-r-0_52_3_c8e959c3-0ad2-471e-87f3-8ce971cb6f93=""
        class="text sd appear">

        {{ $t('gas.content40') }}
        <br>
        {{ $t('gas.content41') }}
        <br>
        {{ $t('gas.content42') }}
        <br>
      </p><a @click="handleClick" rel="noopener" target="_blank"
             data-s-dce70a58-0d3b-483d-ba7a-63684437b575="" class="sd appear"><p
        data-s-43c231ae-c160-45e1-be63-6aa3015788bc="" data-r-0_1_52_3_43c231ae-c160-45e1-be63-6aa3015788bc=""
        class="text sd appear">

        {{ $t('gas.content43') }}
        </p></a></div>
      <div data-s-4784bf51-b5b9-4969-b606-e03da6a68cd3="" class="sd appear"><p
        data-s-2d53d733-226d-48ca-8420-be3b2b5a2ccd="" data-r-0_53_3_2d53d733-226d-48ca-8420-be3b2b5a2ccd=""
        class="text sd appear">

        {{ $t('gas.content44') }}
        </p></div>
      <div data-s-a8e73c64-dd98-478f-9149-249cba772530="" class="sd appear">
        <div data-s-b0522f3a-caf7-4daf-b972-722c2a60bf52="" class="sd appear"><a
          @click="handleClick" rel="noopener" target="_blank"
          data-s-3c0edfe1-6de5-4073-a159-c02c40b89f52="" class="sd appear"><p
          data-s-73903ab8-7066-4bd1-b1e9-bd7be960026f="" data-r-0_0_0_54_3_73903ab8-7066-4bd1-b1e9-bd7be960026f=""
          class="text sd appear">

          {{ $t('gas.content45') }}
          </p></a><a
          @click="handleClick" rel="noopener" target="_blank"
          data-s-e146313b-d92f-43f7-9d01-4f3950c58198="" class="sd appear"><p
          data-s-c460ab68-b6cb-4d25-b332-2232d95e393c="" data-r-0_1_0_54_3_c460ab68-b6cb-4d25-b332-2232d95e393c=""
          class="text sd appear">

          {{ $t('gas.content46') }}
          </p></a></div>
        <a @click="handleClick" rel="noopener" target="_blank"
           data-s-d3f97724-bcaa-4faa-86a5-99cc566348b0="" class="sd appear"><p
          data-s-3b4689da-268e-47f7-a184-e141fa45e206="" data-r-0_1_54_3_3b4689da-268e-47f7-a184-e141fa45e206=""
          class="text sd appear">

          {{ $t('gas.content47') }}
          </p></a></div>
      <div data-s-b4860e9d-e0c0-43ac-930c-0c90d59508cc="" class="sd appear"><p
        data-s-e2a77f08-fef0-4a4b-a566-04b3842e8db5="" data-r-0_55_3_e2a77f08-fef0-4a4b-a566-04b3842e8db5=""
        class="text sd appear">

        {{ $t('gas.content48') }}
        </p></div>
      <div data-s-5cccba0e-2309-45cb-9352-cfef15925bbf="" class="sd appear"><p
        data-s-6a89c66a-c483-4e19-b4bb-f54a6f1c90e9="" data-r-0_56_3_6a89c66a-c483-4e19-b4bb-f54a6f1c90e9=""
        class="text sd appear">

        {{ $t('gas.content49') }}
        </p>
        <p data-s-3942e7b5-e35b-4089-991e-d1e7c30aae43="" data-r-1_56_3_3942e7b5-e35b-4089-991e-d1e7c30aae43=""
           class="text sd appear">

           {{ $t('gas.content50') }}
           <br></p>
        <p data-s-4504fa05-ceda-4f32-8c80-efcb0ad9c6d3="" data-r-2_56_3_4504fa05-ceda-4f32-8c80-efcb0ad9c6d3=""
           class="text sd appear">

           {{ $t('gas.content51') }}
           <br>
        </p></div>
      <div data-s-ea870404-6f57-4773-a26f-ebbb3c7a8a29="" class="sd appear"><p
        data-s-905f5059-4602-4d48-99b6-21c6b96c423d="" data-r-0_57_3_905f5059-4602-4d48-99b6-21c6b96c423d=""
        class="text sd appear">

        {{ $t('gas.content52') }}
        </p>
        <p data-s-3bb4e789-67ba-4e56-b6cf-33d181a9e425="" data-r-1_57_3_3bb4e789-67ba-4e56-b6cf-33d181a9e425=""
           class="text sd appear">

           {{ $t('gas.content53') }}
           <br></p></div>
      <div data-s-f953f961-f068-4781-be76-4f7c467fc0bf="" class="sd appear"><p
        data-s-28d412da-6144-40ea-98c0-28481e3151a4="" data-r-0_58_3_28d412da-6144-40ea-98c0-28481e3151a4=""
        class="text sd appear">

        {{ $t('gas.content54') }}
        </p>
        <p data-s-df207f71-714d-47c8-b92b-47fb273f08bb="" data-r-1_58_3_df207f71-714d-47c8-b92b-47fb273f08bb=""
           class="text sd appear">

           {{ $t('gas.content55') }}
           <br></p></div>
      <div data-s-e04552c9-dfb9-4480-b221-abc772ff2255="" class="sd appear"><p
        data-s-387480f8-483f-455c-a5ba-fd218f30a18d="" data-r-0_59_3_387480f8-483f-455c-a5ba-fd218f30a18d=""
        class="text sd appear">

        {{ $t('gas.content56') }}
        <br></p>
        <p data-s-14a70130-cf81-4cf9-bd56-9ada47a6c736="" data-r-1_59_3_14a70130-cf81-4cf9-bd56-9ada47a6c736=""
           class="text sd appear">

           {{ $t('gas.content57') }}
           <br>
        </p><a @click="handleClick" rel="noopener" target="_blank"
               data-s-a4c4b52f-f542-4801-a306-834872dc6bff="" data-r-2_59_3_a4c4b52f-f542-4801-a306-834872dc6bff=""
               class="text sd appear">

               {{ $t('gas.content58') }}
               </a></div>
      <div data-s-ca939805-a8e2-4882-b4de-5837e5f5c199="" class="sd appear"><p
        data-s-6388bca3-4e33-48c9-b83e-1beecb03ace6="" data-r-0_60_3_6388bca3-4e33-48c9-b83e-1beecb03ace6=""
        class="text sd appear">

        {{ $t('gas.content59') }}
        </p></div>
      <div data-s-49c49c18-bd5f-4156-be76-8fde56a9ff78="" class="sd appear"><p
        data-s-d4740428-cf6a-48e1-af8c-2aaba512a814="" data-r-0_61_3_d4740428-cf6a-48e1-af8c-2aaba512a814=""
        class="text sd appear">

        {{ $t('gas.content60') }}
        </p>
        <p data-s-5e29a359-5bbc-42a8-a19b-a25af0ba52a4="" data-r-1_61_3_5e29a359-5bbc-42a8-a19b-a25af0ba52a4=""
           class="text sd appear">

           {{ $t('gas.content61') }}
           </p></div>
      <div data-s-8fe2da14-e673-49e1-b114-bc8b36ae296d="" class="sd appear"><p
        data-s-bd6172db-148e-4544-8fb1-aafe6c315385="" data-r-0_62_3_bd6172db-148e-4544-8fb1-aafe6c315385=""
        class="text sd appear">

        {{ $t('gas.content62') }}
        </p>
        <p data-s-a7beb1c1-c72a-494f-93d1-2be2b800b130="" data-r-1_62_3_a7beb1c1-c72a-494f-93d1-2be2b800b130=""
           class="text sd appear">
        {{ $t('gas.content69') }}
           </p><a
          @click="handleClick" rel="noopener" target="_blank"
          data-s-437882c7-98ef-4340-aad6-55df55d6c2e3="" class="sd appear"><p
          data-s-703d4802-c798-47b1-a314-3a52eb666728="" data-r-0_2_62_3_703d4802-c798-47b1-a314-3a52eb666728=""
          class="text sd appear">

          {{ $t('gas.content63') }}
          </p></a></div>
      <div data-s-9298e5cb-5558-48c1-93e7-52fa93f9c86f="" class="sd appear"><p
        data-s-850131a9-6cfe-4728-ae79-fbdd94ba8cbb="" data-r-0_63_3_850131a9-6cfe-4728-ae79-fbdd94ba8cbb=""
        class="text sd appear">

        {{ $t('gas.content64') }}
        </p>
        <p data-s-4d25c553-ef3a-419b-be73-d168459d2f48="" data-r-1_63_3_4d25c553-ef3a-419b-be73-d168459d2f48=""
           class="text sd appear">

           {{ $t('gas.content65') }}
           </p></div>
      <div data-s-16e25ab1-0635-467f-8cb8-2237cf32a9bb="" class="sd appear"><p
        data-s-dc917a4d-661f-4d79-b129-e6e7f45d0c0a="" data-r-0_64_3_dc917a4d-661f-4d79-b129-e6e7f45d0c0a=""
        class="text sd appear">

        {{ $t('gas.content66') }}
        <br></p>
        <p data-s-bf9fc9ab-9f4c-43d4-a0fa-f243a0d3cc54="" data-r-1_64_3_bf9fc9ab-9f4c-43d4-a0fa-f243a0d3cc54=""
           class="text sd appear">

          {{ $t('gas.content67') }}
          </p>
      </div>
      <div data-s-59fd79ff-9163-4e5a-8bb1-152c878aaa6f="" class="sd appear">
        <div data-s-2cdfec5c-c26b-4609-bf68-dae8ca13593b="" class="sd appear"><img
          data-s-969ac67e-0cd6-4251-89d6-2719a1e12e6d="" class="sd appear" alt=""
          src="https://coincheck.com/images/lp/gas/fnj-logo.png" loading="lazy">
          </div>
        <div data-s-e4db0e9a-ad8f-4279-bfdd-5c2a1f4e6c86="" class="sd appear"><p
          data-s-98b7bf77-374e-40ac-8dc7-b79176347eee="" data-r-0_1_65_3_98b7bf77-374e-40ac-8dc7-b79176347eee=""
          class="text sd appear">
          {{ $t('gas.content68') }}
          </p></div>
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
} @property --g-color-0 {
  syntax: "<color>";
  inherits: false;
  initial-value: transparent
} @property --g-position-0 {
  syntax: "<percentage>";
  inherits: false;
  initial-value: .01%
} @property --g-color-1 {
  syntax: "<color>";
  inherits: false;
  initial-value: transparent
} @property --g-position-1 {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%
} @property --g-color-2 {
  syntax: "<color>";
  inherits: false;
  initial-value: transparent
} @property --g-position-2 {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%
} @property --g-color-3 {
  syntax: "<color>";
  inherits: false;
  initial-value: transparent
} @property --g-position-3 {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%
} @property --g-color-4 {
  syntax: "<color>";
  inherits: false;
  initial-value: transparent
} @property --g-position-4 {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%
} @property --g-color-5 {
  syntax: "<color>";
  inherits: false;
  initial-value: transparent
} @property --g-position-5 {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%
} @property --g-color-6 {
  syntax: "<color>";
  inherits: false;
  initial-value: transparent
} @property --g-position-6 {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%
} @property --g-color-7 {
  syntax: "<color>";
  inherits: false;
  initial-value: transparent
} @property --g-position-7 {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%
} @property --g-color-8 {
  syntax: "<color>";
  inherits: false;
  initial-value: transparent
} @property --g-position-8 {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%
} @property --g-color-9 {
  syntax: "<color>";
  inherits: false;
  initial-value: transparent
} @property --g-position-9 {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%
} @property --g-color-10 {
  syntax: "<color>";
  inherits: false;
  initial-value: transparent
} @property --g-position-10 {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%
} @property --g-color-11 {
  syntax: "<color>";
  inherits: false;
  initial-value: transparent
} @property --g-position-11 {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%
}
.snackbar[data-v-3129703d] {
  align-items: center;
  background: #fff;
  border: 1px solid #ededed;
  border-radius: 6px;
  box-shadow: 0 16px 48px -8px rgba(0, 0, 0, .08), 0 10px 25px -5px rgba(0, 0, 0, .11);
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: space-between;
  left: 50%;
  max-width: 90vw;
  padding: 16px 20px;
  position: fixed;
  top: 32px;
  transform: translateX(-50%);
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
  background-image: url(/_nuxt/close_circle.c7480f3c.svg)
}

.snackbar .convey.error .message[data-v-3129703d] {
  color: #f84f65
}

.snackbar .convey.success .icon[data-v-3129703d] {
  background-image: url(/_nuxt/round_check.0ebac23f.svg)
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

.sd[data-s-a37ecc77-0b5d-4495-905e-a5354865f9fb] {
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
  --g-color-0: rgb(255, 253, 242);
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

.sd[data-s-625f4e7c-245e-47e3-b3fc-a3c80fda8711] {
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
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-625f4e7c-245e-47e3-b3fc-a3c80fda8711] {
    margin: 0px 0px 0px 0px;
    padding: 0px 16px 0px 16px;
    width: 100%;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-625f4e7c-245e-47e3-b3fc-a3c80fda8711] {
    height: 54px;
    width: 100%;
    max-width: 100%;
  }
}

.sd[data-s-34b57369-1a88-4a3f-9134-6b7451a21654] {
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

.sd[data-s-34b57369-1a88-4a3f-9134-6b7451a21654]:hover {
  flex: none;
  padding: 0px 0px 0px;
  transform: scale(1.1, 1.1);
}

@media screen and (max-width: 890px) {
  .sd[data-s-34b57369-1a88-4a3f-9134-6b7451a21654] {
    display: flex;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-34b57369-1a88-4a3f-9134-6b7451a21654] {
    display: flex;
    flex: none;
    height: auto;
    margin: 0px 0px 0px 0px;
    width: 30%;
    max-width: 30%;
  }
}

.sd[data-s-de0a0f37-c765-423e-9768-2399dca33f6d] {
  flex: none;
  height: auto;
  margin: 0px 0px 0px 0px;
  width: 192px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-de0a0f37-c765-423e-9768-2399dca33f6d] {
    margin: 0px 0px 0px 0px;
  }
}

.sd[data-s-18012583-0f26-43e5-9cf7-78d1b267b3f6] {
  align-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.0);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: auto;
  justify-content: center;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  width: auto;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-18012583-0f26-43e5-9cf7-78d1b267b3f6] {
    padding: 0px 30px 0px 0px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-18012583-0f26-43e5-9cf7-78d1b267b3f6] {
    height: auto;
    padding: 0px 0px 0px 0px;
    width: auto;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-18012583-0f26-43e5-9cf7-78d1b267b3f6] {
    height: auto;
    padding: 0px 1px 0px 0px;
    width: auto;
  }
}

.sd[data-s-25056bf3-68d6-4df7-b1ba-1e39e7fbd611] {
  align-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.0);
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
}

.sd[data-s-25056bf3-68d6-4df7-b1ba-1e39e7fbd611]:hover {
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
  .sd[data-s-25056bf3-68d6-4df7-b1ba-1e39e7fbd611] {
    display: flex;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-25056bf3-68d6-4df7-b1ba-1e39e7fbd611] {
    display: none;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-25056bf3-68d6-4df7-b1ba-1e39e7fbd611] {
    display: none;
  }
}

.sd[data-s-87777479-2622-4a6b-9b41-05e81684dd2f] {
  color: #9e3f23;
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

.sd[data-s-784d4660-fcdf-41fa-9a2d-852780cf2fb8] {
  align-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.0);
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: auto;
  justify-content: center;
  margin: 0px 0px 0px 0px;
  position: relative;
  width: auto;
  z-index: 5;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-784d4660-fcdf-41fa-9a2d-852780cf2fb8] {
    background: rgba(0, 0, 0, 0.0);
    display: flex;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-784d4660-fcdf-41fa-9a2d-852780cf2fb8] {
    display: flex;
    margin: 0px 15px 0px 0px;
    max-width: calc(100% - 15px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-784d4660-fcdf-41fa-9a2d-852780cf2fb8] {
    display: flex;
    margin: 0px 10px 0px 0px;
    max-width: calc(100% - 10px);
  }
}

.sd[data-s-2c7a0f47-45ac-49a2-935f-6c260654d526] {
  color: rgb(158, 63, 35);
  display: flex;
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

@media screen and (max-width: 890px) {
  .sd[data-s-2c7a0f47-45ac-49a2-935f-6c260654d526] {
    color: rgb(158, 63, 35);
    display: flex;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-2c7a0f47-45ac-49a2-935f-6c260654d526] {
    display: flex;
    font-size: 14px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-2c7a0f47-45ac-49a2-935f-6c260654d526] {
    display: flex;
    font-size: 10px;
  }
}

.sd[data-s-35297478-2ed8-4655-881b-d33a6e345f42] {
  color: rgb(158, 63, 35);
  font-size: 24px;
  height: 18px;
  width: 24px;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-35297478-2ed8-4655-881b-d33a6e345f42] {
    color: rgb(158, 63, 35);
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-35297478-2ed8-4655-881b-d33a6e345f42] {
    font-size: 14px;
    width: auto;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-35297478-2ed8-4655-881b-d33a6e345f42] {
    font-size: 10px;
  }
}

.sd[data-s-63cca2ce-c5b5-4d74-903c-0c52968dfcab] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  bottom: 0px;
  display: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 100%;
  justify-content: center;
  left: auto;
  margin: 0 0 0 0;
  position: absolute;
  right: 35px;
  top: 0px;
  width: 226px;
  z-index: 5;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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

.sd[data-s-63cca2ce-c5b5-4d74-903c-0c52968dfcab]:hover {
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
  .sd[data-s-63cca2ce-c5b5-4d74-903c-0c52968dfcab] {
    display: none;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-63cca2ce-c5b5-4d74-903c-0c52968dfcab] {
    display: none;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-63cca2ce-c5b5-4d74-903c-0c52968dfcab] {
    display: none;
  }
}

.sd[data-s-7adb42e9-60b9-47f9-ba84-836b18395c92] {
  color: rgb(158, 63, 35);
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

.sd[data-s-1a87fac4-74af-4ab4-a9de-02d98904cdd1] {
  align-content: center;
  align-items: center;
  background: rgb(253, 246, 227);
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 663px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 100%;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-1a87fac4-74af-4ab4-a9de-02d98904cdd1] {
    display: flex;
    flex: none;
    height: 1099px;
    width: 100%;
    max-width: 100%;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-1a87fac4-74af-4ab4-a9de-02d98904cdd1] {
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
  .sd[data-s-1a87fac4-74af-4ab4-a9de-02d98904cdd1] {
    flex: none;
    height: auto;
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
  }
}

.sd[data-s-dfbd1752-e426-4b3a-86e8-056b2add410e] {
  align-content: center;
  align-items: center;
  background: rgb(253, 246, 227);
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
  .sd[data-s-dfbd1752-e426-4b3a-86e8-056b2add410e] {
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
  .sd[data-s-dfbd1752-e426-4b3a-86e8-056b2add410e] {
    background: rgb(253, 246, 227);
    display: flex;
    height: auto;
    padding: 0px 0px 1px 0px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-dfbd1752-e426-4b3a-86e8-056b2add410e] {
    flex: none;
    height: auto;
    padding: 0px 0px 1px 0px;
  }
}

.sd[data-s-b58e999a-7bd9-4778-8f04-6924ca0be6a3] {
  display: none;
  height: auto;
  width: 160px;
  max-width: 100%;
}

.sd[data-s-b58e999a-7bd9-4778-8f04-6924ca0be6a3]:before {
}

@media screen and (max-width: 890px) {
  .sd[data-s-b58e999a-7bd9-4778-8f04-6924ca0be6a3] {
    display: flex;
    flex: none;
    height: 533px;
    width: auto;
    max-width: 100%;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-b58e999a-7bd9-4778-8f04-6924ca0be6a3] {
    display: flex;
    height: 336px;
    margin: 0px 20px 0px 20px;
    width: calc(100% - 40px);
    max-width: calc(100% - 40px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-b58e999a-7bd9-4778-8f04-6924ca0be6a3]:before {
    background-size: contain;
  }
  .sd[data-s-b58e999a-7bd9-4778-8f04-6924ca0be6a3] {
    height: 226px;
    width: calc(100% - 40px);
    max-width: calc(100% - 40px);
  }
}

.sd[data-s-0a1c851d-401b-4977-9822-a561bd526d86] {
  color: rgb(158, 63, 35);
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
  .sd[data-s-0a1c851d-401b-4977-9822-a561bd526d86] {
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
  .sd[data-s-0a1c851d-401b-4977-9822-a561bd526d86] {
    display: none;
    height: 381px;
    padding: 0px 30px 0px 30px;
    width: 100%;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-0a1c851d-401b-4977-9822-a561bd526d86] {
    display: none;
    font-size: 32px;
    height: 135px;
    padding: 0px 10px 0px 10px;
    width: 100%;
    max-width: 100%;
  }
}

.sd[data-s-f5502410-61a1-4ea6-8674-f84808eac3d7] {
  background: #EEEEEE;
  display: none;
  height: 50px;
  width: 50px;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-f5502410-61a1-4ea6-8674-f84808eac3d7] {
    display: none;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-f5502410-61a1-4ea6-8674-f84808eac3d7] {
    align-content: center;
    align-items: center;
    background: rgb(253, 246, 227);
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
  .sd[data-s-f5502410-61a1-4ea6-8674-f84808eac3d7] {
    display: flex;
    flex: none;
    padding: 0px 0px 0px 20px;
    width: 100%;
    max-width: 100%;
  }
}

.sd[data-s-a8c6a1a3-45f4-4b7a-b00c-bd702ac89538] {
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
  .sd[data-s-a8c6a1a3-45f4-4b7a-b00c-bd702ac89538] {
    color: rgb(158, 63, 35);
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
  .sd[data-s-a8c6a1a3-45f4-4b7a-b00c-bd702ac89538] {
    font-size: 28px;
    height: 153px;
  }
}

.sd[data-s-f8c96819-1f48-46a4-9dfe-1994b1bcf97f] {
  align-content: center;
  align-items: center;
  background: rgb(241, 79, 0);
  border-radius: 12px;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 80px;
  justify-content: center;
  margin: 20px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  width: 90%;
  max-width: 90%;
}

.sd[data-s-f8c96819-1f48-46a4-9dfe-1994b1bcf97f]:hover {
  background: rgba(241, 79, 0, 0.5);
  flex: none;
}

@media screen and (max-width: 890px) {
  .sd[data-s-f8c96819-1f48-46a4-9dfe-1994b1bcf97f] {
    margin: 30px 0px 0px 0px;
    width: 90%;
    max-width: 90%;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-f8c96819-1f48-46a4-9dfe-1994b1bcf97f] {
    flex-direction: column;
    flex-wrap: nowrap;
    margin: 30px 20px 0px 20px;
    width: calc(90% - 40px);
    max-width: calc(90% - 40px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-f8c96819-1f48-46a4-9dfe-1994b1bcf97f] {
    height: 56px;
    margin: 10px 30px 0px 30px;
    width: calc(90% - 60px);
    max-width: calc(90% - 60px);
  }
}

.sd[data-s-48689cdf-58ee-4b88-be64-38b28a9575a0] {
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

.sd[data-s-355c793f-9365-44aa-8764-9f3b06cee5a1] {
  align-content: center;
  align-items: center;
  background: rgb(253, 246, 227);
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
  .sd[data-s-355c793f-9365-44aa-8764-9f3b06cee5a1] {
    margin: 0px 0px 0px 0px;
  }
}

.sd[data-s-2ad73264-258d-494f-a984-18937eabbf7b] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 700;
  height: 20px;
  line-height: 1.4;
  text-align: center;
  text-decoration: none;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-2ad73264-258d-494f-a984-18937eabbf7b]:hover {
  color: rgba(0, 0, 0, 0.3);
}

@media screen and (max-width: 890px) {
  .sd[data-s-2ad73264-258d-494f-a984-18937eabbf7b]:hover {
    color: rgba(158, 63, 35, 0.5);
  }
  .sd[data-s-2ad73264-258d-494f-a984-18937eabbf7b] {
    height: auto;
    text-align: center;
    max-width: 100%;
    justify-content: center;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-2ad73264-258d-494f-a984-18937eabbf7b]:hover {
    color: rgba(158, 63, 35, 0.5);
  }
}

@media screen and (max-width: 320px) {

}

.sd[data-s-0364dec9-060b-4c47-afbd-1881ae915950] {
  align-content: flex-start;
  align-items: flex-start;
  background: rgba(0, 0, 0, 0.0);
  display: flex;
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
  .sd[data-s-0364dec9-060b-4c47-afbd-1881ae915950] {
    display: flex;
    margin: 0px 0px 0px 0px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-0364dec9-060b-4c47-afbd-1881ae915950] {
    display: none;
    padding: 0px 60px 0px 60px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-0364dec9-060b-4c47-afbd-1881ae915950] {
    display: none;
    padding: 0px 30px 0px 30px;
  }
}

.sd[data-s-65d7b99e-7c09-4d14-ad01-6f4317dc0f34] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-5143a57c-afe4-43e9-ae5a-6fa17bb0e849] {
  color: rgb(158, 63, 35);
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
  .sd[data-s-5143a57c-afe4-43e9-ae5a-6fa17bb0e849] {
    text-align: center;
    justify-content: center;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-5143a57c-afe4-43e9-ae5a-6fa17bb0e849] {
    text-align: left;
    justify-content: flex-start;
  }
}

.sd[data-s-c01ae96f-d813-4655-9a0b-6142b1f9a91b] {
  color: rgb(158, 63, 35);
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

.sd[data-s-c01ae96f-d813-4655-9a0b-6142b1f9a91b]:hover {
  color: #d9d9d9;
}

@media screen and (max-width: 890px) {
  .sd[data-s-c01ae96f-d813-4655-9a0b-6142b1f9a91b] {
    text-align: center;
    justify-content: center;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-c01ae96f-d813-4655-9a0b-6142b1f9a91b] {
    text-align: left;
    justify-content: flex-start;
  }
}

.sd[data-s-a7f03657-0fc7-4175-a5ae-986d00df4039] {
  color: rgb(158, 63, 35);
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
  .sd[data-s-a7f03657-0fc7-4175-a5ae-986d00df4039] {
    text-align: center;
    justify-content: center;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-a7f03657-0fc7-4175-a5ae-986d00df4039] {
    text-align: left;
    justify-content: flex-start;
  }
}

.sd[data-s-dc72f89d-4a9c-475f-a48e-4dccc11e4a65] {
  color: rgb(158, 63, 35);
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

.sd[data-s-dc72f89d-4a9c-475f-a48e-4dccc11e4a65]:hover {
  color: #d9d9d9;
}

@media screen and (max-width: 890px) {
  .sd[data-s-dc72f89d-4a9c-475f-a48e-4dccc11e4a65] {
    text-align: center;
    justify-content: center;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-dc72f89d-4a9c-475f-a48e-4dccc11e4a65] {
    text-align: left;
    justify-content: flex-start;
  }
}

.sd[data-s-2fb002fe-56a2-49cb-abf1-efefe1152c92] {
  color: rgb(158, 63, 35);
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
  .sd[data-s-2fb002fe-56a2-49cb-abf1-efefe1152c92] {
    text-align: center;
    justify-content: center;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-2fb002fe-56a2-49cb-abf1-efefe1152c92] {
    text-align: left;
    justify-content: flex-start;
  }
}

.sd[data-s-7465c868-d39e-4954-9137-164ea4e0d413] {
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
  .sd[data-s-7465c868-d39e-4954-9137-164ea4e0d413] {
    display: none;
    margin: 0px 0px 0px 0px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-7465c868-d39e-4954-9137-164ea4e0d413] {
    background: rgba(0, 0, 0, 0.0);
    display: flex;
    padding: 0px 60px 0px 60px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-7465c868-d39e-4954-9137-164ea4e0d413] {
    display: flex;
    padding: 0px 30px 0px 30px;
  }
}

.sd[data-s-e50ab3bc-6766-462d-8f34-d998536512b9] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-9696ce1e-6e7b-4579-9c1e-79c0ad5cca56] {
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
  .sd[data-s-9696ce1e-6e7b-4579-9c1e-79c0ad5cca56] {
    text-align: center;
    justify-content: center;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-9696ce1e-6e7b-4579-9c1e-79c0ad5cca56] {
    color: rgb(158, 63, 35);
    text-align: left;
    justify-content: flex-start;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-9696ce1e-6e7b-4579-9c1e-79c0ad5cca56] {
    font-size: 10px;
  }
}

.sd[data-s-01de9459-6635-4531-989c-bf9ee747e1c1] {
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

.sd[data-s-01de9459-6635-4531-989c-bf9ee747e1c1]:hover {
  color: #d9d9d9;
}

@media screen and (max-width: 890px) {
  .sd[data-s-01de9459-6635-4531-989c-bf9ee747e1c1] {
    text-align: center;
    justify-content: center;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-01de9459-6635-4531-989c-bf9ee747e1c1] {
    color: rgb(158, 63, 35);
    text-align: left;
    justify-content: flex-start;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-01de9459-6635-4531-989c-bf9ee747e1c1] {
    font-size: 10px;
  }
}

.sd[data-s-1b35ffd1-eec7-49b0-99d9-c56f2ff4a62e] {
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
  .sd[data-s-1b35ffd1-eec7-49b0-99d9-c56f2ff4a62e] {
    text-align: center;
    justify-content: center;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-1b35ffd1-eec7-49b0-99d9-c56f2ff4a62e] {
    color: rgb(158, 63, 35);
    text-align: left;
    justify-content: flex-start;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-1b35ffd1-eec7-49b0-99d9-c56f2ff4a62e] {
    font-size: 10px;
  }
}

.sd[data-s-c58a7e93-c58e-4c94-9e2c-fb1a8f3e5f74] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 320px) {
  .sd[data-s-c58a7e93-c58e-4c94-9e2c-fb1a8f3e5f74] {
    font-size: 10px;
  }
}

.sd[data-s-7a23ece8-b0bf-46a7-a37a-6d10cde440d3] {
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

.sd[data-s-7a23ece8-b0bf-46a7-a37a-6d10cde440d3]:hover {
  color: #d9d9d9;
}

@media screen and (max-width: 890px) {
  .sd[data-s-7a23ece8-b0bf-46a7-a37a-6d10cde440d3] {
    text-align: center;
    justify-content: center;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-7a23ece8-b0bf-46a7-a37a-6d10cde440d3] {
    color: rgb(158, 63, 35);
    text-align: left;
    justify-content: flex-start;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-7a23ece8-b0bf-46a7-a37a-6d10cde440d3] {
    font-size: 10px;
  }
}

.sd[data-s-645fcb09-ca67-4576-9d63-7a98b503501f] {
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
  .sd[data-s-645fcb09-ca67-4576-9d63-7a98b503501f] {
    text-align: center;
    justify-content: center;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-645fcb09-ca67-4576-9d63-7a98b503501f] {
    color: rgb(158, 63, 35);
    text-align: left;
    justify-content: flex-start;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-645fcb09-ca67-4576-9d63-7a98b503501f] {
    font-size: 10px;
  }
}

.sd[data-s-033aed06-6612-4372-8816-92cac4808954] {
  align-content: center;
  align-items: center;
  background: rgb(253, 246, 227);
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
  .sd[data-s-033aed06-6612-4372-8816-92cac4808954] {
    display: none;
    flex: none;
    height: 275px;
    margin: 0px 0px 0px 0px;
    width: 347px;
    max-width: 100%;
  }
}

.sd[data-s-7bc2df94-f337-4888-9a43-0c5f8aa94bc5] {
  height: auto;
  margin: 0px 0px 45px 0px;
  width: 100%;
  max-width: 100%;
}

.sd[data-s-9893622b-76f7-4b96-a86b-face03641463] {
  background: #EEEEEE;
  height: 100%;
  margin: 0px 71px 0px 0px;
  padding: 0px 0px 0px 0px;
  width: 523px;
  max-width: calc(100% - 71px);
}

.sd[data-s-e1a68eb9-3ba6-41ac-b068-8d31e2f22f38] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  display: flex;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: auto;
  justify-content: flex-start;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 160px 0px;
  width: auto;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-e1a68eb9-3ba6-41ac-b068-8d31e2f22f38] {
    display: flex;
    flex: none;
    height: auto;
    width: 100%;
    max-width: 100%;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-e1a68eb9-3ba6-41ac-b068-8d31e2f22f38] {
    display: flex;
    flex: none;
    height: auto;
    margin: 0px 0px 74px 0px;
    width: auto;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-e1a68eb9-3ba6-41ac-b068-8d31e2f22f38] {
    display: flex;
    flex: none;
    height: auto;
  }
}

.sd[data-s-94fe6a9c-fe78-4a5c-a1cc-801e6eca8ac4] {
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
  .sd[data-s-94fe6a9c-fe78-4a5c-a1cc-801e6eca8ac4] {
    display: none;
    flex: none;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-94fe6a9c-fe78-4a5c-a1cc-801e6eca8ac4] {
    display: none;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-94fe6a9c-fe78-4a5c-a1cc-801e6eca8ac4] {
    display: none;
  }
}

.sd[data-s-9041b019-772c-4725-b570-da108230e002] {
  flex: none;
  height: 130px;
  opacity: 0.4;
  width: 150px;
  max-width: 100%;
}

.sd[data-s-9f08a71c-171a-49f3-ac91-725d30de2016] {
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

.sd[data-s-bb2c4ebb-ad9b-4d02-bb43-e516c2f03063] {
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

.sd[data-s-837d18a3-e502-4039-8a7a-abcbd619d480] {
  align-content: center;
  align-items: center;
  display: none;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 890px) {
  .sd[data-s-837d18a3-e502-4039-8a7a-abcbd619d480] {
    display: flex;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-837d18a3-e502-4039-8a7a-abcbd619d480] {
    display: flex;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-837d18a3-e502-4039-8a7a-abcbd619d480] {
    display: none;
  }
}

.sd[data-s-c9d25a1d-ac63-480b-85e3-f6b4b70a7efc] {
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
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-c9d25a1d-ac63-480b-85e3-f6b4b70a7efc] {
    height: 59px;
    width: 100%;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-c9d25a1d-ac63-480b-85e3-f6b4b70a7efc] {
    margin: 20px 0px 19px 0px;
    width: 100%;
    max-width: 100%;
  }
}

.sd[data-s-d04a1c94-c3a2-4503-9e9c-be1b444355df] {
  color: rgb(158, 63, 35);
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
  .sd[data-s-d04a1c94-c3a2-4503-9e9c-be1b444355df] {
    font-size: 24px;
    width: 100%;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-d04a1c94-c3a2-4503-9e9c-be1b444355df] {
    font-size: 24px;
    width: 100%;
  }
}

.sd[data-s-817cf854-57ce-4448-bd6e-f6610a7c822b] {
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
  .sd[data-s-817cf854-57ce-4448-bd6e-f6610a7c822b] {
    margin: 0px 0px 0px 0px;
    width: 768px;
    max-width: 100%;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-817cf854-57ce-4448-bd6e-f6610a7c822b] {
    margin: 0px 20px 0px 20px;
    max-width: calc(100% - 40px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-817cf854-57ce-4448-bd6e-f6610a7c822b] {
    margin: 0px 20px 0px 20px;
  }
}

.sd[data-s-fe9100f7-e107-4f00-993b-6f19871c53f7] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
  width: 395px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-fe9100f7-e107-4f00-993b-6f19871c53f7] {
    flex: none;
    height: auto;
    width: auto;
    max-width: 100%;
  }
}

.sd[data-s-cde69f08-7b1b-47c6-8418-9e78f413bec8] {
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
  .sd[data-s-cde69f08-7b1b-47c6-8418-9e78f413bec8] {
    width: 370px;
    max-width: 100%;
  }
}

.sd[data-s-37be3576-82aa-4501-9230-006e09cfd46c] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 8px solid rgb(250, 243, 230);
  border-left: 8px solid rgb(250, 243, 230);
  border-radius: 24px;
  border-right: 8px solid rgb(250, 243, 230);
  border-top: 8px solid rgb(250, 243, 230);
  flex-direction: column;
  flex-wrap: nowrap;
  height: 440px;
  justify-content: center;
  margin: 0px 15px 0px 0px;
  padding: 0px 0px 0px 0px;
  width: 358px;
  max-width: calc(100% - 15px);
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-37be3576-82aa-4501-9230-006e09cfd46c] {
    margin: 0px 0px 0px 0px;
    max-width: 100%;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-37be3576-82aa-4501-9230-006e09cfd46c] {
    margin: 0px 0px 20px 0px;
    max-width: 100%;
  }
}

.sd[data-s-a25f1e6f-1088-4d3b-995b-07fa04e6a676] {
  color: rgb(158, 63, 35);
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

.sd[data-s-06a2554d-2e24-4dd3-89a1-e4685b01a0a3] {
  height: 242px;
  width: 252px;
  max-width: 100%;
}

.sd[data-s-da91dbf9-7e00-43ef-a165-10bc8047de3e] {
  color: rgb(158, 63, 35);
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

.sd[data-s-b7def8a8-b90b-4aa5-9793-d15b2fd3c717] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 12px 0px 0px 0px;
  text-align: center;
  width: 279px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 320px) {
  .sd[data-s-b7def8a8-b90b-4aa5-9793-d15b2fd3c717] {
    padding: 0px 20px 0px 20px;
  }
}

.sd[data-s-79624cc0-5c6e-4b6b-a471-ec57afade229] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 8px solid rgb(250, 243, 230);
  border-left: 8px solid rgb(250, 243, 230);
  border-radius: 24px;
  border-right: 8px solid rgb(250, 243, 230);
  border-top: 8px solid rgb(250, 243, 230);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 440px;
  justify-content: center;
  margin: 0px 0px 0px 15px;
  padding: 0px 0px 0px 0px;
  width: 358px;
  max-width: calc(100% - 15px);
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-79624cc0-5c6e-4b6b-a471-ec57afade229] {
    flex: none;
    margin: 0px 0px 0px 0px;
    max-width: 100%;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-79624cc0-5c6e-4b6b-a471-ec57afade229] {
    display: none;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-79624cc0-5c6e-4b6b-a471-ec57afade229] {
    display: none;
  }
}

.sd[data-s-d7cc535e-5b7a-4d4a-ab87-cbaf79b3e099] {
  color: rgb(158, 63, 35);
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

.sd[data-s-9d3b46d5-2ddc-4ba1-b6a2-dcbe43f89546] {
  height: auto;
  width: 252px;
  max-width: 100%;
}

.sd[data-s-5961091d-b368-4f15-a19e-411e9e6b7073] {
  color: rgb(158, 63, 35);
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

.sd[data-s-59e7aee9-494e-4ee1-b5b6-4f7a8ef52f03] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 12px 0px 0px 0px;
  text-align: center;
  width: 269px;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-5c2df289-fa67-4503-9abb-d8f95ca79b87] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 8px solid rgb(250, 243, 230);
  border-left: 8px solid rgb(250, 243, 230);
  border-radius: 24px;
  border-right: 8px solid rgb(250, 243, 230);
  border-top: 8px solid rgb(250, 243, 230);
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
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-5c2df289-fa67-4503-9abb-d8f95ca79b87] {
    display: none;
    flex: none;
    margin: 0px 0px 0px 0px;
    max-width: 100%;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-5c2df289-fa67-4503-9abb-d8f95ca79b87] {
    display: flex;
    margin: 0px 20px 0px 20px;
    max-width: calc(100% - 40px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-5c2df289-fa67-4503-9abb-d8f95ca79b87] {
    display: flex;
  }
}

.sd[data-s-a56c68db-7abe-4edf-87ee-2b295b99dbac] {
  color: rgb(158, 63, 35);
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

.sd[data-s-9b86f961-c0f1-4582-aa73-55fc602c96db] {
  height: 242px;
  width: 252px;
  max-width: 100%;
}

.sd[data-s-c1964ed4-7799-4da5-bc33-247d9910cd2a] {
  color: rgb(158, 63, 35);
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

.sd[data-s-cc671be7-5533-45aa-a28f-6fb2af88599d] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 12px 0px 0px 0px;
  text-align: center;
  width: 269px;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-ecd63421-cbc6-470a-8466-63afe28e1ae6] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: auto;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: auto;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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

.sd[data-s-1d782d73-cf41-4195-86fc-5e542e89d1de] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 50px 0px 0px 0px;
  padding: 0px 50px 0px 50px;
  text-align: left;
  width: 100%;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-4fb7a4cd-fd0b-4711-b7a3-2bb96a607533] {
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
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-4fb7a4cd-fd0b-4711-b7a3-2bb96a607533] {
    height: 64px;
    margin: 20px 0px 0px 0px;
    padding: 0px 30px 0px 30px;
    width: 100%;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-4fb7a4cd-fd0b-4711-b7a3-2bb96a607533] {
    height: 83px;
    margin: 0px 0px 0px 0px;
    padding: 0px 30px 0px 30px;
    width: 100%;
    max-width: 100%;
  }
}

.sd[data-s-7d4e919b-8d5a-4c00-ad6d-231a1a5d4dc2] {
  color: rgb(158, 63, 35);
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
  .sd[data-s-7d4e919b-8d5a-4c00-ad6d-231a1a5d4dc2] {
    font-size: 24px;
    width: 100%;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-7d4e919b-8d5a-4c00-ad6d-231a1a5d4dc2] {
    font-size: 24px;
    width: 100%;
  }
}

.sd[data-s-676e301e-3d1d-435f-8093-47b6e4aed3e0] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-58451f75-2db7-4475-9d84-83f1658e94ae] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 890px) {
  .sd[data-s-58451f75-2db7-4475-9d84-83f1658e94ae] {
    flex-direction: row;
    flex-wrap: wrap;
  }
}

.sd[data-s-0f679322-b754-427a-b53b-b5b2af034e74] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  display: flex;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 223.19px;
  justify-content: flex-start;
  margin: 0px 50px 0px 50px;
  width: 240px;
  max-width: calc(100% - 100px);
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-0f679322-b754-427a-b53b-b5b2af034e74] {
    display: flex;
    flex: none;
    flex-direction: column;
    flex-wrap: nowrap;
    margin: 0px 15px 0px 0px;
    width: 233px;
    max-width: calc(100% - 15px);
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-0f679322-b754-427a-b53b-b5b2af034e74] {
    display: flex;
    margin: 0px 0px 0px 0px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-0f679322-b754-427a-b53b-b5b2af034e74] {
    display: flex;
    flex: none;
    height: 50%;
    max-width: 100%;
  }
}

.sd[data-s-13d6982b-6a58-4059-abce-6a3fb4df1c60] {
  flex: none;
  height: 130px;
  opacity: 1;
  width: 150px;
  max-width: 100%;
}

.sd[data-s-d6918d55-d620-4fc5-8dd2-b3798ae71739] {
  color: rgb(158, 63, 35);
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

.sd[data-s-5e5ed02b-e2ef-4d0b-8989-6fa87c2bc7ec] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 400;
  height: 68px;
  line-height: 1.4;
  margin: 0px 0px 0px 0px;
  text-align: center;
  width: 100%;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 890px) {
  .sd[data-s-5e5ed02b-e2ef-4d0b-8989-6fa87c2bc7ec] {
    width: 194px;
    max-width: 100%;
  }
}

.sd[data-s-52a44394-61d3-418a-84be-bb20e88315a9] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 890px) {
  .sd[data-s-52a44394-61d3-418a-84be-bb20e88315a9] {
    display: flex;
    margin: 0px 0px 0px 15px;
    width: 494px;
    max-width: calc(100% - 15px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-52a44394-61d3-418a-84be-bb20e88315a9] {
    flex: none;
    height: auto;
    margin: 0px 0px 0px 0px;
    max-width: 100%;
  }
}

.sd[data-s-0558c05f-5523-4d04-8cc8-2e7641309e50] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  display: flex;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 100%;
  justify-content: flex-start;
  margin: 0px 50px 0px 50px;
  width: 240px;
  max-width: calc(100% - 100px);
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-0558c05f-5523-4d04-8cc8-2e7641309e50] {
    display: flex;
    flex: none;
    height: 223.19px;
    justify-content: flex-start;
    margin: 0px 15px 0px 0px;
    width: calc(50% - 15px);
    max-width: calc(50% - 15px);
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-0558c05f-5523-4d04-8cc8-2e7641309e50] {
    display: flex;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-0558c05f-5523-4d04-8cc8-2e7641309e50] {
    flex: none;
    height: 50%;
    margin: 0px 0px 0px 0px;
    width: 211px;
    max-width: 100%;
  }
}

.sd[data-s-1fb6bfe1-acdf-4181-a495-a6731c0be3e7] {
  flex: none;
  height: 130px;
  opacity: 1;
  width: 150px;
  max-width: 100%;
}

.sd[data-s-5921d50c-1bdc-43c8-99ec-ce6de357eacb] {
  color: rgb(158, 63, 35);
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

.sd[data-s-a9aa3fad-2392-44bc-9ae2-ad51c508df30] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 400;
  height: 68px;
  line-height: 1.4;
  margin: 0px 0px 0px 0px;
  text-align: center;
  width: 100%;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 890px) {
  .sd[data-s-a9aa3fad-2392-44bc-9ae2-ad51c508df30] {
    width: 203px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-a9aa3fad-2392-44bc-9ae2-ad51c508df30] {
    width: 100%;
    max-width: 100%;
  }
}

.sd[data-s-0003de53-30e0-4cca-9597-19803df01de9] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 100%;
  justify-content: flex-start;
  margin: 0px 50px 0px 50px;
  width: 240px;
  max-width: calc(100% - 100px);
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-0003de53-30e0-4cca-9597-19803df01de9] {
    display: flex;
    margin: 0px 15px 0px 15px;
    max-width: calc(100% - 30px);
    height: 100%;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-0003de53-30e0-4cca-9597-19803df01de9] {
    display: none;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-0003de53-30e0-4cca-9597-19803df01de9] {
    display: none;
  }
}

.sd[data-s-1bcc3714-1196-4020-9cae-f3a4ebe3cefc] {
  flex: none;
  height: 130px;
  opacity: 1;
  width: 150px;
  max-width: 100%;
}

.sd[data-s-108ab89e-a305-4451-8253-7e2c9dce370e] {
  color: rgb(158, 63, 35);
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

.sd[data-s-bc6d1be8-df80-47d5-b29a-ff4bcafe9463] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 400;
  height: 68px;
  line-height: 1.4;
  margin: 0px 0px 0px 0px;
  text-align: center;
  width: 100%;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 890px) {
  .sd[data-s-bc6d1be8-df80-47d5-b29a-ff4bcafe9463] {
    width: 206px;
    max-width: 100%;
  }
}

.sd[data-s-9a258a79-71a4-4f34-8600-034deb8c443e] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: auto;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: auto;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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

.sd[data-s-86fdf011-4504-4b79-aff4-5f4bf1e92429] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  display: none;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 100%;
  justify-content: flex-start;
  margin: 0px 50px 0px 50px;
  width: 240px;
  max-width: calc(100% - 100px);
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-86fdf011-4504-4b79-aff4-5f4bf1e92429] {
    display: none;
    margin: 0px 15px 0px 15px;
    max-width: calc(100% - 30px);
    height: 100%;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-86fdf011-4504-4b79-aff4-5f4bf1e92429] {
    display: flex;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-86fdf011-4504-4b79-aff4-5f4bf1e92429] {
    display: flex;
    margin: 0px 0px 0px 0px;
    max-width: 100%;
    height: 100%;
  }
}

.sd[data-s-1dfffff9-90d8-4c21-935a-43fe3d267ba3] {
  flex: none;
  height: 130px;
  opacity: 1;
  width: 150px;
  max-width: 100%;
}

.sd[data-s-869aac83-8d5e-4c33-bf96-d6bd452bf5b0] {
  color: rgb(158, 63, 35);
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

.sd[data-s-eeeaa9ae-963b-441b-91d4-e2ad54ee8876] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 400;
  height: 68px;
  line-height: 1.4;
  margin: 0px 0px 0px 0px;
  text-align: center;
  width: 100%;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 890px) {
  .sd[data-s-eeeaa9ae-963b-441b-91d4-e2ad54ee8876] {
    width: 206px;
    max-width: 100%;
  }
}

.sd[data-s-86d9dfda-fcbf-46cb-b10a-54700461ba9e] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 50px 0px 0px 0px;
  padding: 0px 50px 0px 50px;
  text-align: left;
  width: 100%;
  max-width: 100%;
  justify-content: flex-start;
}

@media screen and (max-width: 630px) {
  .sd[data-s-86d9dfda-fcbf-46cb-b10a-54700461ba9e] {
    margin: 20px 0px 0px 0px;
    width: 100%;
    max-width: 100%;
  }
}

.sd[data-s-e68ce90b-f8ea-438e-b7df-80f59143551e] {
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
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-e68ce90b-f8ea-438e-b7df-80f59143551e] {
    height: 56px;
    margin: 20px 0px 20px 0px;
    width: 100%;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-e68ce90b-f8ea-438e-b7df-80f59143551e] {
    margin: 20px 0px 20px 0px;
    padding: 0px 20px 0px 20px;
  }
}

.sd[data-s-28e6e4cd-a9bf-4dd9-a689-a50db2dd1e56] {
  color: rgb(158, 63, 35);
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
  .sd[data-s-28e6e4cd-a9bf-4dd9-a689-a50db2dd1e56] {
    font-size: 24px;
    height: 50%;
    padding: 0px 20px 0px 20px;
    width: 100%;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-28e6e4cd-a9bf-4dd9-a689-a50db2dd1e56] {
    font-size: 24px;
    padding: 0px 0px 0px 0px;
    width: 100%;
  }
}

.sd[data-s-5753f849-d32d-41d5-a44f-0bef705e85e0] {
  align-content: center;
  align-items: center;
  background: #f4d9a9;
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  margin: 0px 0px 20px 0px;
  padding: 15px;
  width: 720px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-5753f849-d32d-41d5-a44f-0bef705e85e0] {
    display: flex;
    flex: none;
    width: 330px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-5753f849-d32d-41d5-a44f-0bef705e85e0] {
    display: flex;
    flex: none;
    width: 300px;
    max-width: 100%;
  }
}

.sd[data-s-41ac3161-fd7f-4615-a5dd-6bc56905ca82] {
  align-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.0);
  border-bottom: 0px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 0px solid rgb(228, 241, 254);
  border-top: 0px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: auto;
  justify-content: center;
  width: 100%;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-41ac3161-fd7f-4615-a5dd-6bc56905ca82] {
    flex: none;
    width: 100%;
  }
}

.sd[data-s-9c016254-d58b-4ec1-ae2d-ebd029bcc9bd] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: left;
  width: 100%;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-0036f732-00b9-45d7-82f7-9c101e2ecf6a] {
  align-content: center;
  align-items: center;
  background: rgb(250, 243, 230);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 15px;
  width: 720px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-0036f732-00b9-45d7-82f7-9c101e2ecf6a] {
    display: flex;
    flex: none;
    width: 330px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-0036f732-00b9-45d7-82f7-9c101e2ecf6a] {
    display: flex;
    flex: none;
    width: 300px;
    max-width: 100%;
  }
}

.sd[data-s-0db6cd6d-c209-42f5-91fa-7333dc2c52a1] {
  align-content: center;
  align-items: center;
  background: rgb(250, 243, 230);
  border-bottom: 0px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 0px solid rgb(228, 241, 254);
  border-top: 0px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: auto;
  justify-content: center;
  width: 100%;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-0db6cd6d-c209-42f5-91fa-7333dc2c52a1] {
    flex: none;
    width: 100%;
  }
}

.sd[data-s-a86c6c25-34b6-4d98-9f0f-2ffffcff7578] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: left;
  width: 100%;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-2e53cc40-88d6-4bbd-a88a-738a3469620a] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 630px) {
  .sd[data-s-2e53cc40-88d6-4bbd-a88a-738a3469620a] {
    display: none;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-2e53cc40-88d6-4bbd-a88a-738a3469620a] {
    display: none;
  }
}

.sd[data-s-1faa49b2-e96f-4672-8d08-819d926e50aa] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 15px;
  width: 720px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-1faa49b2-e96f-4672-8d08-819d926e50aa] {
    display: flex;
    flex: none;
    height: 68px;
    padding: 15px;
    width: 330px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-1faa49b2-e96f-4672-8d08-819d926e50aa] {
    display: flex;
    flex: none;
    width: 300px;
    max-width: 100%;
  }
}

.sd[data-s-46a98a4c-2644-4680-9862-42f980139a4b] {
  align-content: center;
  align-items: center;
  background: rgb(250, 243, 230);
  border-bottom: 0px solid #000;
  border-left: 0px solid #000;
  border-right: 0px solid #000;
  border-top: 0px solid #000;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 630px) {
  .sd[data-s-46a98a4c-2644-4680-9862-42f980139a4b] {
    display: flex;
    padding: 0px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-46a98a4c-2644-4680-9862-42f980139a4b] {
    display: flex;
  }
}

.sd[data-s-2ab817cc-ffb4-452a-b8b5-81fb2833a4a6] {
  align-content: flex-end;
  align-items: flex-end;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 0px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 60px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-2ab817cc-ffb4-452a-b8b5-81fb2833a4a6] {
    flex: none;
    width: 40px;
    max-width: 100%;
  }
}

.sd[data-s-e4b0a822-bf18-47cf-b432-feb110f59e7b] {
  align-content: center;
  align-items: center;
  background: rgb(250, 243, 230);
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 1px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 1px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 80px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-e4b0a822-bf18-47cf-b432-feb110f59e7b] {
    flex: none;
    width: 50px;
    max-width: 100%;
  }
}

.sd[data-s-929acddc-ff92-4c18-9f30-ee3dc592a09b] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 700;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 47px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-929acddc-ff92-4c18-9f30-ee3dc592a09b] {
    font-size: 10px;
  }
}

.sd[data-s-30ab7ae5-1e9c-4102-93fb-b1587b7b9d72] {
  align-content: center;
  align-items: center;
  background: rgb(250, 243, 230);
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 1px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 260px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-30ab7ae5-1e9c-4102-93fb-b1587b7b9d72] {
    flex: none;
    width: 70px;
    max-width: 100%;
  }
}

.sd[data-s-2bae05ad-f774-4915-b594-0cdc94eda8ba] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 700;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 143px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-2bae05ad-f774-4915-b594-0cdc94eda8ba] {
    font-size: 10px;
    width: 57px;
    max-width: 100%;
  }
}

.sd[data-s-88aa6095-e4e1-405c-b7ca-db9f4d22191a] {
  align-content: center;
  align-items: center;
  background: rgb(250, 243, 230);
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 1px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 160px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-88aa6095-e4e1-405c-b7ca-db9f4d22191a] {
    flex: none;
    width: 70px;
    max-width: 100%;
  }
}

.sd[data-s-4fa45b87-9f4b-4654-b727-2fd7bcd2e99f] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 700;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 50%;
  max-width: 50%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-4fa45b87-9f4b-4654-b727-2fd7bcd2e99f] {
    font-size: 10px;
    width: 67px;
    max-width: 100%;
  }
}

.sd[data-s-c9ac86b6-9464-4636-b646-5d4a233f99ee] {
  align-content: center;
  align-items: center;
  background: rgb(250, 243, 230);
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 1px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 160px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-c9ac86b6-9464-4636-b646-5d4a233f99ee] {
    flex: none;
    width: 70px;
    max-width: 100%;
  }
}

.sd[data-s-6c74151a-237d-473b-9ad1-a47d56937807] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 700;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 84px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-6c74151a-237d-473b-9ad1-a47d56937807] {
    font-size: 10px;
  }
}

.sd[data-s-a8c6236b-0c83-4f94-adbd-f7cef8714e6a] {
  align-content: center;
  align-items: center;
  background: rgb(250, 243, 230);
  border-bottom: 0px solid #000;
  border-left: 0px solid #000;
  border-right: 0px solid #000;
  border-top: 0px solid #000;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 630px) {
  .sd[data-s-a8c6236b-0c83-4f94-adbd-f7cef8714e6a] {
    display: flex;
    padding: 0px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-a8c6236b-0c83-4f94-adbd-f7cef8714e6a] {
    display: flex;
  }
}

.sd[data-s-9db3a8cb-3d41-43e2-a398-802df9ea7ae3] {
  align-content: flex-end;
  align-items: flex-end;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 0px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 0px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 60px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-9db3a8cb-3d41-43e2-a398-802df9ea7ae3] {
    flex: none;
    width: 40px;
    max-width: 100%;
  }
}

.sd[data-s-952dfde9-34a1-428b-a900-ef154d6beb6d] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 1px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 80px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-952dfde9-34a1-428b-a900-ef154d6beb6d] {
    flex: none;
    width: 50px;
    max-width: 100%;
  }
}

.sd[data-s-11a51b82-624f-4ff5-a8c7-f3280ea645e0] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 47px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-11a51b82-624f-4ff5-a8c7-f3280ea645e0] {
    font-size: 10px;
  }
}

.sd[data-s-b8f90d33-d6cf-4983-84f6-8f4acb20a2e0] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 260px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-b8f90d33-d6cf-4983-84f6-8f4acb20a2e0] {
    flex: none;
    width: 70px;
    max-width: 100%;
  }
}

.sd[data-s-18db633c-cee9-42bc-86b9-3a8463e7eaab] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 168px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-18db633c-cee9-42bc-86b9-3a8463e7eaab] {
    font-size: 10px;
    width: 44px;
    max-width: 100%;
  }
}

.sd[data-s-90014959-c32d-43ed-ae98-058399ce1427] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 160px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-90014959-c32d-43ed-ae98-058399ce1427] {
    flex: none;
    width: 70px;
    max-width: 100%;
  }
}

.sd[data-s-e1d064a2-61a6-4a41-8e39-eb72cfa5a44d] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 50%;
  max-width: 50%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-e1d064a2-61a6-4a41-8e39-eb72cfa5a44d] {
    font-size: 10px;
    width: 100%;
    max-width: 100%;
  }
}

.sd[data-s-7933abbf-5f7f-4597-aef4-8f74d478120f] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 160px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-7933abbf-5f7f-4597-aef4-8f74d478120f] {
    flex: none;
    width: 70px;
    max-width: 100%;
  }
}

.sd[data-s-c69360f2-f4aa-4998-9d22-9506ea230916] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 84px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-c69360f2-f4aa-4998-9d22-9506ea230916] {
    font-size: 10px;
  }
}

.sd[data-s-39a08a7b-eefd-4c88-a22b-ab05a62e6acb] {
  align-content: center;
  align-items: center;
  background: rgb(250, 243, 230);
  border-bottom: 0px solid #000;
  border-left: 0px solid #000;
  border-right: 0px solid #000;
  border-top: 0px solid #000;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 630px) {
  .sd[data-s-39a08a7b-eefd-4c88-a22b-ab05a62e6acb] {
    display: flex;
    padding: 0px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-39a08a7b-eefd-4c88-a22b-ab05a62e6acb] {
    display: flex;
  }
}

.sd[data-s-2e70346e-e15c-4d48-a665-35ef8818507b] {
  align-content: flex-end;
  align-items: flex-end;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 0px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 0px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 60px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-2e70346e-e15c-4d48-a665-35ef8818507b] {
    flex: none;
    width: 40px;
    max-width: 100%;
  }
}

.sd[data-s-9666e4e4-3250-4038-8dda-cdc68cdcab11] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 1px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 80px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-9666e4e4-3250-4038-8dda-cdc68cdcab11] {
    flex: none;
    width: 50px;
    max-width: 100%;
  }
}

.sd[data-s-35932cbd-a124-4818-a044-8a9735d749e2] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 47px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-35932cbd-a124-4818-a044-8a9735d749e2] {
    font-size: 10px;
  }
}

.sd[data-s-abfb6929-b35c-4f8c-a8bc-2690cbe5d13d] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 260px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-abfb6929-b35c-4f8c-a8bc-2690cbe5d13d] {
    flex: none;
    width: 70px;
    max-width: 100%;
  }
}

.sd[data-s-052b6ae9-04b6-485c-b645-1c0410935fb3] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 168px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-052b6ae9-04b6-485c-b645-1c0410935fb3] {
    font-size: 10px;
    width: 54px;
    max-width: 100%;
  }
}

.sd[data-s-d3516f5b-b7f1-4940-b1f8-dfa54d6d9da2] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 160px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-d3516f5b-b7f1-4940-b1f8-dfa54d6d9da2] {
    flex: none;
    width: 70px;
    max-width: 100%;
  }
}

.sd[data-s-9cbf8f0a-9689-43db-93cb-26b100e7b758] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 50%;
  max-width: 50%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-9cbf8f0a-9689-43db-93cb-26b100e7b758] {
    font-size: 10px;
    width: 100%;
    max-width: 100%;
  }
}

.sd[data-s-fee427d0-7f37-449e-971d-66d0932ee74b] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 160px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-fee427d0-7f37-449e-971d-66d0932ee74b] {
    flex: none;
    width: 70px;
    max-width: 100%;
  }
}

.sd[data-s-46cdc5d2-3725-4d7e-aeae-fd05c69bc2d0] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 84px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-46cdc5d2-3725-4d7e-aeae-fd05c69bc2d0] {
    font-size: 10px;
  }
}

.sd[data-s-01d1048a-5b6f-4079-b50d-efe0e1940b8b] {
  align-content: center;
  align-items: center;
  background: rgb(250, 243, 230);
  border-bottom: 0px solid #000;
  border-left: 0px solid #000;
  border-right: 0px solid #000;
  border-top: 0px solid #000;
  display: none;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 890px) {
  .sd[data-s-01d1048a-5b6f-4079-b50d-efe0e1940b8b] {
    display: none;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-01d1048a-5b6f-4079-b50d-efe0e1940b8b] {
    display: flex;
    padding: 0px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-01d1048a-5b6f-4079-b50d-efe0e1940b8b] {
    display: flex;
  }
}

.sd[data-s-d3e291ba-f77c-44f8-8130-442c73bde67e] {
  align-content: flex-end;
  align-items: flex-end;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 0px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 0px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 60px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-d3e291ba-f77c-44f8-8130-442c73bde67e] {
    align-content: center;
    align-items: center;
    flex: none;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    width: 40px;
    max-width: 100%;
  }
}

.sd[data-s-5429c703-616d-4778-81a6-813201a94166] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 700;
  height: 100%;
  line-height: 1.4;
  text-align: left;
  width: 26px;
  writing-mode: vertical-rl;
  -ms-writing-mode: vertical-rl;
  -webkit-writing-mode: vertical-rl;
  max-width: 100%;
  justify-content: flex-start;
}

@media screen and (max-width: 630px) {
  .sd[data-s-5429c703-616d-4778-81a6-813201a94166] {
    height: 100%;
    text-align: right;
    justify-content: flex-end;
  }
}

.sd[data-s-6d78d203-4eb0-4d08-9755-e1158835d01a] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 1px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 80px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-6d78d203-4eb0-4d08-9755-e1158835d01a] {
    flex: none;
    width: 50px;
    max-width: 100%;
  }
}

.sd[data-s-fa8f73f2-bbed-4ed6-ab6b-c9d9fdc43c5e] {
  color: rgb(158, 63, 35);
  display: none;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 47px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 890px) {
  .sd[data-s-fa8f73f2-bbed-4ed6-ab6b-c9d9fdc43c5e] {
    display: none;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-fa8f73f2-bbed-4ed6-ab6b-c9d9fdc43c5e] {
    display: flex;
    font-size: 10px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-fa8f73f2-bbed-4ed6-ab6b-c9d9fdc43c5e] {
    display: flex;
  }
}

.sd[data-s-0193240d-bb98-4f12-be75-45ca13104fc1] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 260px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-0193240d-bb98-4f12-be75-45ca13104fc1] {
    flex: none;
    width: 70px;
    max-width: 100%;
  }
}

.sd[data-s-eb71640b-3960-478b-94a5-4af8f55adadf] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 168px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-eb71640b-3960-478b-94a5-4af8f55adadf] {
    font-size: 10px;
    width: 53px;
    max-width: 100%;
  }
}

.sd[data-s-f7c1198d-110a-4f60-8080-d0e7b1a46e75] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 160px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-f7c1198d-110a-4f60-8080-d0e7b1a46e75] {
    flex: none;
    width: 70px;
    max-width: 100%;
  }
}

.sd[data-s-d567a1b9-a65e-4a29-b006-4dfca8333a2c] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 50%;
  max-width: 50%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-d567a1b9-a65e-4a29-b006-4dfca8333a2c] {
    font-size: 10px;
    width: 100%;
    max-width: 100%;
  }
}

.sd[data-s-272d0514-00ba-4d04-957e-56ab4b517036] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 160px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-272d0514-00ba-4d04-957e-56ab4b517036] {
    flex: none;
    width: 70px;
    max-width: 100%;
  }
}

.sd[data-s-b1502755-54ce-4841-92cf-ddaa97c2ea30] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 84px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-b1502755-54ce-4841-92cf-ddaa97c2ea30] {
    font-size: 10px;
  }
}

.sd[data-s-55763c05-1c04-47d8-9e71-8040aed072c4] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 630px) {
  .sd[data-s-55763c05-1c04-47d8-9e71-8040aed072c4] {
    display: flex;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-55763c05-1c04-47d8-9e71-8040aed072c4] {
    display: flex;
  }
}

.sd[data-s-55accd5e-9724-4ff3-b5e4-daca2939fc7b] {
  align-content: center;
  align-items: center;
  background: rgb(250, 243, 230);
  border-bottom: 0px solid #000;
  border-left: 0px solid #000;
  border-right: 0px solid #000;
  border-top: 0px solid #000;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 630px) {
  .sd[data-s-55accd5e-9724-4ff3-b5e4-daca2939fc7b] {
    display: none;
    padding: 0px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-55accd5e-9724-4ff3-b5e4-daca2939fc7b] {
    display: none;
  }
}

.sd[data-s-81febd22-9188-4667-91ae-07bd6e859e53] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 0px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 0px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 60px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-81febd22-9188-4667-91ae-07bd6e859e53] {
    flex: none;
    width: 80px;
    max-width: 100%;
  }
}

.sd[data-s-0d6d3d19-7ca2-4f57-9057-dc419b4e6136] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 700;
  height: 49px;
  line-height: 1.4;
  text-align: right;
  width: 43px;
  writing-mode: vertical-rl;
  -ms-writing-mode: vertical-rl;
  -webkit-writing-mode: vertical-rl;
  max-width: 100%;
  justify-content: flex-end;
}

.sd[data-s-43827771-3870-4bf7-9c70-9738c6453cfa] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 1px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 80px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-43827771-3870-4bf7-9c70-9738c6453cfa] {
    flex: none;
    width: 75px;
    max-width: 100%;
  }
}

.sd[data-s-738696ee-7ce7-483d-8ef5-6e7889d4a483] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 47px;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-0fb8e5ac-7078-4aad-8ba6-5c4a38ade849] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 260px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-0fb8e5ac-7078-4aad-8ba6-5c4a38ade849] {
    flex: none;
    width: 75px;
    max-width: 100%;
  }
}

.sd[data-s-15dea3ae-eafd-4f31-9de4-4ebb7f0c273c] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 168px;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-78e357d6-f29c-410c-9119-9b2c2931c6b4] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 160px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-78e357d6-f29c-410c-9119-9b2c2931c6b4] {
    flex: none;
    width: 75px;
    max-width: 100%;
  }
}

.sd[data-s-5c1f2934-7350-4b26-ae0b-501e84d772e4] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 50%;
  max-width: 50%;
  justify-content: center;
}

.sd[data-s-b65bc9a8-1aca-4c94-84b3-9253fb4eb51a] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 160px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-b65bc9a8-1aca-4c94-84b3-9253fb4eb51a] {
    flex: none;
    width: 75px;
    max-width: 100%;
  }
}

.sd[data-s-122f0111-a02e-4b2f-9587-3d3816515375] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 84px;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-7dd4b581-4d37-4bbd-a5d6-57d0403b31e4] {
  align-content: center;
  align-items: center;
  background: rgb(250, 243, 230);
  border-bottom: 0px solid #000;
  border-left: 0px solid #000;
  border-right: 0px solid #000;
  border-top: 0px solid #000;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 630px) {
  .sd[data-s-7dd4b581-4d37-4bbd-a5d6-57d0403b31e4] {
    display: flex;
    padding: 0px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-7dd4b581-4d37-4bbd-a5d6-57d0403b31e4] {
    display: flex;
  }
}

.sd[data-s-c5e6f585-b816-48d4-ba68-ec1e116ed1b7] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 0px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 0px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 60px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-c5e6f585-b816-48d4-ba68-ec1e116ed1b7] {
    flex: none;
    width: 40px;
    max-width: 100%;
  }
}

.sd[data-s-1af41fd6-f43b-4d42-8ca8-0e008e60eb6c] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 700;
  height: 100%;
  line-height: 1.4;
  text-align: left;
  width: 26px;
  writing-mode: vertical-rl;
  -ms-writing-mode: vertical-rl;
  -webkit-writing-mode: vertical-rl;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-5b041758-1451-4cec-8d04-2d2975170577] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 1px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 80px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-5b041758-1451-4cec-8d04-2d2975170577] {
    flex: none;
    width: 50px;
    max-width: 100%;
  }
}

.sd[data-s-99c84498-1003-4fe0-b502-76429bdc41da] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 47px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-99c84498-1003-4fe0-b502-76429bdc41da] {
    font-size: 10px;
  }
}

.sd[data-s-62699a21-411e-4ebf-a756-4295b82a72d3] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 260px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-62699a21-411e-4ebf-a756-4295b82a72d3] {
    flex: none;
    width: 70px;
    max-width: 100%;
  }
}

.sd[data-s-712f7b4f-3e63-4285-b803-0b0b59b6520f] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 168px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-712f7b4f-3e63-4285-b803-0b0b59b6520f] {
    font-size: 10px;
  }
}

.sd[data-s-ec3d779b-9718-4169-acfa-a0d956240122] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 160px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-ec3d779b-9718-4169-acfa-a0d956240122] {
    flex: none;
    width: 70px;
    max-width: 100%;
  }
}

.sd[data-s-68a9445b-b132-458f-abdc-11fda62ce1e2] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 50%;
  max-width: 50%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-68a9445b-b132-458f-abdc-11fda62ce1e2] {
    font-size: 10px;
    width: 100%;
    max-width: 100%;
  }
}

.sd[data-s-7431102c-67c4-4adb-b68a-c473f9b12683] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 160px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-7431102c-67c4-4adb-b68a-c473f9b12683] {
    flex: none;
    width: 70px;
    max-width: 100%;
  }
}

.sd[data-s-654ab658-fe00-4492-866b-a6304dc436dd] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 84px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-654ab658-fe00-4492-866b-a6304dc436dd] {
    font-size: 10px;
  }
}

.sd[data-s-d68f8d83-8126-45e9-b5c1-fd12cf00a741] {
  align-content: center;
  align-items: center;
  background: rgb(250, 243, 230);
  border-bottom: 0px solid #000;
  border-left: 0px solid #000;
  border-right: 0px solid #000;
  border-top: 0px solid #000;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 630px) {
  .sd[data-s-d68f8d83-8126-45e9-b5c1-fd12cf00a741] {
    display: flex;
    padding: 0px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-d68f8d83-8126-45e9-b5c1-fd12cf00a741] {
    display: flex;
  }
}

.sd[data-s-31f97f61-1000-403e-8c34-cb2c0f4963de] {
  align-content: flex-end;
  align-items: flex-end;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 0px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 0px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 60px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-31f97f61-1000-403e-8c34-cb2c0f4963de] {
    flex: none;
    width: 40px;
    max-width: 100%;
  }
}

.sd[data-s-06d9fdc1-d7bb-41c7-b69d-614bae6a590a] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 1px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 80px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-06d9fdc1-d7bb-41c7-b69d-614bae6a590a] {
    flex: none;
    width: 50px;
    max-width: 100%;
  }
}

.sd[data-s-3d876c0a-eff7-4b0c-89f9-c7c6e9e0a73f] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 47px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-3d876c0a-eff7-4b0c-89f9-c7c6e9e0a73f] {
    font-size: 10px;
  }
}

.sd[data-s-b9608ece-59ec-4173-8640-5e474b0ca808] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 260px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-b9608ece-59ec-4173-8640-5e474b0ca808] {
    flex: none;
    width: 70px;
    max-width: 100%;
  }
}

.sd[data-s-645fc458-81ba-4aba-91bc-1f633a33bbc7] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 168px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-645fc458-81ba-4aba-91bc-1f633a33bbc7] {
    font-size: 10px;
    width: 100%;
    max-width: 100%;
  }
}

.sd[data-s-5a141787-5265-4ecc-8e1e-58b8c72bc6fb] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 160px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-5a141787-5265-4ecc-8e1e-58b8c72bc6fb] {
    flex: none;
    width: 70px;
    max-width: 100%;
  }
}

.sd[data-s-f4d34ccd-6bdf-4176-91b6-fd8f76d5aa90] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 50%;
  max-width: 50%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-f4d34ccd-6bdf-4176-91b6-fd8f76d5aa90] {
    font-size: 10px;
    width: 100%;
    max-width: 100%;
  }
}

.sd[data-s-50a30a4a-0853-4636-987f-e845bb6c1b49] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 160px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-50a30a4a-0853-4636-987f-e845bb6c1b49] {
    flex: none;
    width: 70px;
    max-width: 100%;
  }
}

.sd[data-s-89229649-de5d-408b-8524-3bb602b470c4] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 84px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-89229649-de5d-408b-8524-3bb602b470c4] {
    font-size: 10px;
  }
}

.sd[data-s-9de896cf-6356-4af2-afae-6cfae90aadfb] {
  align-content: center;
  align-items: center;
  background: rgb(250, 243, 230);
  border-bottom: 0px solid #000;
  border-left: 0px solid #000;
  border-right: 0px solid #000;
  border-top: 0px solid #000;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 630px) {
  .sd[data-s-9de896cf-6356-4af2-afae-6cfae90aadfb] {
    display: flex;
    padding: 0px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-9de896cf-6356-4af2-afae-6cfae90aadfb] {
    display: flex;
  }
}

.sd[data-s-496a933b-4635-4ff3-b5c4-28b77243aaf4] {
  align-content: flex-end;
  align-items: flex-end;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 0px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 60px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-496a933b-4635-4ff3-b5c4-28b77243aaf4] {
    flex: none;
    width: 40px;
    max-width: 100%;
  }
}

.sd[data-s-e3949e4e-ab25-425e-89e5-6b8ad87ec616] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 1px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 80px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-e3949e4e-ab25-425e-89e5-6b8ad87ec616] {
    flex: none;
    width: 50px;
    max-width: 100%;
  }
}

.sd[data-s-099a4f90-a6ad-4fb5-8a28-1fc2a95ad0e0] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 47px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-099a4f90-a6ad-4fb5-8a28-1fc2a95ad0e0] {
    font-size: 10px;
  }
}

.sd[data-s-b64b7fe1-43b7-4f53-9a63-eea73dc4068e] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 260px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-b64b7fe1-43b7-4f53-9a63-eea73dc4068e] {
    flex: none;
    width: 70px;
    max-width: 100%;
  }
}

.sd[data-s-a758094f-0096-4d52-bd38-7352dd1b1144] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 168px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-a758094f-0096-4d52-bd38-7352dd1b1144] {
    font-size: 10px;
    width: 59px;
    max-width: 100%;
  }
}

.sd[data-s-39efc829-e0f5-464a-87c2-c82ba4ed06bf] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 160px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-39efc829-e0f5-464a-87c2-c82ba4ed06bf] {
    flex: none;
    width: 70px;
    max-width: 100%;
  }
}

.sd[data-s-df2b7f8d-30a0-4325-bce8-0bc7cd814ffa] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 50%;
  max-width: 50%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-df2b7f8d-30a0-4325-bce8-0bc7cd814ffa] {
    font-size: 10px;
    width: 100%;
    max-width: 100%;
  }
}

.sd[data-s-a0c8312a-1cd7-4ff1-862d-29895ced7cb2] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 160px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-a0c8312a-1cd7-4ff1-862d-29895ced7cb2] {
    flex: none;
    width: 70px;
    max-width: 100%;
  }
}

.sd[data-s-7f981fe1-08eb-4a10-bb6b-eebcf5dd3796] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 84px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-7f981fe1-08eb-4a10-bb6b-eebcf5dd3796] {
    font-size: 10px;
  }
}

.sd[data-s-7a649968-8ed7-4f1f-bd58-d29695e09bfd] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 890px) {
  .sd[data-s-7a649968-8ed7-4f1f-bd58-d29695e09bfd] {
    margin: 0px 0px 0px 0px;
    padding: 0px;
    max-width: 100%;
  }
}

.sd[data-s-976d73b0-dd5b-4ede-b7a4-3a0089d993e0] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 12px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 30px 0px 0px 0px;
  padding: 0px 30px 0px 30px;
  text-align: left;
  width: 720px;
  max-width: 100%;
  justify-content: flex-start;
}

@media screen and (max-width: 630px) {
  .sd[data-s-976d73b0-dd5b-4ede-b7a4-3a0089d993e0] {
    width: 392px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-976d73b0-dd5b-4ede-b7a4-3a0089d993e0] {
    margin: 20px 0px 0px 0px;
    padding: 0px 15px 0px 15px;
    max-width: 100%;
  }
}

.sd[data-s-870fa616-8aca-48e1-9824-e4bc23ca453c] {
  align-content: center;
  align-items: center;
  background: rgb(250, 243, 230);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  margin: 50px 0px 0px 0px;
  padding: 15px;
  width: 720px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-870fa616-8aca-48e1-9824-e4bc23ca453c] {
    display: flex;
    flex: none;
    width: 330px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-870fa616-8aca-48e1-9824-e4bc23ca453c] {
    display: flex;
    flex: none;
    width: 300px;
    max-width: 100%;
  }
}

.sd[data-s-79b73014-40ca-4faa-92d9-b03a27bcce0b] {
  align-content: center;
  align-items: center;
  background: rgb(250, 243, 230);
  border-bottom: 0px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 0px solid rgb(228, 241, 254);
  border-top: 0px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 23px;
  justify-content: center;
  width: 100%;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-79b73014-40ca-4faa-92d9-b03a27bcce0b] {
    flex: none;
    width: 300px;
    max-width: 100%;
  }
}

.sd[data-s-4b810f18-3031-493d-9dae-6432923ff5b1] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: left;
  width: 100%;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-af030653-10e1-4d71-aedc-24f2685425a3] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 15px;
  width: 720px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-af030653-10e1-4d71-aedc-24f2685425a3] {
    display: flex;
    flex: none;
    width: 330px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-af030653-10e1-4d71-aedc-24f2685425a3] {
    display: flex;
    flex: none;
    width: 300px;
    max-width: 100%;
  }
}

.sd[data-s-cc711b8f-f272-4599-932a-50a1d1737a6f] {
  align-content: center;
  align-items: center;
  background: rgb(250, 243, 230);
  border-bottom: 0px solid #000;
  border-left: 0px solid #000;
  border-right: 0px solid #000;
  border-top: 0px solid #000;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 630px) {
  .sd[data-s-cc711b8f-f272-4599-932a-50a1d1737a6f] {
    display: flex;
    padding: 0px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-cc711b8f-f272-4599-932a-50a1d1737a6f] {
    display: flex;
  }
}

.sd[data-s-163e4626-3a5a-4bc3-8e62-b28030681587] {
  align-content: flex-end;
  align-items: flex-end;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 0px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 60px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-163e4626-3a5a-4bc3-8e62-b28030681587] {
    flex: none;
    width: 20px;
    max-width: 100%;
  }
}

.sd[data-s-a37d5398-8a22-4464-89a7-2f509cb1ff0a] {
  align-content: center;
  align-items: center;
  background: rgb(250, 243, 230);
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 1px solid rgb(158, 63, 35);
  border-right: 0px solid rgb(158, 63, 35);
  border-top: 1px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 100px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-a37d5398-8a22-4464-89a7-2f509cb1ff0a] {
    flex: none;
    width: 35px;
    max-width: 100%;
  }
}

.sd[data-s-f963c7c6-da95-4366-a7d7-65be9c59e450] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 700;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 47px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-f963c7c6-da95-4366-a7d7-65be9c59e450] {
    font-size: 10px;
  }
}

.sd[data-s-84c85868-ccd6-47ad-9008-e0ddefd05972] {
  align-content: center;
  align-items: center;
  background: rgb(250, 243, 230);
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 1px solid rgb(158, 63, 35);
  border-right: 0px solid rgb(158, 63, 35);
  border-top: 1px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 100px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-84c85868-ccd6-47ad-9008-e0ddefd05972] {
    flex: none;
    width: 35px;
    max-width: 100%;
  }
}

.sd[data-s-17e80326-c0e8-4910-a2b3-5a047e3ebdf0] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 700;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 47px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-17e80326-c0e8-4910-a2b3-5a047e3ebdf0] {
    font-size: 10px;
  }
}

.sd[data-s-8923bea9-0883-42b5-b5f1-dd09bb9ae1ac] {
  align-content: center;
  align-items: center;
  background: rgb(250, 243, 230);
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 1px solid rgb(158, 63, 35);
  border-right: 0px solid rgb(158, 63, 35);
  border-top: 1px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 100px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-8923bea9-0883-42b5-b5f1-dd09bb9ae1ac] {
    flex: none;
    width: 35px;
    max-width: 100%;
  }
}

.sd[data-s-446b16c7-898d-49fd-9104-a277d59ccf2c] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 700;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 47px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-446b16c7-898d-49fd-9104-a277d59ccf2c] {
    font-size: 10px;
  }
}

.sd[data-s-2978b8ce-636f-4ec2-be4b-8680bdf13e63] {
  align-content: center;
  align-items: center;
  background: rgb(250, 243, 230);
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 1px solid rgb(158, 63, 35);
  border-right: 0px solid rgb(158, 63, 35);
  border-top: 1px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 160px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-2978b8ce-636f-4ec2-be4b-8680bdf13e63] {
    flex: none;
    width: 60px;
    max-width: 100%;
  }
}

.sd[data-s-457bdc74-1e20-4aea-9e07-56f6adb436d5] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 700;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 137px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-457bdc74-1e20-4aea-9e07-56f6adb436d5] {
    font-size: 10px;
  }
}

.sd[data-s-918085c1-59a9-4d5d-9f5e-c621401cc584] {
  align-content: center;
  align-items: center;
  background: rgb(250, 243, 230);
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 1px solid rgb(158, 63, 35);
  border-right: 0px solid rgb(158, 63, 35);
  border-top: 1px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 100px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-918085c1-59a9-4d5d-9f5e-c621401cc584] {
    flex: none;
    width: 60px;
    max-width: 100%;
  }
}

.sd[data-s-4a4ff563-8d3e-404e-80d7-6c704917c1a8] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 700;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 75px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-4a4ff563-8d3e-404e-80d7-6c704917c1a8] {
    font-size: 10px;
  }
}

.sd[data-s-0f3098df-0ab1-4e52-988f-5c0db4992014] {
  align-content: center;
  align-items: center;
  background: rgb(250, 243, 230);
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 1px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 1px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 100px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-0f3098df-0ab1-4e52-988f-5c0db4992014] {
    flex: none;
    width: 65px;
    max-width: 100%;
  }
}

.sd[data-s-0002b91a-928a-4371-a85b-7373d6267c60] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 700;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 90px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-0002b91a-928a-4371-a85b-7373d6267c60] {
    font-size: 10px;
  }
}

.sd[data-s-60775ffc-fb36-4666-a327-e9cff6e9b393] {
  align-content: center;
  align-items: center;
  background: rgb(250, 243, 230);
  border-bottom: 0px solid #000;
  border-left: 0px solid #000;
  border-right: 0px solid #000;
  border-top: 0px solid #000;
  flex-direction: row;
  flex-wrap: nowrap;
  height: auto;
  justify-content: center;
  padding: 0px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-60775ffc-fb36-4666-a327-e9cff6e9b393] {
    display: flex;
    padding: 0px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-60775ffc-fb36-4666-a327-e9cff6e9b393] {
    display: flex;
  }
}

.sd[data-s-03b5d211-2333-41d9-9fc5-1e270d357b0b] {
  align-content: flex-end;
  align-items: flex-end;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 0px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 0px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 60px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-03b5d211-2333-41d9-9fc5-1e270d357b0b] {
    flex: none;
    width: 20px;
    max-width: 100%;
  }
}

.sd[data-s-7845a9b0-79b2-403d-9447-5e6aa94e21b0] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 0px solid rgb(158, 63, 35);
  border-left: 1px solid rgb(158, 63, 35);
  border-right: 0px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 100px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-7845a9b0-79b2-403d-9447-5e6aa94e21b0] {
    flex: none;
    width: 35px;
    max-width: 100%;
  }
}

.sd[data-s-6c600cbb-de51-4e17-9a91-e0bc4d6dc087] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 0px solid rgb(158, 63, 35);
  border-left: 1px solid rgb(158, 63, 35);
  border-right: 0px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 100px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-6c600cbb-de51-4e17-9a91-e0bc4d6dc087] {
    flex: none;
    width: 35px;
    max-width: 100%;
  }
}

.sd[data-s-bcc3691a-b4f9-4e8a-80d0-ba36be91d87f] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 0px solid rgb(158, 63, 35);
  border-left: 1px solid rgb(158, 63, 35);
  border-right: 0px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 100px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-bcc3691a-b4f9-4e8a-80d0-ba36be91d87f] {
    flex: none;
    width: 35px;
    max-width: 100%;
  }
}

.sd[data-s-d906a1c2-20c6-4bcd-858e-c4d7a0c7b171] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 47px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-d906a1c2-20c6-4bcd-858e-c4d7a0c7b171] {
    font-size: 10px;
  }
}

.sd[data-s-3f451033-61db-4c18-9dda-b70c3f02edd6] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 0px solid rgb(158, 63, 35);
  border-left: 1px solid rgb(158, 63, 35);
  border-right: 0px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 160px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-3f451033-61db-4c18-9dda-b70c3f02edd6] {
    flex: none;
    width: 60px;
    max-width: 100%;
  }
}

.sd[data-s-0bdbefff-3d2d-4da0-a710-16e76d1d65c8] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 137px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-0bdbefff-3d2d-4da0-a710-16e76d1d65c8] {
    font-size: 10px;
    width: 44px;
    max-width: 100%;
  }
}

.sd[data-s-008dd6b3-d48c-492e-8fa5-ef51d187f167] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 0px solid rgb(158, 63, 35);
  border-left: 1px solid rgb(158, 63, 35);
  border-right: 0px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 100px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-008dd6b3-d48c-492e-8fa5-ef51d187f167] {
    flex: none;
    width: 60px;
    max-width: 100%;
  }
}

.sd[data-s-0ccdafa4-956b-4032-bd4a-1e0d5ba28139] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 75px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-0ccdafa4-956b-4032-bd4a-1e0d5ba28139] {
    font-size: 10px;
  }
}

.sd[data-s-cc6f07b5-3098-4362-8687-4fe38a59c257] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 0px solid rgb(158, 63, 35);
  border-left: 1px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 100px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-cc6f07b5-3098-4362-8687-4fe38a59c257] {
    flex: none;
    width: 65px;
    max-width: 100%;
  }
}

.sd[data-s-36d638de-9c13-411d-9efd-a529c0472ac7] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 90px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-36d638de-9c13-411d-9efd-a529c0472ac7] {
    font-size: 10px;
  }
}

.sd[data-s-b43ac507-94dd-47df-a231-6047e26db800] {
  align-content: center;
  align-items: center;
  background: rgb(250, 243, 230);
  border-bottom: 0px solid #000;
  border-left: 0px solid #000;
  border-right: 0px solid #000;
  border-top: 0px solid #000;
  flex-direction: row;
  flex-wrap: nowrap;
  height: auto;
  justify-content: center;
  padding: 0px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-b43ac507-94dd-47df-a231-6047e26db800] {
    display: flex;
    padding: 0px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-b43ac507-94dd-47df-a231-6047e26db800] {
    display: flex;
  }
}

.sd[data-s-7cd4de17-1c32-4f8a-8f43-31d22adb92a4] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 0px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 0px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: flex-start;
  width: 60px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-7cd4de17-1c32-4f8a-8f43-31d22adb92a4] {
    flex: none;
    width: 20px;
    max-width: 100%;
  }
}

.sd[data-s-83473e6a-22f0-498b-9007-0528bf502b1e] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 700;
  height: 100%;
  line-height: 1.4;
  text-align: right;
  width: 43px;
  writing-mode: vertical-rl;
  -ms-writing-mode: vertical-rl;
  -webkit-writing-mode: vertical-rl;
  max-width: 100%;
  justify-content: flex-end;
}

.sd[data-s-f4900c21-4fdf-4b3e-8d27-bfa7bfea0b2d] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 0px solid rgb(158, 63, 35);
  border-left: 1px solid rgb(158, 63, 35);
  border-right: 0px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 100px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-f4900c21-4fdf-4b3e-8d27-bfa7bfea0b2d] {
    flex: none;
    width: 35px;
    max-width: 100%;
  }
}

.sd[data-s-b8b0fbfc-80c5-432f-ab98-eba438ea377d] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  padding: 0px 0px 0px 0px;
  text-align: center;
  width: 47px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-b8b0fbfc-80c5-432f-ab98-eba438ea377d] {
    font-size: 10px;
  }
}

.sd[data-s-fbc8c957-b9f6-4f6f-ae63-bcaf83f1a6c6] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 0px solid rgb(158, 63, 35);
  border-left: 1px solid rgb(158, 63, 35);
  border-right: 0px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 100px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-fbc8c957-b9f6-4f6f-ae63-bcaf83f1a6c6] {
    flex: none;
    width: 35px;
    max-width: 100%;
  }
}

.sd[data-s-6f3c240c-a144-41bb-af2e-2c68c9b6928b] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 74px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-6f3c240c-a144-41bb-af2e-2c68c9b6928b] {
    font-size: 10px;
  }
}

.sd[data-s-51391f9e-7833-4e8c-99e9-ac7d07a2597e] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 0px solid rgb(158, 63, 35);
  border-left: 1px solid rgb(158, 63, 35);
  border-right: 0px solid rgb(158, 63, 35);
  border-top: 1px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 100px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-51391f9e-7833-4e8c-99e9-ac7d07a2597e] {
    flex: none;
    width: 35px;
    max-width: 100%;
  }
}

.sd[data-s-a5641b4c-b607-4d3d-bd3e-7c1295e73708] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 47px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-a5641b4c-b607-4d3d-bd3e-7c1295e73708] {
    font-size: 10px;
  }
}

.sd[data-s-b0c639fd-bea9-4815-b9fc-f1e9721dae46] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 0px solid rgb(158, 63, 35);
  border-left: 1px solid rgb(158, 63, 35);
  border-right: 0px solid rgb(158, 63, 35);
  border-top: 1px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 160px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-b0c639fd-bea9-4815-b9fc-f1e9721dae46] {
    flex: none;
    width: 60px;
    max-width: 100%;
  }
}

.sd[data-s-9c1ff328-c872-4fb8-a8a2-aad3ff4951d4] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 137px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-9c1ff328-c872-4fb8-a8a2-aad3ff4951d4] {
    font-size: 10px;
  }
}

.sd[data-s-1187bf03-9ccb-46e1-af71-cd13077a5ea5] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 0px solid rgb(158, 63, 35);
  border-left: 1px solid rgb(158, 63, 35);
  border-right: 0px solid rgb(158, 63, 35);
  border-top: 1px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 100px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-1187bf03-9ccb-46e1-af71-cd13077a5ea5] {
    flex: none;
    width: 60px;
    max-width: 100%;
  }
}

.sd[data-s-3ba1bddb-4178-40f7-a861-8aad9ab3aa92] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 75px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-3ba1bddb-4178-40f7-a861-8aad9ab3aa92] {
    font-size: 10px;
  }
}

.sd[data-s-8e6d2c5e-a93d-4d7f-a2c5-c87aa7c96df4] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 0px solid rgb(158, 63, 35);
  border-left: 1px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 1px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 100px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-8e6d2c5e-a93d-4d7f-a2c5-c87aa7c96df4] {
    flex: none;
    width: 65px;
    max-width: 100%;
  }
}

.sd[data-s-3b50330f-0dcf-4ccb-a481-8a7b040b602d] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 90px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-3b50330f-0dcf-4ccb-a481-8a7b040b602d] {
    font-size: 10px;
  }
}

.sd[data-s-22eefe48-59b7-4a89-8f0c-7b203164c68c] {
  align-content: center;
  align-items: center;
  background: rgb(250, 243, 230);
  border-bottom: 0px solid #000;
  border-left: 0px solid #000;
  border-right: 0px solid #000;
  border-top: 0px solid #000;
  flex-direction: row;
  flex-wrap: nowrap;
  height: auto;
  justify-content: center;
  padding: 0px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-22eefe48-59b7-4a89-8f0c-7b203164c68c] {
    display: flex;
    padding: 0px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-22eefe48-59b7-4a89-8f0c-7b203164c68c] {
    display: flex;
  }
}

.sd[data-s-9500a0af-2a1f-44c8-8835-e4ba4967e3e3] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 0px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 0px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: flex-start;
  width: 60px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-9500a0af-2a1f-44c8-8835-e4ba4967e3e3] {
    flex: none;
    width: 20px;
    max-width: 100%;
  }
}

.sd[data-s-3bb766da-0a45-4ada-904f-3abe6fffcedb] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 700;
  height: 100%;
  line-height: 1.4;
  text-align: left;
  width: 26px;
  writing-mode: vertical-rl;
  -ms-writing-mode: vertical-rl;
  -webkit-writing-mode: vertical-rl;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-3314bb0a-aacf-43af-b1a6-f7a47c7936d1] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 1px solid rgb(158, 63, 35);
  border-right: 0px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 100px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-3314bb0a-aacf-43af-b1a6-f7a47c7936d1] {
    flex: none;
    width: 35px;
    max-width: 100%;
  }
}

.sd[data-s-725bc7f7-c769-46d5-ba54-4310cddf68ea] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 1px solid rgb(158, 63, 35);
  border-right: 0px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 100px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-725bc7f7-c769-46d5-ba54-4310cddf68ea] {
    flex: none;
    width: 35px;
    max-width: 100%;
  }
}

.sd[data-s-00bf95d1-d7e7-4799-8339-32b9232ae050] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 1px solid rgb(158, 63, 35);
  border-right: 0px solid rgb(158, 63, 35);
  border-top: 1px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 100px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-00bf95d1-d7e7-4799-8339-32b9232ae050] {
    flex: none;
    width: 35px;
    max-width: 100%;
  }
}

.sd[data-s-b0ec9eb1-b1da-4a49-ac04-ab55abe15f3b] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 47px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-b0ec9eb1-b1da-4a49-ac04-ab55abe15f3b] {
    font-size: 10px;
  }
}

.sd[data-s-d41d61c4-dac1-4ea2-bc6c-cf9d26229304] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 1px solid rgb(158, 63, 35);
  border-right: 0px solid rgb(158, 63, 35);
  border-top: 1px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 160px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-d41d61c4-dac1-4ea2-bc6c-cf9d26229304] {
    flex: none;
    width: 60px;
    max-width: 100%;
  }
}

.sd[data-s-33fa6d99-86d9-46b9-a9d5-61ac65577a8d] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 137px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-33fa6d99-86d9-46b9-a9d5-61ac65577a8d] {
    font-size: 10px;
  }
}

.sd[data-s-ef1347e2-18ee-4860-9ca0-e1eb96e6f53e] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 1px solid rgb(158, 63, 35);
  border-right: 0px solid rgb(158, 63, 35);
  border-top: 1px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 100px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-ef1347e2-18ee-4860-9ca0-e1eb96e6f53e] {
    flex: none;
    width: 60px;
    max-width: 100%;
  }
}

.sd[data-s-397a1833-7964-401f-9039-4090c562a741] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 75px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-397a1833-7964-401f-9039-4090c562a741] {
    font-size: 10px;
  }
}

.sd[data-s-66ca291d-9b41-41c2-a263-3311e8dec40e] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 1px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 1px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 100px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-66ca291d-9b41-41c2-a263-3311e8dec40e] {
    flex: none;
    width: 65px;
    max-width: 100%;
  }
}

.sd[data-s-a087e664-a36d-4a96-99ca-9a270f894480] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 90px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-a087e664-a36d-4a96-99ca-9a270f894480] {
    font-size: 10px;
  }
}

.sd[data-s-0673417c-d201-4dc1-862f-fa0db4e5e8ed] {
  align-content: center;
  align-items: center;
  background: rgb(250, 243, 230);
  border-bottom: 0px solid #000;
  border-left: 0px solid #000;
  border-right: 0px solid #000;
  border-top: 0px solid #000;
  flex-direction: row;
  flex-wrap: nowrap;
  height: auto;
  justify-content: center;
  padding: 0px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-0673417c-d201-4dc1-862f-fa0db4e5e8ed] {
    display: flex;
    padding: 0px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-0673417c-d201-4dc1-862f-fa0db4e5e8ed] {
    display: flex;
  }
}

.sd[data-s-e169e62c-70c2-4a6d-9f36-024fef833f49] {
  align-content: flex-end;
  align-items: flex-end;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 0px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 60px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-e169e62c-70c2-4a6d-9f36-024fef833f49] {
    flex: none;
    width: 20px;
    max-width: 100%;
  }
}

.sd[data-s-294fe60e-d054-4e92-8358-d274f73d15f1] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 1px solid rgb(158, 63, 35);
  border-right: 0px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 100px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-294fe60e-d054-4e92-8358-d274f73d15f1] {
    flex: none;
    width: 35px;
    max-width: 100%;
  }
}

.sd[data-s-c662aeea-50d3-42a5-9cb2-53c41406b988] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  padding: 0px 0px 0px 0px;
  text-align: center;
  width: 64px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-c662aeea-50d3-42a5-9cb2-53c41406b988] {
    font-size: 10px;
  }
}

.sd[data-s-f3d03c03-0874-43a0-96f7-3b9a36cb3ef1] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 1px solid rgb(158, 63, 35);
  border-right: 0px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 100px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-f3d03c03-0874-43a0-96f7-3b9a36cb3ef1] {
    flex: none;
    width: 35px;
    max-width: 100%;
  }
}

.sd[data-s-2f3c2756-5473-4f5e-8a60-1494422d2984] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  padding: 0px 0px 0px 0px;
  text-align: center;
  width: 65px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-2f3c2756-5473-4f5e-8a60-1494422d2984] {
    font-size: 10px;
  }
}

.sd[data-s-8d94b100-b7c7-4f0c-8d72-94c0cf7b50af] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 1px solid rgb(158, 63, 35);
  border-right: 0px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 100px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-8d94b100-b7c7-4f0c-8d72-94c0cf7b50af] {
    flex: none;
    width: 35px;
    max-width: 100%;
  }
}

.sd[data-s-e31b3d7d-8ad1-4a8d-8bbb-d1fd076c70e3] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 63px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-e31b3d7d-8ad1-4a8d-8bbb-d1fd076c70e3] {
    font-size: 10px;
    width: 31px;
    max-width: 100%;
  }
}

.sd[data-s-e282b468-73ec-4fb6-b2e2-ece2d74a98ab] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 1px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 360px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-e282b468-73ec-4fb6-b2e2-ece2d74a98ab] {
    flex: none;
    width: 185px;
    max-width: 100%;
  }
}

.sd[data-s-28031a9f-2f38-42fc-84d2-65e9cbd52c49] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 137px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-28031a9f-2f38-42fc-84d2-65e9cbd52c49] {
    font-size: 10px;
  }
}

.sd[data-s-7f5f146a-ed0c-41ef-bd32-8829f14ac9d6] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 12px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 30px 0px 0px 0px;
  padding: 0px 30px 0px 30px;
  text-align: left;
  width: 720px;
  max-width: 100%;
  justify-content: flex-start;
}

@media screen and (max-width: 630px) {
  .sd[data-s-7f5f146a-ed0c-41ef-bd32-8829f14ac9d6] {
    width: 386px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-7f5f146a-ed0c-41ef-bd32-8829f14ac9d6] {
    margin: 20px 0px 0px 0px;
    padding: 0px 15px 0px 15px;
    max-width: 100%;
  }
}

.sd[data-s-c334716a-3e59-46b2-a8ef-5e30c0fa67f5] {
  align-content: center;
  align-items: center;
  background: #f4d9a9;
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  margin: 40px 0px 0px 0px;
  padding: 15px;
  width: 720px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-c334716a-3e59-46b2-a8ef-5e30c0fa67f5] {
    display: flex;
    flex: none;
    width: 330px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-c334716a-3e59-46b2-a8ef-5e30c0fa67f5] {
    display: flex;
    flex: none;
    width: 300px;
    max-width: 100%;
  }
}

.sd[data-s-df529923-6234-446e-b8ae-9c062d2562c5] {
  align-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.0);
  border-bottom: 0px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 0px solid rgb(228, 241, 254);
  border-top: 0px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: auto;
  justify-content: center;
  width: 100%;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-df529923-6234-446e-b8ae-9c062d2562c5] {
    flex: none;
    width: 100%;
  }
}

.sd[data-s-8abb1f36-93d4-43ac-8e95-245734672080] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 900;
  height: auto;
  line-height: 1.4;
  text-align: left;
  width: 100%;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-b722e6f5-e8a3-478c-a865-80bb633c8b65] {
  color: #ff0000;
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 12px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 30px 0px 0px 0px;
  padding: 0px 30px 0px 30px;
  text-align: left;
  width: 720px;
  max-width: 56%;
  justify-content: flex-start;
}

@media screen and (max-width: 630px) {
  .sd[data-s-b722e6f5-e8a3-478c-a865-80bb633c8b65] {
    flex: none;
    height: auto;
    width: 386px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-b722e6f5-e8a3-478c-a865-80bb633c8b65] {
    margin: 20px 0px 1px 0px;
    padding: 0px 15px 0px 15px;
    max-width: 100%;
  }
}

.sd[data-s-281c6251-a5a5-4387-bc29-9855b8d59641] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 12px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  padding: 0px 30px 30px 30px;
  text-align: left;
  width: 720px;
  max-width: 100%;
  justify-content: flex-start;
}

@media screen and (max-width: 630px) {
  .sd[data-s-281c6251-a5a5-4387-bc29-9855b8d59641] {
    flex: none;
    width: 386px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-281c6251-a5a5-4387-bc29-9855b8d59641] {
    padding: 0px 15px 0px 15px;
  }
}

.sd[data-s-d926c86a-a6ff-4f0f-b5da-46eb0b812841] {
  align-content: center;
  align-items: center;
  background: rgb(250, 243, 230);
  border-bottom: 0px solid #000;
  border-left: 0px solid #000;
  border-right: 0px solid #000;
  border-top: 0px solid #000;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 630px) {
  .sd[data-s-d926c86a-a6ff-4f0f-b5da-46eb0b812841] {
    display: flex;
    padding: 0px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-d926c86a-a6ff-4f0f-b5da-46eb0b812841] {
    display: flex;
  }
}

.sd[data-s-0d19c4f6-a3c0-4d70-9bcf-5ca0ae75fdea] {
  align-content: flex-end;
  align-items: flex-end;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 0px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 60px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-0d19c4f6-a3c0-4d70-9bcf-5ca0ae75fdea] {
    flex: none;
    width: 40px;
    max-width: 100%;
  }
}

.sd[data-s-38926642-d849-4993-88f6-aaa4ff656871] {
  align-content: center;
  align-items: center;
  background: rgb(250, 243, 230);
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 1px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 1px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 80px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-38926642-d849-4993-88f6-aaa4ff656871] {
    flex: none;
    width: 50px;
    max-width: 100%;
  }
}

.sd[data-s-9b183862-f7cb-40a2-abfc-583e1a30c14d] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 700;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 47px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-9b183862-f7cb-40a2-abfc-583e1a30c14d] {
    font-size: 10px;
  }
}

.sd[data-s-20a2b9dd-7ef7-4d63-b22a-980d866bea2a] {
  align-content: center;
  align-items: center;
  background: rgb(250, 243, 230);
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 1px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 260px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-20a2b9dd-7ef7-4d63-b22a-980d866bea2a] {
    flex: none;
    width: 70px;
    max-width: 100%;
  }
}

.sd[data-s-acb5cc05-1991-4d18-8d33-106bcd3adc66] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 700;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 143px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-acb5cc05-1991-4d18-8d33-106bcd3adc66] {
    font-size: 10px;
    width: 57px;
    max-width: 100%;
  }
}

.sd[data-s-5dbff142-8dc8-4143-a688-50277f0a01df] {
  align-content: center;
  align-items: center;
  background: rgb(250, 243, 230);
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 1px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 160px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-5dbff142-8dc8-4143-a688-50277f0a01df] {
    flex: none;
    width: 70px;
    max-width: 100%;
  }
}

.sd[data-s-befc74c8-130e-48b9-8a37-02bfacf921bf] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 700;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 50%;
  max-width: 50%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-befc74c8-130e-48b9-8a37-02bfacf921bf] {
    font-size: 10px;
    width: 67px;
    max-width: 100%;
  }
}

.sd[data-s-6b8eb299-a442-4eb6-a33f-c4a8cc00c2a4] {
  align-content: center;
  align-items: center;
  background: rgb(250, 243, 230);
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 1px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 160px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-6b8eb299-a442-4eb6-a33f-c4a8cc00c2a4] {
    flex: none;
    width: 70px;
    max-width: 100%;
  }
}

.sd[data-s-62494797-2197-4a70-9bb6-af527503e979] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 700;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 84px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-62494797-2197-4a70-9bb6-af527503e979] {
    font-size: 10px;
  }
}

.sd[data-s-f07632b9-bd91-4b0c-8d0a-be58a8b1da7f] {
  align-content: center;
  align-items: center;
  background: rgb(250, 243, 230);
  border-bottom: 0px solid #000;
  border-left: 0px solid #000;
  border-right: 0px solid #000;
  border-top: 0px solid #000;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 630px) {
  .sd[data-s-f07632b9-bd91-4b0c-8d0a-be58a8b1da7f] {
    display: flex;
    padding: 0px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-f07632b9-bd91-4b0c-8d0a-be58a8b1da7f] {
    display: flex;
  }
}

.sd[data-s-7a3d7ced-77c5-4d34-8935-c090e64f7545] {
  align-content: flex-end;
  align-items: flex-end;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 0px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 0px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 60px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-7a3d7ced-77c5-4d34-8935-c090e64f7545] {
    flex: none;
    width: 40px;
    max-width: 100%;
  }
}

.sd[data-s-4131a4ed-bed3-4211-9d34-307a76b07ced] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 1px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 80px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-4131a4ed-bed3-4211-9d34-307a76b07ced] {
    flex: none;
    width: 50px;
    max-width: 100%;
  }
}

.sd[data-s-599adbf8-517d-44f0-8abe-0def7f0cb6e8] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 47px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-599adbf8-517d-44f0-8abe-0def7f0cb6e8] {
    font-size: 10px;
  }
}

.sd[data-s-e74b65ec-bf49-4e9a-bd16-12c457617014] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 260px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-e74b65ec-bf49-4e9a-bd16-12c457617014] {
    flex: none;
    width: 70px;
    max-width: 100%;
  }
}

.sd[data-s-28091fce-e3e6-4c2e-a9eb-988a9caa44b3] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 168px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-28091fce-e3e6-4c2e-a9eb-988a9caa44b3] {
    font-size: 10px;
    width: 44px;
    max-width: 100%;
  }
}

.sd[data-s-86cc4883-b8e5-4779-9d11-20190960d3b5] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 160px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-86cc4883-b8e5-4779-9d11-20190960d3b5] {
    flex: none;
    width: 70px;
    max-width: 100%;
  }
}

.sd[data-s-59861c3d-d8f7-4ad1-9e19-0acd87fc5eda] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 50%;
  max-width: 50%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-59861c3d-d8f7-4ad1-9e19-0acd87fc5eda] {
    font-size: 10px;
    width: 100%;
    max-width: 100%;
  }
}

.sd[data-s-9978e308-9405-43f0-8e10-e149829ae94b] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 160px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-9978e308-9405-43f0-8e10-e149829ae94b] {
    flex: none;
    width: 70px;
    max-width: 100%;
  }
}

.sd[data-s-4d3e2caf-9803-4a74-83ac-7088b9583a48] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 84px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-4d3e2caf-9803-4a74-83ac-7088b9583a48] {
    font-size: 10px;
  }
}

.sd[data-s-f43ab8e3-563d-4f55-ac91-5130922ca521] {
  align-content: center;
  align-items: center;
  background: rgb(250, 243, 230);
  border-bottom: 0px solid #000;
  border-left: 0px solid #000;
  border-right: 0px solid #000;
  border-top: 0px solid #000;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 630px) {
  .sd[data-s-f43ab8e3-563d-4f55-ac91-5130922ca521] {
    display: flex;
    padding: 0px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-f43ab8e3-563d-4f55-ac91-5130922ca521] {
    display: flex;
  }
}

.sd[data-s-43aaa184-cd6d-4d99-975a-806fe9e232f1] {
  align-content: flex-end;
  align-items: flex-end;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 0px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 0px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 60px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-43aaa184-cd6d-4d99-975a-806fe9e232f1] {
    flex: none;
    width: 40px;
    max-width: 100%;
  }
}

.sd[data-s-14e86aa4-b69b-40aa-8cdd-dc92a5f3e583] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 1px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 80px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-14e86aa4-b69b-40aa-8cdd-dc92a5f3e583] {
    flex: none;
    width: 50px;
    max-width: 100%;
  }
}

.sd[data-s-936d5143-f0ae-4c5a-9cda-24a70e8c815d] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 47px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-936d5143-f0ae-4c5a-9cda-24a70e8c815d] {
    font-size: 10px;
  }
}

.sd[data-s-14d0f39a-ecdc-46b5-a570-9be38b252b3a] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 260px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-14d0f39a-ecdc-46b5-a570-9be38b252b3a] {
    flex: none;
    width: 70px;
    max-width: 100%;
  }
}

.sd[data-s-eba68b16-5e59-444c-9e72-d688d0c46cc8] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 168px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-eba68b16-5e59-444c-9e72-d688d0c46cc8] {
    font-size: 10px;
    width: 54px;
    max-width: 100%;
  }
}

.sd[data-s-cb447b10-5ecb-410b-85b3-9542bf545d96] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 160px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-cb447b10-5ecb-410b-85b3-9542bf545d96] {
    flex: none;
    width: 70px;
    max-width: 100%;
  }
}

.sd[data-s-5df1525f-9ee7-4ead-b7d1-3c6012e95328] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 50%;
  max-width: 50%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-5df1525f-9ee7-4ead-b7d1-3c6012e95328] {
    font-size: 10px;
    width: 100%;
    max-width: 100%;
  }
}

.sd[data-s-bb08a053-7ac8-4026-b76b-f2046a8a401b] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 160px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-bb08a053-7ac8-4026-b76b-f2046a8a401b] {
    flex: none;
    width: 70px;
    max-width: 100%;
  }
}

.sd[data-s-ea9ea65c-aa86-4e4f-8cc0-a8018ebdeb7b] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 84px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-ea9ea65c-aa86-4e4f-8cc0-a8018ebdeb7b] {
    font-size: 10px;
  }
}

.sd[data-s-cb389a58-5b23-48b8-8686-81df2f925b89] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 630px) {
  .sd[data-s-cb389a58-5b23-48b8-8686-81df2f925b89] {
    display: flex;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-cb389a58-5b23-48b8-8686-81df2f925b89] {
    display: flex;
  }
}

.sd[data-s-822c2854-da4b-4880-962f-a98df7f70115] {
  align-content: center;
  align-items: center;
  background: rgb(250, 243, 230);
  border-bottom: 0px solid #000;
  border-left: 0px solid #000;
  border-right: 0px solid #000;
  border-top: 0px solid #000;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 630px) {
  .sd[data-s-822c2854-da4b-4880-962f-a98df7f70115] {
    display: none;
    padding: 0px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-822c2854-da4b-4880-962f-a98df7f70115] {
    display: none;
  }
}

.sd[data-s-9b70fa16-7677-424c-ba98-b86579cb9141] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 0px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 0px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 60px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-9b70fa16-7677-424c-ba98-b86579cb9141] {
    flex: none;
    width: 80px;
    max-width: 100%;
  }
}

.sd[data-s-957317a7-8419-4cad-a0c7-7ebb4c6e974a] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 700;
  height: 49px;
  line-height: 1.4;
  text-align: right;
  width: 43px;
  writing-mode: vertical-rl;
  -ms-writing-mode: vertical-rl;
  -webkit-writing-mode: vertical-rl;
  max-width: 100%;
  justify-content: flex-end;
}

.sd[data-s-ddd6cce9-9975-4095-8b68-d91398cf438a] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 1px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 80px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-ddd6cce9-9975-4095-8b68-d91398cf438a] {
    flex: none;
    width: 75px;
    max-width: 100%;
  }
}

.sd[data-s-9cbc62b9-c574-4de9-891b-386f90b3495f] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 47px;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-a58d7863-eda3-4711-89fc-13a580f80a0e] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 260px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-a58d7863-eda3-4711-89fc-13a580f80a0e] {
    flex: none;
    width: 75px;
    max-width: 100%;
  }
}

.sd[data-s-bd3a3337-774d-4e01-b568-bf1227a3e2ea] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 168px;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-63f297c8-0390-4fbb-8270-802273aac3f0] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 160px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-63f297c8-0390-4fbb-8270-802273aac3f0] {
    flex: none;
    width: 75px;
    max-width: 100%;
  }
}

.sd[data-s-aca71b17-c62a-4c16-a73e-e315d5310e09] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 50%;
  max-width: 50%;
  justify-content: center;
}

.sd[data-s-c024a465-b09f-4eef-b964-8e24e6ea7a33] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 160px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-c024a465-b09f-4eef-b964-8e24e6ea7a33] {
    flex: none;
    width: 75px;
    max-width: 100%;
  }
}

.sd[data-s-fa9a2560-269f-4680-9c1c-ba4f1d854314] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 84px;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-2b229007-c2c7-4624-935b-9188937fdae0] {
  align-content: center;
  align-items: center;
  background: rgb(250, 243, 230);
  border-bottom: 0px solid #000;
  border-left: 0px solid #000;
  border-right: 0px solid #000;
  border-top: 0px solid #000;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 630px) {
  .sd[data-s-2b229007-c2c7-4624-935b-9188937fdae0] {
    display: flex;
    padding: 0px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-2b229007-c2c7-4624-935b-9188937fdae0] {
    display: flex;
  }
}

.sd[data-s-724fbf84-5ea6-412f-8ac0-f52f5bc52e1d] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 0px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 0px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 60px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-724fbf84-5ea6-412f-8ac0-f52f5bc52e1d] {
    flex: none;
    width: 40px;
    max-width: 100%;
  }
}

.sd[data-s-0b01e73f-abc0-4879-b612-ccc55344a18c] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 700;
  height: 100%;
  line-height: 1.4;
  text-align: left;
  width: 26px;
  writing-mode: vertical-rl;
  -ms-writing-mode: vertical-rl;
  -webkit-writing-mode: vertical-rl;
  max-width: 100%;
  justify-content: flex-start;
}

.sd[data-s-74991610-40fe-473a-9ebd-6b21de9b6c31] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 1px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 80px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-74991610-40fe-473a-9ebd-6b21de9b6c31] {
    flex: none;
    width: 50px;
    max-width: 100%;
  }
}

.sd[data-s-17fb5a61-8a25-49e8-a0e1-b98433b244cb] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 47px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-17fb5a61-8a25-49e8-a0e1-b98433b244cb] {
    font-size: 10px;
  }
}

.sd[data-s-ce6c796c-58da-4d7c-b9eb-4ef897ffa6b4] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 260px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-ce6c796c-58da-4d7c-b9eb-4ef897ffa6b4] {
    flex: none;
    width: 70px;
    max-width: 100%;
  }
}

.sd[data-s-c81c623c-4ccb-4e54-b2ff-4ee9c9f1690c] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 168px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-c81c623c-4ccb-4e54-b2ff-4ee9c9f1690c] {
    font-size: 10px;
  }
}

.sd[data-s-9c83d667-7013-4826-a9fd-c71fcd43d99f] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 160px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-9c83d667-7013-4826-a9fd-c71fcd43d99f] {
    flex: none;
    width: 70px;
    max-width: 100%;
  }
}

.sd[data-s-de54fbac-836d-4eb6-83bd-f21364debec8] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 50%;
  max-width: 50%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-de54fbac-836d-4eb6-83bd-f21364debec8] {
    font-size: 10px;
    width: 100%;
    max-width: 100%;
  }
}

.sd[data-s-b42747b3-87c2-4557-bd07-616eb1b51413] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 160px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-b42747b3-87c2-4557-bd07-616eb1b51413] {
    flex: none;
    width: 70px;
    max-width: 100%;
  }
}

.sd[data-s-3fb9eb22-689c-4dc8-ae4d-19297ec3ecc0] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 84px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-3fb9eb22-689c-4dc8-ae4d-19297ec3ecc0] {
    font-size: 10px;
  }
}

.sd[data-s-c78be206-5650-4201-be71-8863e7cc60bd] {
  align-content: center;
  align-items: center;
  background: rgb(250, 243, 230);
  border-bottom: 0px solid #000;
  border-left: 0px solid #000;
  border-right: 0px solid #000;
  border-top: 0px solid #000;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 630px) {
  .sd[data-s-c78be206-5650-4201-be71-8863e7cc60bd] {
    display: flex;
    padding: 0px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-c78be206-5650-4201-be71-8863e7cc60bd] {
    display: flex;
  }
}

.sd[data-s-ada93234-5154-4611-896b-0646ebc92dca] {
  align-content: flex-end;
  align-items: flex-end;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 0px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 0px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 60px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-ada93234-5154-4611-896b-0646ebc92dca] {
    flex: none;
    width: 40px;
    max-width: 100%;
  }
}

.sd[data-s-eccf15cd-be18-416d-b286-15bcb63373bf] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 1px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 80px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-eccf15cd-be18-416d-b286-15bcb63373bf] {
    flex: none;
    width: 50px;
    max-width: 100%;
  }
}

.sd[data-s-fe7d9d24-ce70-40be-a24f-8160eaa1e1f0] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 47px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-fe7d9d24-ce70-40be-a24f-8160eaa1e1f0] {
    font-size: 10px;
  }
}

.sd[data-s-c8e035f9-8259-47cb-aa49-710f28b05ddc] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 260px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-c8e035f9-8259-47cb-aa49-710f28b05ddc] {
    flex: none;
    width: 70px;
    max-width: 100%;
  }
}

.sd[data-s-ccec750d-32fe-4471-abef-bed5663e0d08] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 168px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-ccec750d-32fe-4471-abef-bed5663e0d08] {
    font-size: 10px;
    width: 100%;
    max-width: 100%;
  }
}

.sd[data-s-4f20012d-1f52-4832-93f4-835382d81022] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 160px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-4f20012d-1f52-4832-93f4-835382d81022] {
    flex: none;
    width: 70px;
    max-width: 100%;
  }
}

.sd[data-s-0b543ffd-d02d-4822-839a-b93ca3e1309e] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 50%;
  max-width: 50%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-0b543ffd-d02d-4822-839a-b93ca3e1309e] {
    font-size: 10px;
    width: 100%;
    max-width: 100%;
  }
}

.sd[data-s-f010df38-d544-48da-89b9-a0bc33c12cfd] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 160px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-f010df38-d544-48da-89b9-a0bc33c12cfd] {
    flex: none;
    width: 70px;
    max-width: 100%;
  }
}

.sd[data-s-94d69c3d-126e-49fc-aef9-c8ea3a3e2e55] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 84px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-94d69c3d-126e-49fc-aef9-c8ea3a3e2e55] {
    font-size: 10px;
  }
}

.sd[data-s-2e0031e3-cd1f-4fff-bef4-09fe9008b808] {
  align-content: center;
  align-items: center;
  background: rgb(250, 243, 230);
  border-bottom: 0px solid #000;
  border-left: 0px solid #000;
  border-right: 0px solid #000;
  border-top: 0px solid #000;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 630px) {
  .sd[data-s-2e0031e3-cd1f-4fff-bef4-09fe9008b808] {
    display: flex;
    padding: 0px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-2e0031e3-cd1f-4fff-bef4-09fe9008b808] {
    display: flex;
  }
}

.sd[data-s-f37ef9a5-7fdd-4f7e-b5aa-10705f6676b7] {
  align-content: flex-end;
  align-items: flex-end;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 0px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  width: 60px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-f37ef9a5-7fdd-4f7e-b5aa-10705f6676b7] {
    flex: none;
    width: 40px;
    max-width: 100%;
  }
}

.sd[data-s-4d68818f-72d0-480e-bf18-0c4059806019] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 1px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 80px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-4d68818f-72d0-480e-bf18-0c4059806019] {
    flex: none;
    width: 50px;
    max-width: 100%;
  }
}

.sd[data-s-adf4e371-7dbc-419a-8ec7-5c804ce52e47] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 47px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-adf4e371-7dbc-419a-8ec7-5c804ce52e47] {
    font-size: 10px;
  }
}

.sd[data-s-f6585607-1569-435c-bdb9-78ecee3b4d77] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 260px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-f6585607-1569-435c-bdb9-78ecee3b4d77] {
    flex: none;
    width: 70px;
    max-width: 100%;
  }
}

.sd[data-s-e6f20930-bab7-40e9-af42-f61332952d06] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 168px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-e6f20930-bab7-40e9-af42-f61332952d06] {
    font-size: 10px;
    width: 59px;
    max-width: 100%;
  }
}

.sd[data-s-41169d8e-6778-4635-87ae-185d4950e6cb] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 160px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-41169d8e-6778-4635-87ae-185d4950e6cb] {
    flex: none;
    width: 70px;
    max-width: 100%;
  }
}

.sd[data-s-a2b6367e-573b-4862-b884-073b6d64e153] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 50%;
  max-width: 50%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-a2b6367e-573b-4862-b884-073b6d64e153] {
    font-size: 10px;
    width: 100%;
    max-width: 100%;
  }
}

.sd[data-s-6bd572c9-9e2b-48fe-821c-ec124e719502] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 1px solid rgb(158, 63, 35);
  border-left: 0px solid rgb(158, 63, 35);
  border-right: 1px solid rgb(158, 63, 35);
  border-top: 0px solid rgb(158, 63, 35);
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  width: 160px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-6bd572c9-9e2b-48fe-821c-ec124e719502] {
    flex: none;
    width: 70px;
    max-width: 100%;
  }
}

.sd[data-s-7e8e55de-1114-4072-9b36-dcfd9685e0fa] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 13px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: 84px;
  max-width: 100%;
  justify-content: center;
}

@media screen and (max-width: 630px) {
  .sd[data-s-7e8e55de-1114-4072-9b36-dcfd9685e0fa] {
    font-size: 10px;
  }
}

.sd[data-s-47a9b604-b970-4835-a5ff-ead7d9bb6352] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 12px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 30px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  text-align: justify;
  width: 720px;
  max-width: 100%;
  justify-content: space-between;
}

@media screen and (max-width: 630px) {
  .sd[data-s-47a9b604-b970-4835-a5ff-ead7d9bb6352] {
    flex: none;
    width: 386px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-47a9b604-b970-4835-a5ff-ead7d9bb6352] {
    padding: 0px 15px 0px 15px;
  }
}

.sd[data-s-b7bcc40f-84ed-46b9-85ec-9eae2b6a7270] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 71px;
  justify-content: flex-start;
  margin: 50px 0px 0px 0px;
  padding: 0px;
  width: 720px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-b7bcc40f-84ed-46b9-85ec-9eae2b6a7270] {
    display: flex;
    flex: none;
    height: 50px;
    margin: 20px 0px 0px 0px;
    padding: 15px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-b7bcc40f-84ed-46b9-85ec-9eae2b6a7270] {
    display: flex;
    height: 49px;
    margin: 20px 0px 0px 0px;
    max-width: 100%;
  }
}

.sd[data-s-6f6d5324-39ab-4375-8d07-87fe7d4210d7] {
  align-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-b041f9aa-dc19-48c4-a462-db06d9be9986] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: left;
  width: 161px;
  max-width: 100%;
  justify-content: flex-start;
}

@media screen and (max-width: 630px) {
  .sd[data-s-b041f9aa-dc19-48c4-a462-db06d9be9986] {
    font-size: 13px;
    width: 130px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-b041f9aa-dc19-48c4-a462-db06d9be9986] {
    font-size: 12px;
    width: 120px;
    max-width: 100%;
  }
}

.sd[data-s-1d8de012-acb7-4d28-b4dc-20d576720f82] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 0px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 0px solid rgb(228, 241, 254);
  border-top: 0px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 23px;
  justify-content: center;
  width: 177px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-1d8de012-acb7-4d28-b4dc-20d576720f82] {
    flex: none;
    width: 143px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-1d8de012-acb7-4d28-b4dc-20d576720f82] {
    width: 132px;
    max-width: 100%;
  }
}

.sd[data-s-e88ffdbb-74b6-4df2-8bb0-1516b7853783] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 700;
  height: auto;
  line-height: 1.4;
  text-align: left;
  width: 177px;
  max-width: 100%;
  justify-content: flex-start;
}

@media screen and (max-width: 630px) {
  .sd[data-s-e88ffdbb-74b6-4df2-8bb0-1516b7853783] {
    font-size: 13px;
    width: 143px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-e88ffdbb-74b6-4df2-8bb0-1516b7853783] {
    font-size: 12px;
    width: 132px;
    max-width: 100%;
  }
}

.sd[data-s-c452206f-8650-4c61-a29b-f05f661bab59] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: left;
  width: 51px;
  max-width: 100%;
  justify-content: flex-start;
}

@media screen and (max-width: 630px) {
  .sd[data-s-c452206f-8650-4c61-a29b-f05f661bab59] {
    font-size: 13px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-c452206f-8650-4c61-a29b-f05f661bab59] {
    font-size: 12px;
    width: 37px;
    max-width: 100%;
  }
}

.sd[data-s-d2448091-f8e7-4916-9bb1-66e60f8845e8] {
  align-content: flex-start;
  align-items: flex-start;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 71px;
  justify-content: center;
  margin: 0px 0px 0px 0px;
  padding: 0px;
  width: 720px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-d2448091-f8e7-4916-9bb1-66e60f8845e8] {
    display: flex;
    flex: none;
    height: auto;
    padding: 20px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-d2448091-f8e7-4916-9bb1-66e60f8845e8] {
    display: flex;
  }
}

.sd[data-s-bcca1012-cbd6-4ee7-a9b3-ffc33696f079] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 12px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: left;
  width: 100%;
  max-width: 100%;
  justify-content: flex-start;
}

@media screen and (max-width: 630px) {
  .sd[data-s-bcca1012-cbd6-4ee7-a9b3-ffc33696f079] {
    font-size: 12px;
  }
}

.sd[data-s-5a26b6cf-2d8e-4aa5-b148-3be561e796c9] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-38f04e35-96b8-4c30-bce3-08996b19a936] {
  color: rgb(158, 63, 35);
  font-family: var(--s-font-d7b1509a);
  font-size: 12px;
  font-weight: 700;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-9abd4e5b-f36a-492e-96a3-61806f0a5571] {
  color: rgb(158, 63, 35);
  font-family: var(--s-font-d7b1509a);
  font-size: 12px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-a039acc9-0956-4acc-892e-2a4ff59b9462] {
  flex: none;
  height: auto;
  margin: 30px 0px 0px 0px;
  width: 719px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-a039acc9-0956-4acc-892e-2a4ff59b9462] {
    margin: 0px 15px 0px 15px;
    max-width: calc(100% - 30px);
  }
}

.sd[data-s-ce1d35b3-f4f8-4d03-b363-39e6070afb9e] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 71px;
  justify-content: flex-start;
  margin: 50px 0px 0px 0px;
  padding: 0px;
  width: 720px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-ce1d35b3-f4f8-4d03-b363-39e6070afb9e] {
    display: flex;
    margin: 0px 0px 0px 0px;
    padding: 15px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-ce1d35b3-f4f8-4d03-b363-39e6070afb9e] {
    display: flex;
    height: 50px;
    max-width: 100%;
  }
}

.sd[data-s-16fb4c2d-d28d-4acb-850d-3d2c48c374ef] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: left;
  width: 161px;
  max-width: 100%;
  justify-content: flex-start;
}

@media screen and (max-width: 630px) {
  .sd[data-s-16fb4c2d-d28d-4acb-850d-3d2c48c374ef] {
    font-size: 13px;
    width: 130px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-16fb4c2d-d28d-4acb-850d-3d2c48c374ef] {
    font-size: 12px;
    width: 120px;
    max-width: 100%;
  }
}

.sd[data-s-4c4efb45-9a71-41d0-b97f-11b28c39a4d9] {
  align-content: center;
  align-items: center;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  border-bottom: 0px solid rgb(228, 241, 254);
  border-left: 0px solid rgb(228, 241, 254);
  border-right: 0px solid rgb(228, 241, 254);
  border-top: 0px solid rgb(228, 241, 254);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 23px;
  justify-content: center;
  width: 177px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-4c4efb45-9a71-41d0-b97f-11b28c39a4d9] {
    flex: none;
    width: 143px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-4c4efb45-9a71-41d0-b97f-11b28c39a4d9] {
    width: 132px;
    max-width: 100%;
  }
}

.sd[data-s-89ad5e20-98a0-41cf-98b1-3815fe9ae042] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 700;
  height: auto;
  line-height: 1.4;
  text-align: left;
  width: 177px;
  max-width: 100%;
  justify-content: flex-start;
}

@media screen and (max-width: 630px) {
  .sd[data-s-89ad5e20-98a0-41cf-98b1-3815fe9ae042] {
    font-size: 13px;
    width: 143px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-89ad5e20-98a0-41cf-98b1-3815fe9ae042] {
    font-size: 12px;
    width: 132px;
    max-width: 100%;
  }
}

.sd[data-s-45b7018b-b2f6-47c5-8ce2-aadd46dcbcd3] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 16px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: left;
  width: 51px;
  max-width: 100%;
  justify-content: flex-start;
}

@media screen and (max-width: 630px) {
  .sd[data-s-45b7018b-b2f6-47c5-8ce2-aadd46dcbcd3] {
    font-size: 13px;
    width: 41px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-45b7018b-b2f6-47c5-8ce2-aadd46dcbcd3] {
    font-size: 12px;
    width: 37px;
    max-width: 100%;
  }
}

.sd[data-s-97fa5464-bb41-4f28-ae94-209d48dd386f] {
  align-content: flex-start;
  align-items: flex-start;
  background: linear-gradient(var(--g-angle), var(--g-color-0) var(--g-position-0), var(--g-color-1) var(--g-position-1));
  display: none;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 71px;
  justify-content: center;
  margin: 0px 0px 0px 0px;
  padding: 0px;
  width: 720px;
  max-width: 100%;
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-97fa5464-bb41-4f28-ae94-209d48dd386f] {
    display: none;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-97fa5464-bb41-4f28-ae94-209d48dd386f] {
    display: flex;
    flex: none;
    height: auto;
    padding: 15px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-97fa5464-bb41-4f28-ae94-209d48dd386f] {
    display: flex;
    flex: none;
    height: auto;
  }
}

.sd[data-s-ad138eee-326b-46a7-96d4-2dbe89839e88] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 12px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: left;
  width: 100%;
  max-width: 100%;
  justify-content: flex-start;
}

@media screen and (max-width: 630px) {
  .sd[data-s-ad138eee-326b-46a7-96d4-2dbe89839e88] {
    display: none;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-ad138eee-326b-46a7-96d4-2dbe89839e88] {
    display: none;
  }
}

.sd[data-s-928fea55-fc58-4c38-b872-234c3f3b3b31] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 630px) {
  .sd[data-s-928fea55-fc58-4c38-b872-234c3f3b3b31] {
    display: none;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-928fea55-fc58-4c38-b872-234c3f3b3b31] {
    display: none;
  }
}

.sd[data-s-9535d976-5679-43aa-a766-00c676977ba1] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 12px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: left;
  width: 371px;
  max-width: 100%;
  justify-content: flex-start;
}

@media screen and (max-width: 630px) {
  .sd[data-s-9535d976-5679-43aa-a766-00c676977ba1] {
    flex: none;
    height: 34px;
    width: 517px;
    max-width: 100%;
  }
}

.sd[data-s-0b459c23-15d8-481b-ab67-ee256a909c39] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-4ae4f395-77af-4590-b572-1df14a3d0c27] {
  color: rgb(158, 63, 35);
  font-family: var(--s-font-d7b1509a);
  font-size: 12px;
  font-weight: 700;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-a982a94c-bfc8-4c2b-ba4c-2d4650945f0c] {
  color: rgb(158, 63, 35);
  font-family: var(--s-font-d7b1509a);
  font-size: 12px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-863fb5b7-1e9e-45a3-a087-a8ff28cb9d01] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 12px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: left;
  width: 100%;
  max-width: 100%;
  justify-content: flex-start;
}

@media screen and (max-width: 630px) {
  .sd[data-s-863fb5b7-1e9e-45a3-a087-a8ff28cb9d01] {
    display: none;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-863fb5b7-1e9e-45a3-a087-a8ff28cb9d01] {
    display: none;
  }
}

.sd[data-s-13d9a420-46c1-4ec2-ae32-2e9bc80bae75] {
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

.sd[data-s-84f28e4c-c623-4258-a5a0-52a5a1ad7f39] {
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
  .sd[data-s-84f28e4c-c623-4258-a5a0-52a5a1ad7f39] {
    color: rgb(158, 63, 35);
    font-size: 12px;
    text-align: left;
    justify-content: flex-start;
  }
}

.sd[data-s-a0fa46ee-3173-42db-92ef-98eaa9bda984] {
  flex: none;
  height: auto;
  margin: 30px 0px 0px 0px;
  width: 719px;
  max-width: 100%;
}

@media screen and (max-width: 630px) {
  .sd[data-s-a0fa46ee-3173-42db-92ef-98eaa9bda984] {
    margin: 30px 15px 0px 15px;
    max-width: calc(100% - 30px);
  }
}

.sd[data-s-af44c370-aae3-4307-a291-095887b5ba49] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 30px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  text-align: left;
  width: 720px;
  max-width: 100%;
  justify-content: flex-start;
}

@media screen and (max-width: 630px) {
  .sd[data-s-af44c370-aae3-4307-a291-095887b5ba49] {
    font-size: 10px;
    margin: 30px 15px 0px 15px;
    width: 330px;
    max-width: calc(100% - 30px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-af44c370-aae3-4307-a291-095887b5ba49] {
    padding: 0px 0px 0px 0px;
  }
}

.sd[data-s-bebfff3d-d6d6-4fbf-bc5d-544ed28e9ab5] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 100px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  text-align: left;
  width: 720px;
  max-width: 100%;
  justify-content: flex-start;
}

@media screen and (max-width: 630px) {
  .sd[data-s-bebfff3d-d6d6-4fbf-bc5d-544ed28e9ab5] {
    font-size: 10px;
    margin: 30px 0px 0px 0px;
    width: 330px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-bebfff3d-d6d6-4fbf-bc5d-544ed28e9ab5] {
    padding: 0px 15px 0px 15px;
  }
}

.sd[data-s-c75965fa-3099-4217-a54c-0eaf0c7c26f9] {
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
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-c75965fa-3099-4217-a54c-0eaf0c7c26f9] {
    height: 70px;
    margin: 20px 0px 0px 0px;
    width: 100%;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-c75965fa-3099-4217-a54c-0eaf0c7c26f9] {
    height: 71px;
    padding: 0px 0px 0px 0px;
    width: 100%;
    max-width: 100%;
  }
}

.sd[data-s-9e63de9b-360d-4e0b-99ce-66717e431a89] {
  color: rgb(158, 63, 35);
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
  .sd[data-s-9e63de9b-360d-4e0b-99ce-66717e431a89] {
    font-size: 28px;
    padding: 0px 0px 0px 0px;
    width: 100%;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-9e63de9b-360d-4e0b-99ce-66717e431a89] {
    font-size: 24px;
    width: 100%;
  }
}

.sd[data-s-97fbf3a8-0fef-4ec1-9248-59e05871cf95] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-radius: 24px;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: auto;
  justify-content: flex-start;
  margin: 0px 0px 0px 0px;
  width: auto;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-97fbf3a8-0fef-4ec1-9248-59e05871cf95] {
    flex: none;
    height: auto;
    margin: 20px 50px 0px 50px;
    max-width: calc(100% - 100px);
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-97fbf3a8-0fef-4ec1-9248-59e05871cf95] {
    flex: none;
    height: auto;
    margin: 20px 20px 0px 20px;
    max-width: calc(100% - 40px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-97fbf3a8-0fef-4ec1-9248-59e05871cf95] {
    flex: none;
    height: auto;
    margin: 20px 20px 0px 20px;
  }
}

.sd[data-s-c8e959c3-0ad2-471e-87f3-8ce971cb6f93] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 11px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 23px 100px 20px 101px;
  padding: 0px 0px 0px 0px;
  text-align: left;
  width: 1004px;
  max-width: calc(100% - 201px);
  justify-content: flex-start;
}

@media screen and (max-width: 890px) {
  .sd[data-s-c8e959c3-0ad2-471e-87f3-8ce971cb6f93] {
    font-size: 20px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-c8e959c3-0ad2-471e-87f3-8ce971cb6f93] {
    font-size: 16px;
    margin: 20px 30px 30px 30px;
    max-width: calc(100% - 60px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-c8e959c3-0ad2-471e-87f3-8ce971cb6f93] {
    margin: 23px 20px 20px 20px;
    max-width: calc(100% - 40px);
  }
}

.sd[data-s-dce70a58-0d3b-483d-ba7a-63684437b575] {
  align-content: center;
  align-items: center;
  background: rgb(241, 79, 0);
  border-radius: 12px;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 80px;
  justify-content: center;
  margin: 20px 0px 50px 0px;
  padding: 0px 0px 0px 0px;
  width: 500px;
  max-width: 100%;
}

.sd[data-s-dce70a58-0d3b-483d-ba7a-63684437b575]:hover {
  background: rgba(241, 79, 0, 0.5);
  flex: none;
}

@media screen and (max-width: 630px) {
  .sd[data-s-dce70a58-0d3b-483d-ba7a-63684437b575] {
    margin: 20px 20px 30px 20px;
    max-width: calc(100% - 40px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-dce70a58-0d3b-483d-ba7a-63684437b575] {
    height: 56px;
    max-width: calc(100% - 40px);
  }
}

.sd[data-s-43c231ae-c160-45e1-be63-6aa3015788bc] {
  color: rgb(255, 255, 255);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 18px;
  font-weight: 900;
  height: 38px;
  line-height: 1.4;
  text-align: center;
  width: 224px;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-4784bf51-b5b9-4969-b606-e03da6a68cd3] {
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
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-4784bf51-b5b9-4969-b606-e03da6a68cd3] {
    height: 70px;
    margin: 20px 0px 0px 0px;
    width: 100%;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-4784bf51-b5b9-4969-b606-e03da6a68cd3] {
    height: 71px;
    padding: 0px 20px 0px 20px;
    width: 100%;
    max-width: 100%;
  }
}

.sd[data-s-2d53d733-226d-48ca-8420-be3b2b5a2ccd] {
  color: rgb(158, 63, 35);
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
  .sd[data-s-2d53d733-226d-48ca-8420-be3b2b5a2ccd] {
    font-size: 28px;
    padding: 0px 0px 0px 0px;
    width: 100%;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-2d53d733-226d-48ca-8420-be3b2b5a2ccd] {
    font-size: 24px;
    width: 100%;
  }
}

.sd[data-s-a8e73c64-dd98-478f-9149-249cba772530] {
  align-content: flex-start;
  align-items: flex-start;
  background: #FFFFFF;
  border-radius: 24px;
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: auto;
  justify-content: center;
  margin: 0px 0px 0px 0px;
  width: auto;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-a8e73c64-dd98-478f-9149-249cba772530] {
    margin: 20px 50px 0px 50px;
    max-width: calc(100% - 100px);
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-a8e73c64-dd98-478f-9149-249cba772530] {
    flex: none;
    height: auto;
    margin: 20px 20px 0px 20px;
    max-width: calc(100% - 40px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-a8e73c64-dd98-478f-9149-249cba772530] {
    flex: none;
    height: auto;
  }
}

.sd[data-s-b0522f3a-caf7-4daf-b972-722c2a60bf52] {
  align-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-3c0edfe1-6de5-4073-a159-c02c40b89f52] {
  align-content: center;
  align-items: center;
  background: rgb(241, 79, 0);
  border-radius: 12px;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 80px;
  justify-content: center;
  margin: 60px 25px 60px 178px;
  padding: 0px 0px 0px 0px;
  width: 400px;
  max-width: calc(100% - 203px);
}

.sd[data-s-3c0edfe1-6de5-4073-a159-c02c40b89f52]:hover {
  background: rgba(241, 79, 0, 0.5);
  flex: none;
}

@media screen and (max-width: 890px) {
  .sd[data-s-3c0edfe1-6de5-4073-a159-c02c40b89f52] {
    flex: none;
    margin: 50px 0px 0px 0px;
    width: 500px;
    max-width: 100%;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-3c0edfe1-6de5-4073-a159-c02c40b89f52] {
    margin: 30px 20px 0px 20px;
    max-width: calc(100% - 40px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-3c0edfe1-6de5-4073-a159-c02c40b89f52] {
    height: 56px;
    max-width: calc(100% - 40px);
  }
}

.sd[data-s-73903ab8-7066-4bd1-b1e9-bd7be960026f] {
  color: rgb(255, 255, 255);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 18px;
  font-weight: 900;
  height: 38px;
  line-height: 1.4;
  text-align: center;
  width: 224px;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-e146313b-d92f-43f7-9d01-4f3950c58198] {
  align-content: center;
  align-items: center;
  background: rgb(241, 79, 0);
  border-radius: 12px;
  display: none;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 80px;
  justify-content: center;
  margin: 60px 178px 60px 25px;
  padding: 0px 0px 0px 0px;
  width: 400px;
  max-width: calc(100% - 203px);
}

.sd[data-s-e146313b-d92f-43f7-9d01-4f3950c58198]:hover {
  background: rgba(241, 79, 0, 0.5);
  flex: none;
}

@media screen and (max-width: 890px) {
  .sd[data-s-e146313b-d92f-43f7-9d01-4f3950c58198] {
    display: flex;
    flex: none;
    flex-direction: column;
    flex-wrap: nowrap;
    margin: 30px 0px 50px 0px;
    width: 500px;
    max-width: 100%;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-e146313b-d92f-43f7-9d01-4f3950c58198] {
    display: flex;
    margin: 30px 20px 30px 20px;
    max-width: calc(100% - 40px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-e146313b-d92f-43f7-9d01-4f3950c58198] {
    display: flex;
    height: 56px;
    max-width: calc(100% - 40px);
  }
}

.sd[data-s-c460ab68-b6cb-4d25-b332-2232d95e393c] {
  color: rgb(255, 255, 255);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 18px;
  font-weight: 900;
  height: 38px;
  line-height: 1.4;
  text-align: center;
  width: 224px;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-d3f97724-bcaa-4faa-86a5-99cc566348b0] {
  align-content: center;
  align-items: center;
  background: rgb(241, 79, 0);
  border-radius: 12px;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 80px;
  justify-content: center;
  margin: 60px 178px 60px 25px;
  padding: 0px 0px 0px 0px;
  width: 400px;
  max-width: calc(100% - 203px);
}

.sd[data-s-d3f97724-bcaa-4faa-86a5-99cc566348b0]:hover {
  background: rgba(241, 79, 0, 0.5);
  flex: none;
}

@media screen and (max-width: 890px) {
  .sd[data-s-d3f97724-bcaa-4faa-86a5-99cc566348b0] {
    display: none;
    flex-direction: column;
    flex-wrap: nowrap;
    margin: 30px 0px 0px 0px;
    max-width: 100%;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-d3f97724-bcaa-4faa-86a5-99cc566348b0] {
    display: none;
    margin: 30px 20px 0px 20px;
    max-width: calc(100% - 40px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-d3f97724-bcaa-4faa-86a5-99cc566348b0] {
    display: none;
    height: 56px;
    margin: 10px 30px 0px 30px;
    max-width: calc(100% - 60px);
  }
}

.sd[data-s-3b4689da-268e-47f7-a184-e141fa45e206] {
  color: rgb(255, 255, 255);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 18px;
  font-weight: 900;
  height: 38px;
  line-height: 1.4;
  text-align: center;
  width: 224px;
  max-width: 100%;
  justify-content: center;
}

.sd[data-s-b4860e9d-e0c0-43ac-930c-0c90d59508cc] {
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
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-b4860e9d-e0c0-43ac-930c-0c90d59508cc] {
    height: 70px;
    margin: 20px 0px 0px 0px;
    width: 100%;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-b4860e9d-e0c0-43ac-930c-0c90d59508cc] {
    height: 71px;
    padding: 0px 20px 0px 20px;
    width: 100%;
    max-width: 100%;
  }
}

.sd[data-s-e2a77f08-fef0-4a4b-a566-04b3842e8db5] {
  color: rgb(158, 63, 35);
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
  .sd[data-s-e2a77f08-fef0-4a4b-a566-04b3842e8db5] {
    font-size: 28px;
    padding: 0px 0px 0px 0px;
    width: 100%;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-e2a77f08-fef0-4a4b-a566-04b3842e8db5] {
    font-size: 24px;
    width: 100%;
  }
}

.sd[data-s-5cccba0e-2309-45cb-9352-cfef15925bbf] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-radius: 24px;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: auto;
  justify-content: flex-start;
  margin: 30px 0px 0px 0px;
  width: auto;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-5cccba0e-2309-45cb-9352-cfef15925bbf] {
    margin: 20px 50px 0px 50px;
    max-width: calc(100% - 100px);
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-5cccba0e-2309-45cb-9352-cfef15925bbf] {
    flex: none;
    height: auto;
    margin: 20px 20px 0px 20px;
    max-width: calc(100% - 40px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-5cccba0e-2309-45cb-9352-cfef15925bbf] {
    flex: none;
    height: auto;
    margin: 20px 20px 0px 20px;
  }
}

.sd[data-s-6a89c66a-c483-4e19-b4bb-f54a6f1c90e9] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 700;
  height: auto;
  line-height: 1.4;
  margin: 23px 29px 20px 30px;
  padding: 0px 0px 0px 0px;
  text-align: left;
  width: 1148px;
  max-width: calc(100% - 59px);
  justify-content: flex-start;
}

@media screen and (max-width: 890px) {
  .sd[data-s-6a89c66a-c483-4e19-b4bb-f54a6f1c90e9] {
    font-size: 20px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-6a89c66a-c483-4e19-b4bb-f54a6f1c90e9] {
    font-size: 16px;
    margin: 20px 30px 20px 30px;
    max-width: calc(100% - 60px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-6a89c66a-c483-4e19-b4bb-f54a6f1c90e9] {
    margin: 23px 20px 0px 20px;
    max-width: calc(100% - 40px);
  }
}

.sd[data-s-3942e7b5-e35b-4089-991e-d1e7c30aae43] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 0px 29px 20px 30px;
  padding: 0px 0px 0px 0px;
  text-align: left;
  width: 1148px;
  max-width: calc(100% - 59px);
  justify-content: flex-start;
}

@media screen and (max-width: 890px) {
  .sd[data-s-3942e7b5-e35b-4089-991e-d1e7c30aae43] {
    font-size: 20px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-3942e7b5-e35b-4089-991e-d1e7c30aae43] {
    font-size: 16px;
    margin: 0px 30px 20px 30px;
    max-width: calc(100% - 60px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-3942e7b5-e35b-4089-991e-d1e7c30aae43] {
    margin: 20px 20px 20px 20px;
    max-width: calc(100% - 40px);
  }
}

.sd[data-s-4504fa05-ceda-4f32-8c80-efcb0ad9c6d3] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 0px 29px 20px 30px;
  padding: 0px 0px 0px 0px;
  text-align: left;
  width: 1079px;
  max-width: calc(100% - 59px);
  justify-content: flex-start;
}

@media screen and (max-width: 890px) {
  .sd[data-s-4504fa05-ceda-4f32-8c80-efcb0ad9c6d3] {
    font-size: 20px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-4504fa05-ceda-4f32-8c80-efcb0ad9c6d3] {
    font-size: 16px;
    margin: 0px 30px 30px 30px;
    max-width: calc(100% - 60px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-4504fa05-ceda-4f32-8c80-efcb0ad9c6d3] {
    margin: 0px 20px 20px 20px;
    max-width: calc(100% - 40px);
  }
}

.sd[data-s-ea870404-6f57-4773-a26f-ebbb3c7a8a29] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-radius: 24px;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: auto;
  justify-content: flex-start;
  margin: 30px 0px 0px 0px;
  width: auto;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-ea870404-6f57-4773-a26f-ebbb3c7a8a29] {
    margin: 20px 50px 0px 50px;
    max-width: calc(100% - 100px);
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-ea870404-6f57-4773-a26f-ebbb3c7a8a29] {
    flex: none;
    height: auto;
    margin: 20px 20px 0px 20px;
    max-width: calc(100% - 40px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-ea870404-6f57-4773-a26f-ebbb3c7a8a29] {
    flex: none;
    height: auto;
    margin: 20px 20px 0px 20px;
  }
}

.sd[data-s-905f5059-4602-4d48-99b6-21c6b96c423d] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 700;
  height: auto;
  line-height: 1.4;
  margin: 23px 29px 20px 30px;
  padding: 0px 0px 0px 0px;
  text-align: left;
  width: 1148px;
  max-width: calc(100% - 59px);
  justify-content: flex-start;
}

@media screen and (max-width: 890px) {
  .sd[data-s-905f5059-4602-4d48-99b6-21c6b96c423d] {
    font-size: 20px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-905f5059-4602-4d48-99b6-21c6b96c423d] {
    font-size: 16px;
    margin: 20px 30px 20px 30px;
    max-width: calc(100% - 60px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-905f5059-4602-4d48-99b6-21c6b96c423d] {
    margin: 23px 20px 20px 20px;
    max-width: calc(100% - 40px);
  }
}

.sd[data-s-3bb4e789-67ba-4e56-b6cf-33d181a9e425] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 0px 29px 20px 30px;
  padding: 0px 0px 0px 0px;
  text-align: left;
  width: 1148px;
  max-width: calc(100% - 59px);
  justify-content: flex-start;
}

@media screen and (max-width: 890px) {
  .sd[data-s-3bb4e789-67ba-4e56-b6cf-33d181a9e425] {
    font-size: 20px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-3bb4e789-67ba-4e56-b6cf-33d181a9e425] {
    font-size: 16px;
    margin: 0px 30px 30px 30px;
    max-width: calc(100% - 60px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-3bb4e789-67ba-4e56-b6cf-33d181a9e425] {
    margin: 0px 20px 20px 20px;
    max-width: calc(100% - 40px);
  }
}

.sd[data-s-f953f961-f068-4781-be76-4f7c467fc0bf] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-radius: 24px;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: auto;
  justify-content: flex-start;
  margin: 30px 0px 0px 0px;
  width: auto;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-f953f961-f068-4781-be76-4f7c467fc0bf] {
    margin: 20px 50px 0px 50px;
    max-width: calc(100% - 100px);
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-f953f961-f068-4781-be76-4f7c467fc0bf] {
    flex: none;
    height: auto;
    margin: 20px 20px 0px 20px;
    max-width: calc(100% - 40px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-f953f961-f068-4781-be76-4f7c467fc0bf] {
    flex: none;
    height: auto;
    margin: 20px 20px 0px 20px;
  }
}

.sd[data-s-28d412da-6144-40ea-98c0-28481e3151a4] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 700;
  height: auto;
  line-height: 1.4;
  margin: 23px 29px 20px 30px;
  padding: 0px 0px 0px 0px;
  text-align: left;
  width: 1148px;
  max-width: calc(100% - 59px);
  justify-content: flex-start;
}

@media screen and (max-width: 890px) {
  .sd[data-s-28d412da-6144-40ea-98c0-28481e3151a4] {
    font-size: 20px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-28d412da-6144-40ea-98c0-28481e3151a4] {
    font-size: 16px;
    margin: 20px 30px 20px 30px;
    max-width: calc(100% - 60px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-28d412da-6144-40ea-98c0-28481e3151a4] {
    margin: 23px 20px 20px 20px;
    max-width: calc(100% - 40px);
  }
}

.sd[data-s-df207f71-714d-47c8-b92b-47fb273f08bb] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 0px 29px 20px 30px;
  padding: 0px 0px 0px 0px;
  text-align: left;
  width: 1148px;
  max-width: calc(100% - 59px);
  justify-content: flex-start;
}

@media screen and (max-width: 890px) {
  .sd[data-s-df207f71-714d-47c8-b92b-47fb273f08bb] {
    font-size: 20px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-df207f71-714d-47c8-b92b-47fb273f08bb] {
    font-size: 16px;
    margin: 0px 30px 30px 30px;
    max-width: calc(100% - 60px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-df207f71-714d-47c8-b92b-47fb273f08bb] {
    margin: 0px 20px 20px 20px;
    max-width: calc(100% - 40px);
  }
}

.sd[data-s-e04552c9-dfb9-4480-b221-abc772ff2255] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-radius: 24px;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: auto;
  justify-content: flex-start;
  margin: 30px 0px 0px 0px;
  width: auto;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-e04552c9-dfb9-4480-b221-abc772ff2255] {
    margin: 20px 50px 0px 50px;
    max-width: calc(100% - 100px);
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-e04552c9-dfb9-4480-b221-abc772ff2255] {
    flex: none;
    height: auto;
    margin: 20px 20px 0px 20px;
    max-width: calc(100% - 40px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-e04552c9-dfb9-4480-b221-abc772ff2255] {
    flex: none;
    height: auto;
    margin: 20px 20px 0px 20px;
  }
}

.sd[data-s-387480f8-483f-455c-a5ba-fd218f30a18d] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 700;
  height: auto;
  line-height: 1.4;
  margin: 23px 29px 20px 30px;
  padding: 0px 0px 0px 0px;
  text-align: left;
  width: 1148px;
  max-width: calc(100% - 59px);
  justify-content: flex-start;
}

@media screen and (max-width: 890px) {
  .sd[data-s-387480f8-483f-455c-a5ba-fd218f30a18d] {
    font-size: 20px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-387480f8-483f-455c-a5ba-fd218f30a18d] {
    font-size: 16px;
    margin: 20px 30px 20px 30px;
    max-width: calc(100% - 60px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-387480f8-483f-455c-a5ba-fd218f30a18d] {
    margin: 23px 20px 20px 20px;
    max-width: calc(100% - 40px);
  }
}

.sd[data-s-14a70130-cf81-4cf9-bd56-9ada47a6c736] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 0px 29px 0px 30px;
  padding: 0px 0px 0px 0px;
  text-align: left;
  width: 1148px;
  max-width: calc(100% - 59px);
  justify-content: flex-start;
}

@media screen and (max-width: 890px) {
  .sd[data-s-14a70130-cf81-4cf9-bd56-9ada47a6c736] {
    font-size: 20px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-14a70130-cf81-4cf9-bd56-9ada47a6c736] {
    font-size: 16px;
    margin: 0px 30px 20px 30px;
    max-width: calc(100% - 60px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-14a70130-cf81-4cf9-bd56-9ada47a6c736] {
    margin: 0px 20px 20px 20px;
    max-width: calc(100% - 40px);
  }
}

.sd[data-s-a4c4b52f-f542-4801-a306-834872dc6bff] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  margin: 0px 29px 20px 30px;
  padding: 0px 0px 0px 0px;
  text-align: left;
  text-decoration: underline;
  width: 1148px;
  max-width: calc(100% - 59px);
  justify-content: flex-start;
}

.sd[data-s-a4c4b52f-f542-4801-a306-834872dc6bff]:hover {
  color: rgba(158, 63, 35, 0.5);
}

@media screen and (max-width: 890px) {
  .sd[data-s-a4c4b52f-f542-4801-a306-834872dc6bff] {
    font-size: 20px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-a4c4b52f-f542-4801-a306-834872dc6bff] {
    font-size: 16px;
    margin: 0px 30px 30px 30px;
    max-width: calc(100% - 60px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-a4c4b52f-f542-4801-a306-834872dc6bff] {
    margin: 0px 20px 20px 20px;
    max-width: calc(100% - 40px);
  }
}

.sd[data-s-ca939805-a8e2-4882-b4de-5837e5f5c199] {
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
  --g-color-0: rgb(255, 253, 242);
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
  .sd[data-s-ca939805-a8e2-4882-b4de-5837e5f5c199] {
    height: 70px;
    margin: 20px 0px 0px 0px;
    width: 100%;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-ca939805-a8e2-4882-b4de-5837e5f5c199] {
    height: 71px;
    padding: 0px 20px 0px 20px;
    width: 100%;
    max-width: 100%;
  }
}

.sd[data-s-6388bca3-4e33-48c9-b83e-1beecb03ace6] {
  color: rgb(158, 63, 35);
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
  .sd[data-s-6388bca3-4e33-48c9-b83e-1beecb03ace6] {
    font-size: 28px;
    padding: 0px 0px 0px 0px;
    width: 100%;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-6388bca3-4e33-48c9-b83e-1beecb03ace6] {
    font-size: 24px;
    width: 100%;
  }
}

.sd[data-s-49c49c18-bd5f-4156-be76-8fde56a9ff78] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-radius: 24px;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: auto;
  justify-content: flex-start;
  margin: 20px 0px 0px 0px;
  width: 856px;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-49c49c18-bd5f-4156-be76-8fde56a9ff78] {
    margin: 20px 50px 0px 50px;
    max-width: calc(100% - 100px);
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-49c49c18-bd5f-4156-be76-8fde56a9ff78] {
    flex: none;
    height: auto;
    margin: 20px 20px 0px 20px;
    max-width: calc(100% - 40px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-49c49c18-bd5f-4156-be76-8fde56a9ff78] {
    flex: none;
    height: auto;
    margin: 20px 20px 0px 20px;
  }
}

.sd[data-s-d4740428-cf6a-48e1-af8c-2aaba512a814] {
  color: rgb(158, 63, 35);
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
  .sd[data-s-d4740428-cf6a-48e1-af8c-2aaba512a814] {
    font-size: 24px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-d4740428-cf6a-48e1-af8c-2aaba512a814] {
    font-size: 20px;
    margin: 20px 0px 0px 0px;
    width: 100%;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-d4740428-cf6a-48e1-af8c-2aaba512a814] {
    padding: 0px 20px 0px 20px;
  }
}

.sd[data-s-5e29a359-5bbc-42a8-a19b-a25af0ba52a4] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
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
  .sd[data-s-5e29a359-5bbc-42a8-a19b-a25af0ba52a4] {
    font-size: 20px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-5e29a359-5bbc-42a8-a19b-a25af0ba52a4] {
    font-size: 16px;
    margin: 20px 30px 30px 30px;
    width: calc(100% - 60px);
    max-width: calc(100% - 60px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-5e29a359-5bbc-42a8-a19b-a25af0ba52a4] {
    margin: 23px 20px 20px 20px;
    width: calc(100% - 40px);
    max-width: calc(100% - 40px);
  }
}

.sd[data-s-8fe2da14-e673-49e1-b114-bc8b36ae296d] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-radius: 24px;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: auto;
  justify-content: flex-start;
  margin: 20px 0px 0px 0px;
  width: 856px;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-8fe2da14-e673-49e1-b114-bc8b36ae296d] {
    margin: 20px 50px 0px 50px;
    max-width: calc(100% - 100px);
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-8fe2da14-e673-49e1-b114-bc8b36ae296d] {
    flex: none;
    height: auto;
    margin: 20px 20px 0px 20px;
    max-width: calc(100% - 40px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-8fe2da14-e673-49e1-b114-bc8b36ae296d] {
    flex: none;
    height: auto;
    margin: 20px 20px 0px 20px;
  }
}

.sd[data-s-bd6172db-148e-4544-8fb1-aafe6c315385] {
  color: rgb(158, 63, 35);
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
  .sd[data-s-bd6172db-148e-4544-8fb1-aafe6c315385] {
    font-size: 24px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-bd6172db-148e-4544-8fb1-aafe6c315385] {
    font-size: 20px;
  }
}

.sd[data-s-a7beb1c1-c72a-494f-93d1-2be2b800b130] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
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
  .sd[data-s-a7beb1c1-c72a-494f-93d1-2be2b800b130] {
    font-size: 20px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-a7beb1c1-c72a-494f-93d1-2be2b800b130] {
    font-size: 16px;
    margin: 23px 30px 20px 30px;
    width: calc(100% - 60px);
    max-width: calc(100% - 60px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-a7beb1c1-c72a-494f-93d1-2be2b800b130] {
    margin: 23px 20px 20px 20px;
    width: calc(100% - 40px);
    max-width: calc(100% - 40px);
  }
}

.sd[data-s-437882c7-98ef-4340-aad6-55df55d6c2e3] {
  align-content: center;
  align-items: center;
  background: rgb(241, 79, 0);
  border-radius: 12px;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 80px;
  justify-content: center;
  margin: 0px 0px 30px 0px;
  padding: 0px 0px 0px 0px;
  width: 755px;
  max-width: 100%;
}

.sd[data-s-437882c7-98ef-4340-aad6-55df55d6c2e3]:hover {
  background: rgba(241, 79, 0, 0.5);
  flex: none;
}

@media screen and (max-width: 890px) {
  .sd[data-s-437882c7-98ef-4340-aad6-55df55d6c2e3] {
    margin: 0px 50px 50px 50px;
    max-width: calc(100% - 100px);
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-437882c7-98ef-4340-aad6-55df55d6c2e3] {
    margin: 0px 30px 30px 30px;
    max-width: calc(100% - 60px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-437882c7-98ef-4340-aad6-55df55d6c2e3] {
    margin: 0px 20px 30px 20px;
    max-width: calc(100% - 40px);
  }
}

.sd[data-s-703d4802-c798-47b1-a314-3a52eb666728] {
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

.sd[data-s-9298e5cb-5558-48c1-93e7-52fa93f9c86f] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-radius: 24px;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: auto;
  justify-content: flex-start;
  margin: 20px 0px 0px 0px;
  width: 856px;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-9298e5cb-5558-48c1-93e7-52fa93f9c86f] {
    margin: 20px 50px 0px 50px;
    max-width: calc(100% - 100px);
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-9298e5cb-5558-48c1-93e7-52fa93f9c86f] {
    flex: none;
    height: auto;
    margin: 20px 20px 0px 20px;
    max-width: calc(100% - 40px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-9298e5cb-5558-48c1-93e7-52fa93f9c86f] {
    flex: none;
    height: auto;
    margin: 20px 20px 0px 20px;
  }
}

.sd[data-s-850131a9-6cfe-4728-ae79-fbdd94ba8cbb] {
  color: rgb(158, 63, 35);
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
  .sd[data-s-850131a9-6cfe-4728-ae79-fbdd94ba8cbb] {
    font-size: 24px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-850131a9-6cfe-4728-ae79-fbdd94ba8cbb] {
    font-size: 20px;
    margin: 20px 0px 0px 0px;
    width: 100%;
    max-width: 100%;
  }
}

.sd[data-s-4d25c553-ef3a-419b-be73-d168459d2f48] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
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
  .sd[data-s-4d25c553-ef3a-419b-be73-d168459d2f48] {
    font-size: 20px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-4d25c553-ef3a-419b-be73-d168459d2f48] {
    font-size: 16px;
    margin: 23px 30px 30px 30px;
    width: calc(100% - 60px);
    max-width: calc(100% - 60px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-4d25c553-ef3a-419b-be73-d168459d2f48] {
    margin: 23px 20px 20px 20px;
    width: calc(100% - 40px);
    max-width: calc(100% - 40px);
  }
}

.sd[data-s-16e25ab1-0635-467f-8cb8-2237cf32a9bb] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-radius: 24px;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: auto;
  justify-content: flex-start;
  margin: 20px 0px 0px 0px;
  width: 856px;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-16e25ab1-0635-467f-8cb8-2237cf32a9bb] {
    flex: none;
    height: 236px;
    margin: 20px 50px 0px 50px;
    max-width: calc(100% - 100px);
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-16e25ab1-0635-467f-8cb8-2237cf32a9bb] {
    flex: none;
    height: auto;
    margin: 20px 20px 0px 20px;
    max-width: calc(100% - 40px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-16e25ab1-0635-467f-8cb8-2237cf32a9bb] {
    flex: none;
    height: auto;
    margin: 20px 20px 0px 20px;
  }
}

.sd[data-s-dc917a4d-661f-4d79-b129-e6e7f45d0c0a] {
  color: rgb(158, 63, 35);
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
  .sd[data-s-dc917a4d-661f-4d79-b129-e6e7f45d0c0a] {
    font-size: 24px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-dc917a4d-661f-4d79-b129-e6e7f45d0c0a] {
    font-size: 20px;
    padding: 0px 30px 0px 30px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-dc917a4d-661f-4d79-b129-e6e7f45d0c0a] {
    padding: 0px 20px 0px 20px;
  }
}

.sd[data-s-bf9fc9ab-9f4c-43d4-a0fa-f243a0d3cc54] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
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
  .sd[data-s-bf9fc9ab-9f4c-43d4-a0fa-f243a0d3cc54] {
    font-size: 20px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-bf9fc9ab-9f4c-43d4-a0fa-f243a0d3cc54] {
    font-size: 16px;
    margin: 23px 30px 30px 30px;
    width: calc(100% - 60px);
    max-width: calc(100% - 60px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-bf9fc9ab-9f4c-43d4-a0fa-f243a0d3cc54] {
    margin: 23px 20px 20px 20px;
    width: calc(100% - 40px);
    max-width: calc(100% - 40px);
  }
}

.sd[data-s-59fd79ff-9163-4e5a-8bb1-152c878aaa6f] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 890px) {
  .sd[data-s-59fd79ff-9163-4e5a-8bb1-152c878aaa6f] {
    height: 307px;
    max-width: 100%;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-59fd79ff-9163-4e5a-8bb1-152c878aaa6f] {
    margin: 20px;
    max-width: calc(100% - 40px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-59fd79ff-9163-4e5a-8bb1-152c878aaa6f] {
    flex: none;
    height: auto;
    max-width: calc(100% - 40px);
  }
}

.sd[data-s-2cdfec5c-c26b-4609-bf68-dae8ca13593b] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-radius: 24px 0px 0px 24px;
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 100px;
  justify-content: center;
  margin: 100px 0px 0px 0px;
  width: 200px;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-2cdfec5c-c26b-4609-bf68-dae8ca13593b] {
    flex: none;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-2cdfec5c-c26b-4609-bf68-dae8ca13593b] {
    flex: none;
    height: 264px;
    margin: 20px 0px 0px;
    padding: 10px;
    width: 50%;
    max-width: 50%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-2cdfec5c-c26b-4609-bf68-dae8ca13593b] {
    flex: none;
    height: 287px;
    margin: 0px 0px 0px 0px;
    width: 50%;
    max-width: 50%;
  }
}

.sd[data-s-969ac67e-0cd6-4251-89d6-2719a1e12e6d] {
  height: auto;
  width: 50%;
  max-width: 50%;
}

.sd[data-s-e4db0e9a-ad8f-4279-bfdd-5c2a1f4e6c86] {
  align-content: center;
  align-items: center;
  background: #FFFFFF;
  border-radius: 0px 24px 24px 0px;
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 100px;
  justify-content: flex-start;
  margin: 100px 0px 0px 0px;
  width: 854px;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-e4db0e9a-ad8f-4279-bfdd-5c2a1f4e6c86] {
    flex: none;
    width: 467px;
    max-width: 100%;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-e4db0e9a-ad8f-4279-bfdd-5c2a1f4e6c86] {
    flex: none;
    height: 263.98px;
    margin: 20px 0px 0px 0px;
    padding: 20px;
    width: 50%;
    max-width: 50%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-e4db0e9a-ad8f-4279-bfdd-5c2a1f4e6c86] {
    flex: none;
    height: 286.38px;
    margin: 0px 0px 0px 0px;
    padding: 15px;
    width: 50%;
    max-width: 50%;
  }
}

.sd[data-s-98b7bf77-374e-40ac-8dc7-b79176347eee] {
  color: rgb(158, 63, 35);
  flex: none;
  font-family: var(--s-font-d7b1509a);
  font-size: 14px;
  font-weight: 400;
  height: auto;
  line-height: 1.4;
  text-align: left;
  width: 801px;
  max-width: 100%;
  justify-content: flex-start;
}

@media screen and (max-width: 630px) {
  .sd[data-s-98b7bf77-374e-40ac-8dc7-b79176347eee] {
    font-size: 16px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-98b7bf77-374e-40ac-8dc7-b79176347eee] {
    font-size: 16px;
  }
}

.sd[data-s-48fc91cf-a055-42c6-8936-a2b075d0fac9] {
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
  .sd[data-s-48fc91cf-a055-42c6-8936-a2b075d0fac9] {
    margin: 0px 0px 0px 0px;
    width: 100%;
    max-width: 100%;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-48fc91cf-a055-42c6-8936-a2b075d0fac9] {
    justify-content: flex-start;
    padding: 0px 0px 0px 26px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-48fc91cf-a055-42c6-8936-a2b075d0fac9] {
    padding: 0px 0px 0px 20px;
  }
}

.sd[data-s-803ef9e3-b22d-4591-bc3a-e025b06f3db2] {
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

.sd[data-s-1dceeea4-b0d8-4aa1-a74d-d05fde516178] {
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

.sd[data-s-3966ecde-11dd-4dda-966a-fc96454d2a35] {
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

.sd[data-s-3966ecde-11dd-4dda-966a-fc96454d2a35]:hover {
  text-decoration: underline;
}

.sd[data-s-d1ce116a-f543-4518-9db8-d4dbfed72451] {
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

.sd[data-s-bf406e62-c7d6-4a55-961e-e2a45007cb1d] {
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
  .sd[data-s-bf406e62-c7d6-4a55-961e-e2a45007cb1d] {
    flex: none;
    width: 685px;
    max-width: 100%;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-bf406e62-c7d6-4a55-961e-e2a45007cb1d] {
    width: 308px;
    max-width: 100%;
  }
}

.sd[data-s-20caee6d-1730-4276-a2f7-6c2967ce38dd] {
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

.sd[data-s-10e248c6-db56-4188-ba41-4cddb04c0cf7] {
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
  .sd[data-s-10e248c6-db56-4188-ba41-4cddb04c0cf7] {
    height: 799px;
    margin: 0px 0px 0px 0px;
    width: 100%;
    max-width: 100%;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-10e248c6-db56-4188-ba41-4cddb04c0cf7] {
    flex: none;
    height: auto;
    margin: 0px 0px 0px 0px;
    padding: 20px 0px 56px 0px;
    width: 100%;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-10e248c6-db56-4188-ba41-4cddb04c0cf7] {
    justify-content: flex-start;
    padding: 20px 0px 56px 0px;
  }
}

.sd[data-s-52869014-2615-4cd1-adb7-05f90b105628] {
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
  .sd[data-s-52869014-2615-4cd1-adb7-05f90b105628] {
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
  .sd[data-s-52869014-2615-4cd1-adb7-05f90b105628] {
    flex: none;
    flex-direction: column;
    flex-wrap: nowrap;
    height: auto;
    width: 90%;
    max-width: 90%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-52869014-2615-4cd1-adb7-05f90b105628] {
    flex: none;
    width: 100%;
    max-width: 100%;
  }
}

.sd[data-s-99a9ec3f-0ed8-46d4-917f-8881a2432211] {
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
  .sd[data-s-99a9ec3f-0ed8-46d4-917f-8881a2432211] {
    flex: none;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-99a9ec3f-0ed8-46d4-917f-8881a2432211] {
    flex: none;
    flex-direction: column;
    flex-wrap: nowrap;
    height: auto;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-99a9ec3f-0ed8-46d4-917f-8881a2432211] {
    flex: none;
    padding: 0px 0px 0px 0px;
    width: 80%;
    max-width: 80%;
  }
}

.sd[data-s-f6dd1d7e-91cd-4867-82f9-606723f8d9d0] {
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
  .sd[data-s-f6dd1d7e-91cd-4867-82f9-606723f8d9d0] {
    flex: none;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 112px;
    max-width: 100%;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-f6dd1d7e-91cd-4867-82f9-606723f8d9d0] {
    flex: none;
    height: auto;
    margin: 0px 0px 0px 0px;
    width: auto;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-f6dd1d7e-91cd-4867-82f9-606723f8d9d0] {
    flex: none;
    margin: 0px 0px 0px 0px;
    width: auto;
  }
}

.sd[data-s-c769cda7-b3c0-4104-9668-435229b2d86a] {
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
  .sd[data-s-c769cda7-b3c0-4104-9668-435229b2d86a] {
    flex: none;
    height: 21px;
    width: 136px;
    max-width: 100%;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-c769cda7-b3c0-4104-9668-435229b2d86a] {
    height: 39px;
    width: 175px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-c769cda7-b3c0-4104-9668-435229b2d86a] {
    height: 42px;
    width: 176px;
    max-width: 100%;
  }
}

.sd[data-s-17fb5039-1193-42a9-8863-b9dee8dc6b30] {
  flex: none;
  height: auto;
  width: 26px;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-17fb5039-1193-42a9-8863-b9dee8dc6b30] {
    flex: none;
    height: auto;
    width: 20px;
    max-width: 100%;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-17fb5039-1193-42a9-8863-b9dee8dc6b30] {
    flex: none;
    height: auto;
    width: 29px;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-17fb5039-1193-42a9-8863-b9dee8dc6b30] {
    flex: none;
    height: auto;
    width: 34px;
    max-width: 100%;
  }
}

.sd[data-s-d3b4ec50-a488-4982-9895-142dcfef93dd] {
  flex: none;
  height: auto;
  margin: 0px 0px 0px 10px;
  width: 127px;
  max-width: calc(100% - 10px);
}

@media screen and (max-width: 890px) {
  .sd[data-s-d3b4ec50-a488-4982-9895-142dcfef93dd] {
    flex: none;
    margin: 0px 0px 0px 5px;
    width: calc(76% - 5px);
    max-width: calc(76% - 5px);
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-d3b4ec50-a488-4982-9895-142dcfef93dd] {
    flex: none;
    height: auto;
    margin: 0px 0px 0px 5px;
    width: 135px;
    max-width: calc(100% - 5px);
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-d3b4ec50-a488-4982-9895-142dcfef93dd] {
    flex: none;
    height: auto;
    margin: 0px 0px 0px 10px;
    width: 134px;
    max-width: calc(100% - 10px);
  }
}

.sd[data-s-e188981d-8d9d-4db9-b33a-662ad17b24a5] {
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

.sd[data-s-5272118b-0c0e-43fb-8c89-ed02cfcdbc5e] {
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
  .sd[data-s-5272118b-0c0e-43fb-8c89-ed02cfcdbc5e] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-5272118b-0c0e-43fb-8c89-ed02cfcdbc5e] {
    font-size: 14px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-5272118b-0c0e-43fb-8c89-ed02cfcdbc5e] {
    font-size: 14px;
  }
}

.sd[data-s-73e3c8be-50f3-4aa9-992d-0da9691f6fa6] {
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

.sd[data-s-7f938efc-4cfe-4685-8f90-fce7af34a4fa] {
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
  .sd[data-s-7f938efc-4cfe-4685-8f90-fce7af34a4fa] {
    flex: none;
    text-align: left;
    width: 163px;
    max-width: 100%;
    justify-content: flex-start;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-7f938efc-4cfe-4685-8f90-fce7af34a4fa] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-7f938efc-4cfe-4685-8f90-fce7af34a4fa] {
    font-size: 12px;
  }
}

.sd[data-s-e81998cc-a74a-4fb2-be25-8a92bfb14fe1] {
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
  .sd[data-s-e81998cc-a74a-4fb2-be25-8a92bfb14fe1] {
    flex: none;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 116px;
    max-width: 100%;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-e81998cc-a74a-4fb2-be25-8a92bfb14fe1] {
    flex: none;
    margin: 20px 0px 0px 0px;
    width: auto;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-e81998cc-a74a-4fb2-be25-8a92bfb14fe1] {
    flex: none;
    margin: 15px 0px 0px 0px;
    width: auto;
    max-width: 100%;
  }
}

.sd[data-s-ac1f3563-39f9-48a4-bbc0-dc18223b67c8] {
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
  .sd[data-s-ac1f3563-39f9-48a4-bbc0-dc18223b67c8] {
    font-size: 12px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-ac1f3563-39f9-48a4-bbc0-dc18223b67c8] {
    font-size: 14px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-ac1f3563-39f9-48a4-bbc0-dc18223b67c8] {
    font-size: 14px;
  }
}

.sd[data-s-0350aa2d-e32e-42ad-a323-bfd4b8df94e4] {
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

.sd[data-s-0350aa2d-e32e-42ad-a323-bfd4b8df94e4]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-0350aa2d-e32e-42ad-a323-bfd4b8df94e4] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-0350aa2d-e32e-42ad-a323-bfd4b8df94e4] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-0350aa2d-e32e-42ad-a323-bfd4b8df94e4] {
    font-size: 14px;
  }
}

.sd[data-s-38cead7b-b4c5-4521-b129-ec6ee821129d] {
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

.sd[data-s-38cead7b-b4c5-4521-b129-ec6ee821129d]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-38cead7b-b4c5-4521-b129-ec6ee821129d] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-38cead7b-b4c5-4521-b129-ec6ee821129d] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-38cead7b-b4c5-4521-b129-ec6ee821129d] {
    font-size: 14px;
  }
}

.sd[data-s-4a28c8c0-549e-45b0-915b-37932e03694b] {
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

.sd[data-s-4a28c8c0-549e-45b0-915b-37932e03694b]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-4a28c8c0-549e-45b0-915b-37932e03694b] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-4a28c8c0-549e-45b0-915b-37932e03694b] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-4a28c8c0-549e-45b0-915b-37932e03694b] {
    font-size: 14px;
  }
}

.sd[data-s-cca3c2ea-cda8-4c37-a963-f4e1938f11c0] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-23ddbf2f-2ce2-408b-96c9-f97334a8d7a2] {
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

.sd[data-s-23ddbf2f-2ce2-408b-96c9-f97334a8d7a2]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-23ddbf2f-2ce2-408b-96c9-f97334a8d7a2] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-23ddbf2f-2ce2-408b-96c9-f97334a8d7a2] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-23ddbf2f-2ce2-408b-96c9-f97334a8d7a2] {
    font-size: 14px;
  }
}

.sd[data-s-5f7a1ca0-ab8d-4475-b8c7-f375a0d31272] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 5px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

@media screen and (max-width: 320px) {
  .sd[data-s-5f7a1ca0-ab8d-4475-b8c7-f375a0d31272] {
    margin: 5px 0px 0px 0px;
  }
}

.sd[data-s-43713f84-fcb2-405f-88ec-0606e090c852] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-f1ab8297-4224-4f02-abe4-a1cae03542a5] {
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

.sd[data-s-f1ab8297-4224-4f02-abe4-a1cae03542a5]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-f1ab8297-4224-4f02-abe4-a1cae03542a5] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-f1ab8297-4224-4f02-abe4-a1cae03542a5] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-f1ab8297-4224-4f02-abe4-a1cae03542a5] {
    font-size: 14px;
  }
}

.sd[data-s-5429f32d-df31-4f3e-a6c1-ea918bfe8989] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 5px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

.sd[data-s-0f55896e-8aac-423e-abae-545b8a325b48] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-0dc8983c-dc44-4b47-8d50-e07cdba4eebb] {
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

.sd[data-s-0dc8983c-dc44-4b47-8d50-e07cdba4eebb]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-0dc8983c-dc44-4b47-8d50-e07cdba4eebb] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-0dc8983c-dc44-4b47-8d50-e07cdba4eebb] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-0dc8983c-dc44-4b47-8d50-e07cdba4eebb] {
    font-size: 14px;
  }
}

.sd[data-s-006d536c-a35b-487a-9fc6-21d92261f1a0] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 5px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

.sd[data-s-04b64854-82a3-4bdc-a5e3-31e07f832a11] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-f124e470-4fbd-421a-91d2-8f5cc2942c3a] {
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

.sd[data-s-f124e470-4fbd-421a-91d2-8f5cc2942c3a]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-f124e470-4fbd-421a-91d2-8f5cc2942c3a] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-f124e470-4fbd-421a-91d2-8f5cc2942c3a] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-f124e470-4fbd-421a-91d2-8f5cc2942c3a] {
    font-size: 14px;
  }
}

.sd[data-s-a6cb1cc7-fa43-4604-916c-fc3d7b4e53e1] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 5px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

.sd[data-s-2dc2934e-68d5-40ee-b85f-b1aca0fb364d] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-743c4a29-05aa-43be-9d00-ebd0fa769f07] {
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

.sd[data-s-743c4a29-05aa-43be-9d00-ebd0fa769f07]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-743c4a29-05aa-43be-9d00-ebd0fa769f07] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-743c4a29-05aa-43be-9d00-ebd0fa769f07] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-743c4a29-05aa-43be-9d00-ebd0fa769f07] {
    font-size: 14px;
  }
}

.sd[data-s-5e0f8dd3-b45a-45d5-b0a1-7bd26310120b] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 5px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

.sd[data-s-64d2d0ab-5b34-4320-961c-1c5ed892dc4f] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-4d0ffe20-6fc3-4f79-9750-86b0356dd106] {
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

.sd[data-s-4d0ffe20-6fc3-4f79-9750-86b0356dd106]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-4d0ffe20-6fc3-4f79-9750-86b0356dd106] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-4d0ffe20-6fc3-4f79-9750-86b0356dd106] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-4d0ffe20-6fc3-4f79-9750-86b0356dd106] {
    font-size: 14px;
  }
}

.sd[data-s-8ddb37db-0140-4734-9a17-dd06910cf257] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 5px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

.sd[data-s-aeebd19e-e251-40a6-9932-172ef18bca44] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-549a5a78-7756-4ace-aa69-73eb002cc81e] {
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

.sd[data-s-549a5a78-7756-4ace-aa69-73eb002cc81e]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-549a5a78-7756-4ace-aa69-73eb002cc81e] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-549a5a78-7756-4ace-aa69-73eb002cc81e] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-549a5a78-7756-4ace-aa69-73eb002cc81e] {
    font-size: 14px;
  }
}

.sd[data-s-40c9e5e7-c17c-412f-893c-81056b41c591] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 5px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

.sd[data-s-d80d4433-7915-43bd-bce7-414789d8afd0] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-09657622-b5a9-4214-86f5-726f4d6c2021] {
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

.sd[data-s-09657622-b5a9-4214-86f5-726f4d6c2021]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-09657622-b5a9-4214-86f5-726f4d6c2021] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-09657622-b5a9-4214-86f5-726f4d6c2021] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-09657622-b5a9-4214-86f5-726f4d6c2021] {
    font-size: 14px;
  }
}

.sd[data-s-4bbc4ab1-2fee-4684-af8f-cbc8a892227b] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 5px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

.sd[data-s-0616977a-3948-4510-8d8f-9524cb240d77] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-fe53bf8f-fcb2-41f9-8e0c-3a3ecf9d00ae] {
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

.sd[data-s-fe53bf8f-fcb2-41f9-8e0c-3a3ecf9d00ae]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-fe53bf8f-fcb2-41f9-8e0c-3a3ecf9d00ae] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-fe53bf8f-fcb2-41f9-8e0c-3a3ecf9d00ae] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-fe53bf8f-fcb2-41f9-8e0c-3a3ecf9d00ae] {
    font-size: 14px;
  }
}

.sd[data-s-a9ab2824-0e2b-46f4-81d8-52f5f3e1cbac] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 19px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

@media screen and (max-width: 320px) {
  .sd[data-s-a9ab2824-0e2b-46f4-81d8-52f5f3e1cbac] {
    margin: 25px 0px 0px 0px;
    max-width: 100%;
  }
}

.sd[data-s-89580696-d272-46f5-979e-f039667b0983] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-467ad139-4b92-4b71-a6d4-eb23160a44f3] {
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

.sd[data-s-467ad139-4b92-4b71-a6d4-eb23160a44f3]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-467ad139-4b92-4b71-a6d4-eb23160a44f3] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-467ad139-4b92-4b71-a6d4-eb23160a44f3] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-467ad139-4b92-4b71-a6d4-eb23160a44f3] {
    font-size: 14px;
  }
}

.sd[data-s-92d5e903-c62f-4526-ab14-82156328051d] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 5px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

.sd[data-s-23e8c522-b83c-483c-b850-a167ab475bd6] {
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

.sd[data-s-05642b58-30a7-44b1-9547-c94148db1d4f] {
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
  .sd[data-s-05642b58-30a7-44b1-9547-c94148db1d4f] {
    flex: none;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 112px;
    max-width: 100%;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-05642b58-30a7-44b1-9547-c94148db1d4f] {
    flex: none;
    width: auto;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-05642b58-30a7-44b1-9547-c94148db1d4f] {
    flex: none;
    width: auto;
  }
}

.sd[data-s-dde3d0b4-19bd-418b-b62e-2bf254b4f377] {
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
  .sd[data-s-dde3d0b4-19bd-418b-b62e-2bf254b4f377] {
    font-size: 12px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-dde3d0b4-19bd-418b-b62e-2bf254b4f377] {
    font-size: 14px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-dde3d0b4-19bd-418b-b62e-2bf254b4f377] {
    font-size: 14px;
  }
}

.sd[data-s-fc38d6ed-b390-4791-b36c-de1e3b2c0689] {
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

.sd[data-s-fc38d6ed-b390-4791-b36c-de1e3b2c0689]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-fc38d6ed-b390-4791-b36c-de1e3b2c0689] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-fc38d6ed-b390-4791-b36c-de1e3b2c0689] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-fc38d6ed-b390-4791-b36c-de1e3b2c0689] {
    font-size: 14px;
  }
}

.sd[data-s-c7666cb6-c868-41e4-bb39-ca13c4de4c51] {
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

.sd[data-s-c7666cb6-c868-41e4-bb39-ca13c4de4c51]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-c7666cb6-c868-41e4-bb39-ca13c4de4c51] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-c7666cb6-c868-41e4-bb39-ca13c4de4c51] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-c7666cb6-c868-41e4-bb39-ca13c4de4c51] {
    font-size: 14px;
  }
}

.sd[data-s-62f3cd3d-b669-4f62-8aac-2e24a358f458] {
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

.sd[data-s-62f3cd3d-b669-4f62-8aac-2e24a358f458]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-62f3cd3d-b669-4f62-8aac-2e24a358f458] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-62f3cd3d-b669-4f62-8aac-2e24a358f458] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-62f3cd3d-b669-4f62-8aac-2e24a358f458] {
    font-size: 14px;
  }
}

.sd[data-s-3154ab79-51b4-4a47-9dc1-719166aadfd6] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-6bb58e20-e6ca-4d56-8117-7f6a64236334] {
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

.sd[data-s-6bb58e20-e6ca-4d56-8117-7f6a64236334]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-6bb58e20-e6ca-4d56-8117-7f6a64236334] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-6bb58e20-e6ca-4d56-8117-7f6a64236334] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-6bb58e20-e6ca-4d56-8117-7f6a64236334] {
    font-size: 14px;
  }
}

.sd[data-s-0fda2a8e-c97c-47df-b08d-f249c948f3e5] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-f5131657-eee2-43a9-90a0-a8a7315c8bf4] {
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

.sd[data-s-f5131657-eee2-43a9-90a0-a8a7315c8bf4]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-f5131657-eee2-43a9-90a0-a8a7315c8bf4] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-f5131657-eee2-43a9-90a0-a8a7315c8bf4] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-f5131657-eee2-43a9-90a0-a8a7315c8bf4] {
    font-size: 14px;
  }
}

.sd[data-s-0d2145a9-7728-486e-b3b1-3a7905f2a4a1] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-e5fd441d-4b35-47e8-83f0-a2a1afed72fe] {
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

.sd[data-s-e5fd441d-4b35-47e8-83f0-a2a1afed72fe]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-e5fd441d-4b35-47e8-83f0-a2a1afed72fe] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-e5fd441d-4b35-47e8-83f0-a2a1afed72fe] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-e5fd441d-4b35-47e8-83f0-a2a1afed72fe] {
    font-size: 14px;
  }
}

.sd[data-s-f2507625-f4b0-468a-85fa-83c67e4e0f93] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 890px) {
  .sd[data-s-f2507625-f4b0-468a-85fa-83c67e4e0f93] {
    justify-content: flex-start;
  }
}

.sd[data-s-ca8194bf-7756-4def-b191-f251900d3151] {
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

.sd[data-s-ca8194bf-7756-4def-b191-f251900d3151]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-ca8194bf-7756-4def-b191-f251900d3151] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-ca8194bf-7756-4def-b191-f251900d3151] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-ca8194bf-7756-4def-b191-f251900d3151] {
    font-size: 14px;
  }
}

.sd[data-s-3d9a5084-4204-45ee-93a7-59d43dd2efbb] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

@media screen and (max-width: 890px) {
  .sd[data-s-3d9a5084-4204-45ee-93a7-59d43dd2efbb] {
    justify-content: flex-start;
  }
}

.sd[data-s-0657852f-3d23-494a-8701-db27fdb3e8ea] {
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

.sd[data-s-0657852f-3d23-494a-8701-db27fdb3e8ea]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-0657852f-3d23-494a-8701-db27fdb3e8ea] {
    font-size: 10px;
    text-align: left;
    justify-content: flex-start;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-0657852f-3d23-494a-8701-db27fdb3e8ea] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-0657852f-3d23-494a-8701-db27fdb3e8ea] {
    font-size: 14px;
  }
}

.sd[data-s-a888d16a-fc6f-4940-8a0a-cb89bc3c69b4] {
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

.sd[data-s-dad2e945-30f1-4c21-92d7-44140a8c25b5] {
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
  .sd[data-s-dad2e945-30f1-4c21-92d7-44140a8c25b5] {
    flex: none;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 112px;
    max-width: 100%;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-dad2e945-30f1-4c21-92d7-44140a8c25b5] {
    flex: none;
    width: auto;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-dad2e945-30f1-4c21-92d7-44140a8c25b5] {
    flex: none;
    width: auto;
  }
}

.sd[data-s-a8576498-b402-4f72-b682-03e5d2d0105d] {
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
  .sd[data-s-a8576498-b402-4f72-b682-03e5d2d0105d] {
    font-size: 12px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-a8576498-b402-4f72-b682-03e5d2d0105d] {
    font-size: 14px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-a8576498-b402-4f72-b682-03e5d2d0105d] {
    font-size: 14px;
  }
}

.sd[data-s-a3d23d4f-37e7-4eab-8ef6-ed6edf72b25e] {
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

.sd[data-s-a3d23d4f-37e7-4eab-8ef6-ed6edf72b25e]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-a3d23d4f-37e7-4eab-8ef6-ed6edf72b25e] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-a3d23d4f-37e7-4eab-8ef6-ed6edf72b25e] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-a3d23d4f-37e7-4eab-8ef6-ed6edf72b25e] {
    font-size: 14px;
  }
}

.sd[data-s-ec30520c-9911-47c6-bdba-b0ab2b90cea3] {
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

.sd[data-s-ec30520c-9911-47c6-bdba-b0ab2b90cea3]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-ec30520c-9911-47c6-bdba-b0ab2b90cea3] {
    font-size: 10px;
    text-align: left;
    justify-content: flex-start;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-ec30520c-9911-47c6-bdba-b0ab2b90cea3] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-ec30520c-9911-47c6-bdba-b0ab2b90cea3] {
    font-size: 14px;
  }
}

.sd[data-s-4b33a392-718a-4bfe-b18f-1d8962b8b534] {
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

.sd[data-s-4b33a392-718a-4bfe-b18f-1d8962b8b534]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-4b33a392-718a-4bfe-b18f-1d8962b8b534] {
    font-size: 10px;
    text-align: left;
    justify-content: flex-start;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-4b33a392-718a-4bfe-b18f-1d8962b8b534] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-4b33a392-718a-4bfe-b18f-1d8962b8b534] {
    font-size: 14px;
  }
}

.sd[data-s-e5cdf75c-d58b-4fc0-baef-54cd30afeaef] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-c4ffa475-a524-4758-8ce2-7f2b9e453b80] {
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

.sd[data-s-c4ffa475-a524-4758-8ce2-7f2b9e453b80]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-c4ffa475-a524-4758-8ce2-7f2b9e453b80] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-c4ffa475-a524-4758-8ce2-7f2b9e453b80] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-c4ffa475-a524-4758-8ce2-7f2b9e453b80] {
    font-size: 14px;
  }
}

.sd[data-s-cfb6bd31-fc5e-47aa-b99c-627461ec367f] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-89a231a3-75af-4127-9dbf-e5e66c532feb] {
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

.sd[data-s-89a231a3-75af-4127-9dbf-e5e66c532feb]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-89a231a3-75af-4127-9dbf-e5e66c532feb] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-89a231a3-75af-4127-9dbf-e5e66c532feb] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-89a231a3-75af-4127-9dbf-e5e66c532feb] {
    font-size: 14px;
  }
}

.sd[data-s-724cb112-db79-4778-b37a-327c3b32c26c] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-1f5ce06d-555e-44ff-81e2-e234749acad8] {
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

.sd[data-s-1f5ce06d-555e-44ff-81e2-e234749acad8]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-1f5ce06d-555e-44ff-81e2-e234749acad8] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-1f5ce06d-555e-44ff-81e2-e234749acad8] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-1f5ce06d-555e-44ff-81e2-e234749acad8] {
    font-size: 14px;
  }
}

.sd[data-s-670fc851-7bed-4cf3-a922-082b140013a4] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-a92b7b70-dd85-4b1a-8a72-37c498fd6e3d] {
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

.sd[data-s-a92b7b70-dd85-4b1a-8a72-37c498fd6e3d]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-a92b7b70-dd85-4b1a-8a72-37c498fd6e3d] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-a92b7b70-dd85-4b1a-8a72-37c498fd6e3d] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-a92b7b70-dd85-4b1a-8a72-37c498fd6e3d] {
    font-size: 14px;
  }
}

.sd[data-s-38e853f3-1a48-4a2d-8d2a-99f5bd03ae9d] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-d36e23c7-f6db-41c5-84b0-90b118326b4f] {
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

.sd[data-s-d36e23c7-f6db-41c5-84b0-90b118326b4f]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-d36e23c7-f6db-41c5-84b0-90b118326b4f] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-d36e23c7-f6db-41c5-84b0-90b118326b4f] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-d36e23c7-f6db-41c5-84b0-90b118326b4f] {
    font-size: 14px;
  }
}

.sd[data-s-fe0a474e-0845-426a-8146-3861744c112f] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-b900a6a3-858d-4cb0-b1e7-0bdf614af952] {
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

.sd[data-s-b900a6a3-858d-4cb0-b1e7-0bdf614af952]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-b900a6a3-858d-4cb0-b1e7-0bdf614af952] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-b900a6a3-858d-4cb0-b1e7-0bdf614af952] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-b900a6a3-858d-4cb0-b1e7-0bdf614af952] {
    font-size: 14px;
  }
}

.sd[data-s-d1594a9f-3087-4b0c-81d5-e42b72a2afd1] {
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

.sd[data-s-1d52cf43-c1f2-4887-a935-a45bd606e34d] {
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
  .sd[data-s-1d52cf43-c1f2-4887-a935-a45bd606e34d] {
    flex: none;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    width: 112px;
    max-width: 100%;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-1d52cf43-c1f2-4887-a935-a45bd606e34d] {
    flex: none;
    width: auto;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-1d52cf43-c1f2-4887-a935-a45bd606e34d] {
    flex: none;
    width: auto;
  }
}

.sd[data-s-9c52bc30-1c50-4b3d-b9d7-8e3888c94034] {
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
  .sd[data-s-9c52bc30-1c50-4b3d-b9d7-8e3888c94034] {
    font-size: 12px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-9c52bc30-1c50-4b3d-b9d7-8e3888c94034] {
    font-size: 14px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-9c52bc30-1c50-4b3d-b9d7-8e3888c94034] {
    font-size: 14px;
  }
}

.sd[data-s-94dccacf-658e-48ac-88d2-9e3da0dc1465] {
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

.sd[data-s-94dccacf-658e-48ac-88d2-9e3da0dc1465]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-94dccacf-658e-48ac-88d2-9e3da0dc1465] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-94dccacf-658e-48ac-88d2-9e3da0dc1465] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-94dccacf-658e-48ac-88d2-9e3da0dc1465] {
    font-size: 14px;
  }
}

.sd[data-s-f1e8f85f-5b59-4d04-9272-41882b665737] {
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

.sd[data-s-f1e8f85f-5b59-4d04-9272-41882b665737]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-f1e8f85f-5b59-4d04-9272-41882b665737] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-f1e8f85f-5b59-4d04-9272-41882b665737] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-f1e8f85f-5b59-4d04-9272-41882b665737] {
    font-size: 14px;
  }
}

.sd[data-s-71967306-e940-4234-8471-ce7302daaf2e] {
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

.sd[data-s-71967306-e940-4234-8471-ce7302daaf2e]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-71967306-e940-4234-8471-ce7302daaf2e] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-71967306-e940-4234-8471-ce7302daaf2e] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-71967306-e940-4234-8471-ce7302daaf2e] {
    font-size: 14px;
  }
}

.sd[data-s-69752cc2-298e-4d21-abed-c22b787a7329] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-0e3dbc5c-03ae-4115-84ed-01e858674c07] {
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

.sd[data-s-0e3dbc5c-03ae-4115-84ed-01e858674c07]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-0e3dbc5c-03ae-4115-84ed-01e858674c07] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-0e3dbc5c-03ae-4115-84ed-01e858674c07] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-0e3dbc5c-03ae-4115-84ed-01e858674c07] {
    font-size: 14px;
  }
}

.sd[data-s-c6a76443-959a-4a6c-bfa2-510336f2633b] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-8a6d66d4-9277-4553-917a-b7f3cefb085b] {
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

.sd[data-s-8a6d66d4-9277-4553-917a-b7f3cefb085b]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-8a6d66d4-9277-4553-917a-b7f3cefb085b] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-8a6d66d4-9277-4553-917a-b7f3cefb085b] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-8a6d66d4-9277-4553-917a-b7f3cefb085b] {
    font-size: 14px;
  }
}

.sd[data-s-bc7b3764-4993-4b3c-8098-69e009efa60e] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-688d4c4a-4a1f-42a0-83cb-7d348f2cef19] {
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

.sd[data-s-688d4c4a-4a1f-42a0-83cb-7d348f2cef19]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-688d4c4a-4a1f-42a0-83cb-7d348f2cef19] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-688d4c4a-4a1f-42a0-83cb-7d348f2cef19] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-688d4c4a-4a1f-42a0-83cb-7d348f2cef19] {
    font-size: 14px;
  }
}

.sd[data-s-4ea4659a-bc1a-4b49-bc0c-08ed3926b839] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 5px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

.sd[data-s-4735deda-06d4-4f00-89ec-414585c59e21] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-c108e155-a8be-4724-a54e-18c2e38f385e] {
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

.sd[data-s-c108e155-a8be-4724-a54e-18c2e38f385e]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-c108e155-a8be-4724-a54e-18c2e38f385e] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-c108e155-a8be-4724-a54e-18c2e38f385e] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-c108e155-a8be-4724-a54e-18c2e38f385e] {
    font-size: 14px;
  }
}

.sd[data-s-387f229c-0c31-456b-8171-ce9f44e537b0] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 19px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

@media screen and (max-width: 320px) {
  .sd[data-s-387f229c-0c31-456b-8171-ce9f44e537b0] {
    margin: 25px 0px 0px 0px;
    max-width: 100%;
  }
}

.sd[data-s-9a0da9ee-2830-4396-902e-adf5f7e7eb98] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-907a2977-399e-4a54-af94-3e8957c1017c] {
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

.sd[data-s-907a2977-399e-4a54-af94-3e8957c1017c]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-907a2977-399e-4a54-af94-3e8957c1017c] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-907a2977-399e-4a54-af94-3e8957c1017c] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-907a2977-399e-4a54-af94-3e8957c1017c] {
    font-size: 14px;
  }
}

.sd[data-s-30f18044-f852-4f5b-9934-6fe188413cce] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 19px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

@media screen and (max-width: 320px) {
  .sd[data-s-30f18044-f852-4f5b-9934-6fe188413cce] {
    margin: 25px 0px 0px 0px;
    max-width: 100%;
  }
}

.sd[data-s-88d72094-d6f5-4e67-978e-8731c6bd68d7] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-d0c77893-a78e-4596-b7b4-718fea9f6e78] {
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

.sd[data-s-d0c77893-a78e-4596-b7b4-718fea9f6e78]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-d0c77893-a78e-4596-b7b4-718fea9f6e78] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-d0c77893-a78e-4596-b7b4-718fea9f6e78] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-d0c77893-a78e-4596-b7b4-718fea9f6e78] {
    font-size: 14px;
  }
}

.sd[data-s-c5cab6ff-f8bc-4e45-921c-e3a3b2a4ca58] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 19px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

@media screen and (max-width: 320px) {
  .sd[data-s-c5cab6ff-f8bc-4e45-921c-e3a3b2a4ca58] {
    margin: 25px 0px 0px 0px;
    max-width: 100%;
  }
}

.sd[data-s-1cac80a0-15b9-4304-9b40-0262261be168] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-eccb9eff-5aae-46f9-a60c-84b80cf3bb1b] {
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

.sd[data-s-eccb9eff-5aae-46f9-a60c-84b80cf3bb1b]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-eccb9eff-5aae-46f9-a60c-84b80cf3bb1b] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-eccb9eff-5aae-46f9-a60c-84b80cf3bb1b] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-eccb9eff-5aae-46f9-a60c-84b80cf3bb1b] {
    font-size: 14px;
  }
}

.sd[data-s-ffb7eaae-9452-4f84-9d32-ed00c37e0c63] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 5px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

.sd[data-s-85f6f207-4f4f-4353-81bf-1b7b96ca7995] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-4acf6c8a-1253-4b3f-b575-e84fc48a4c95] {
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

.sd[data-s-4acf6c8a-1253-4b3f-b575-e84fc48a4c95]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-4acf6c8a-1253-4b3f-b575-e84fc48a4c95] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-4acf6c8a-1253-4b3f-b575-e84fc48a4c95] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-4acf6c8a-1253-4b3f-b575-e84fc48a4c95] {
    font-size: 14px;
  }
}

.sd[data-s-ec11bf81-3503-4a6f-b783-dfc02651c82f] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 19px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

@media screen and (max-width: 320px) {
  .sd[data-s-ec11bf81-3503-4a6f-b783-dfc02651c82f] {
    margin: 25px 0px 0px 0px;
    max-width: 100%;
  }
}

.sd[data-s-b2d14ee4-d362-4531-89e7-e424460709db] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-aee5c3ed-08dd-4d91-bbf9-babfacedbd96] {
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

.sd[data-s-aee5c3ed-08dd-4d91-bbf9-babfacedbd96]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-aee5c3ed-08dd-4d91-bbf9-babfacedbd96] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-aee5c3ed-08dd-4d91-bbf9-babfacedbd96] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-aee5c3ed-08dd-4d91-bbf9-babfacedbd96] {
    font-size: 14px;
  }
}

.sd[data-s-9b59cbf9-45b7-4dbb-ae0d-abf43388e7e7] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 5px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

.sd[data-s-d94b1a5f-c916-41cd-85c3-1af96c566bc6] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-5ae6c110-62c6-4aa0-9587-7aa060b62b59] {
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

.sd[data-s-5ae6c110-62c6-4aa0-9587-7aa060b62b59]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-5ae6c110-62c6-4aa0-9587-7aa060b62b59] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-5ae6c110-62c6-4aa0-9587-7aa060b62b59] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-5ae6c110-62c6-4aa0-9587-7aa060b62b59] {
    font-size: 14px;
  }
}

.sd[data-s-ed2e75df-0a07-4dff-bfa9-0367cb28aeab] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 5px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

.sd[data-s-a40e2f89-bb2b-41d6-bfec-89115f0551f7] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-73989fd4-60d2-4e5e-a822-1499572d07f6] {
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

.sd[data-s-73989fd4-60d2-4e5e-a822-1499572d07f6]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-73989fd4-60d2-4e5e-a822-1499572d07f6] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-73989fd4-60d2-4e5e-a822-1499572d07f6] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-73989fd4-60d2-4e5e-a822-1499572d07f6] {
    font-size: 14px;
  }
}

.sd[data-s-bf47895e-bf0f-4a18-9c26-3a9a033c456d] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 5px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

.sd[data-s-f77b45a7-11f3-4522-a75f-a4d7fd259005] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-9acdc045-d5d6-4b91-bd44-a9055a86dc34] {
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

.sd[data-s-9acdc045-d5d6-4b91-bd44-a9055a86dc34]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-9acdc045-d5d6-4b91-bd44-a9055a86dc34] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-9acdc045-d5d6-4b91-bd44-a9055a86dc34] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-9acdc045-d5d6-4b91-bd44-a9055a86dc34] {
    font-size: 14px;
  }
}

.sd[data-s-a61865bf-6d14-4e15-84b7-fe399d2af6f0] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 5px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

.sd[data-s-321ada8b-2de4-4556-8c9b-764dfc1d6abf] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  padding: 0px;
}

.sd[data-s-c9e2687b-4493-4cf1-9041-c5062363e7fc] {
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

.sd[data-s-c9e2687b-4493-4cf1-9041-c5062363e7fc]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-c9e2687b-4493-4cf1-9041-c5062363e7fc] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-c9e2687b-4493-4cf1-9041-c5062363e7fc] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-c9e2687b-4493-4cf1-9041-c5062363e7fc] {
    font-size: 14px;
  }
}

.sd[data-s-4f0f3d06-1024-4c10-bec6-7627dd79d591] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 5px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

.sd[data-s-e4028ad0-3947-42a7-96a3-1c961457bf84] {
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

.sd[data-s-cce9ac1d-0802-4ca2-a494-333a80ca4ce2] {
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
  .sd[data-s-cce9ac1d-0802-4ca2-a494-333a80ca4ce2] {
    flex: none;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 112px;
    max-width: 100%;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-cce9ac1d-0802-4ca2-a494-333a80ca4ce2] {
    flex: none;
    width: auto;
    max-width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-cce9ac1d-0802-4ca2-a494-333a80ca4ce2] {
    flex: none;
    width: auto;
  }
}

.sd[data-s-3e342b36-212f-4d3b-8824-b49f002afc95] {
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
  .sd[data-s-3e342b36-212f-4d3b-8824-b49f002afc95] {
    font-size: 12px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-3e342b36-212f-4d3b-8824-b49f002afc95] {
    font-size: 14px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-3e342b36-212f-4d3b-8824-b49f002afc95] {
    font-size: 14px;
  }
}

.sd[data-s-2aaa948c-32fd-460f-a18a-19b13c0f08fc] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-03ab4d80-42e1-475e-beec-f74f688149b2] {
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

.sd[data-s-03ab4d80-42e1-475e-beec-f74f688149b2]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-03ab4d80-42e1-475e-beec-f74f688149b2] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-03ab4d80-42e1-475e-beec-f74f688149b2] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-03ab4d80-42e1-475e-beec-f74f688149b2] {
    font-size: 14px;
  }
}

.sd[data-s-3cb31014-c573-428d-b37f-b9b5ad599bc4] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 10px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

.sd[data-s-59a734f1-33ea-497a-86da-71eae44f49e9] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-d89a8c56-8fe6-4f0e-93f0-f85bead876a8] {
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

.sd[data-s-d89a8c56-8fe6-4f0e-93f0-f85bead876a8]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-d89a8c56-8fe6-4f0e-93f0-f85bead876a8] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-d89a8c56-8fe6-4f0e-93f0-f85bead876a8] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-d89a8c56-8fe6-4f0e-93f0-f85bead876a8] {
    font-size: 14px;
  }
}

.sd[data-s-a3710faf-c331-4ebc-bdc0-16f101b7d99c] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 5px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

.sd[data-s-f8b72cde-13a9-4431-8100-11d94b938968] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-5799a871-3225-44df-aa09-247b4543120e] {
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

.sd[data-s-5799a871-3225-44df-aa09-247b4543120e]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-5799a871-3225-44df-aa09-247b4543120e] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-5799a871-3225-44df-aa09-247b4543120e] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-5799a871-3225-44df-aa09-247b4543120e] {
    font-size: 14px;
  }
}

.sd[data-s-70536ef9-3429-48eb-a6f3-ff94d7e17676] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 5px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

.sd[data-s-a39fae35-fbac-4ff0-8cb6-e909a95e3176] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-2bd0f454-f42f-48e4-a9cc-c863e1150d53] {
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

.sd[data-s-2bd0f454-f42f-48e4-a9cc-c863e1150d53]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-2bd0f454-f42f-48e4-a9cc-c863e1150d53] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-2bd0f454-f42f-48e4-a9cc-c863e1150d53] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-2bd0f454-f42f-48e4-a9cc-c863e1150d53] {
    font-size: 14px;
  }
}

.sd[data-s-62a3917a-0738-40b5-94e3-7e419b39d4cb] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 5px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

.sd[data-s-192d2fc4-aebf-4517-9591-c8739acdd97f] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-a076dc57-dc06-48a0-82eb-3a402659d8cb] {
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

.sd[data-s-a076dc57-dc06-48a0-82eb-3a402659d8cb]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-a076dc57-dc06-48a0-82eb-3a402659d8cb] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-a076dc57-dc06-48a0-82eb-3a402659d8cb] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-a076dc57-dc06-48a0-82eb-3a402659d8cb] {
    font-size: 14px;
  }
}

.sd[data-s-2d130068-b145-4abb-94de-ff45fc65d248] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 5px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

.sd[data-s-efee0d6f-7dc7-4390-b301-41abf76c0e0c] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-6f10a011-fa32-4fdb-8387-ad3bfa889ac9] {
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

.sd[data-s-6f10a011-fa32-4fdb-8387-ad3bfa889ac9]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-6f10a011-fa32-4fdb-8387-ad3bfa889ac9] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-6f10a011-fa32-4fdb-8387-ad3bfa889ac9] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-6f10a011-fa32-4fdb-8387-ad3bfa889ac9] {
    font-size: 14px;
  }
}

.sd[data-s-ecfe9bb6-ea64-4dc4-a9ca-dde48b125482] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 19px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

@media screen and (max-width: 320px) {
  .sd[data-s-ecfe9bb6-ea64-4dc4-a9ca-dde48b125482] {
    margin: 25px 0px 0px 0px;
    max-width: 100%;
  }
}

.sd[data-s-e6f7283a-fb74-477e-9032-64c0640ec3ff] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-17259ae8-f1d9-4d50-9485-ab2fd2a0941a] {
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

.sd[data-s-17259ae8-f1d9-4d50-9485-ab2fd2a0941a]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-17259ae8-f1d9-4d50-9485-ab2fd2a0941a] {
    font-size: 10px;
    text-align: left;
    justify-content: flex-start;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-17259ae8-f1d9-4d50-9485-ab2fd2a0941a] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-17259ae8-f1d9-4d50-9485-ab2fd2a0941a] {
    font-size: 14px;
  }
}

.sd[data-s-398bc333-4a22-4355-a2eb-66d9fbcc76a1] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 19px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-398bc333-4a22-4355-a2eb-66d9fbcc76a1] {
    margin: 19px 0px 0px 0px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-398bc333-4a22-4355-a2eb-66d9fbcc76a1] {
    margin: 25px 0px 0px 0px;
    max-width: 100%;
  }
}

.sd[data-s-8bd3cc0d-572c-4fb2-a996-ff05d3148611] {
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

.sd[data-s-8bd3cc0d-572c-4fb2-a996-ff05d3148611]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-8bd3cc0d-572c-4fb2-a996-ff05d3148611] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-8bd3cc0d-572c-4fb2-a996-ff05d3148611] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-8bd3cc0d-572c-4fb2-a996-ff05d3148611] {
    font-size: 14px;
  }
}

.sd[data-s-0b46aeb5-5d90-4f75-8862-15e9af927ee9] {
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

.sd[data-s-a5e09514-ea6c-4088-aa1d-f3687da0e61a] {
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

.sd[data-s-a5e09514-ea6c-4088-aa1d-f3687da0e61a]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-a5e09514-ea6c-4088-aa1d-f3687da0e61a] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-a5e09514-ea6c-4088-aa1d-f3687da0e61a] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-a5e09514-ea6c-4088-aa1d-f3687da0e61a] {
    font-size: 14px;
  }
}

.sd[data-s-136eafd7-68d5-4c18-abe9-168b1851c433] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 5px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

.sd[data-s-cb273d32-ef4b-4088-b397-e02b0c2108d4] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-74383c97-bbbb-4849-8d89-4a5c3849742a] {
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

.sd[data-s-74383c97-bbbb-4849-8d89-4a5c3849742a]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-74383c97-bbbb-4849-8d89-4a5c3849742a] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-74383c97-bbbb-4849-8d89-4a5c3849742a] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-74383c97-bbbb-4849-8d89-4a5c3849742a] {
    font-size: 14px;
  }
}

.sd[data-s-ba6d3723-b8ab-4d42-ab07-908684214903] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-aff0ec86-3abe-4d32-8faa-b3a76fee6a9e] {
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

.sd[data-s-aff0ec86-3abe-4d32-8faa-b3a76fee6a9e]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-aff0ec86-3abe-4d32-8faa-b3a76fee6a9e] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-aff0ec86-3abe-4d32-8faa-b3a76fee6a9e] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-aff0ec86-3abe-4d32-8faa-b3a76fee6a9e] {
    font-size: 14px;
  }
}

.sd[data-s-6eda2442-ad3d-4bd7-8871-16c2bfaf8184] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 5px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

.sd[data-s-79be8c37-85c3-4a8e-ad41-4c78852e88c1] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-794a40d3-17a5-4f4b-9fa0-881d73990356] {
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

.sd[data-s-794a40d3-17a5-4f4b-9fa0-881d73990356]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-794a40d3-17a5-4f4b-9fa0-881d73990356] {
    font-size: 10px;
    text-align: left;
    justify-content: flex-start;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-794a40d3-17a5-4f4b-9fa0-881d73990356] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-794a40d3-17a5-4f4b-9fa0-881d73990356] {
    font-size: 14px;
  }
}

.sd[data-s-d0c9fcc3-00ac-406d-a003-d1895b804c31] {
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

.sd[data-s-d0c9fcc3-00ac-406d-a003-d1895b804c31]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-d0c9fcc3-00ac-406d-a003-d1895b804c31] {
    font-size: 10px;
    text-align: left;
    justify-content: flex-start;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-d0c9fcc3-00ac-406d-a003-d1895b804c31] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-d0c9fcc3-00ac-406d-a003-d1895b804c31] {
    font-size: 14px;
  }
}

.sd[data-s-47567d32-4eda-4a04-9411-3397dda3840c] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-7bdfc1fe-eab6-4ce9-84d2-f021ba3c9563] {
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

.sd[data-s-7bdfc1fe-eab6-4ce9-84d2-f021ba3c9563]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-7bdfc1fe-eab6-4ce9-84d2-f021ba3c9563] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-7bdfc1fe-eab6-4ce9-84d2-f021ba3c9563] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-7bdfc1fe-eab6-4ce9-84d2-f021ba3c9563] {
    font-size: 14px;
  }
}

.sd[data-s-a57c2de1-684b-4634-944c-7539f7b71a4d] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 19px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

@media screen and (max-width: 320px) {
  .sd[data-s-a57c2de1-684b-4634-944c-7539f7b71a4d] {
    margin: 25px 0px 0px 0px;
    max-width: 100%;
  }
}

.sd[data-s-1c64c7cc-2188-42fc-ad01-cc9433e0a976] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-77d4aa74-b56e-46ca-a620-66c59cfeaf19] {
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

.sd[data-s-77d4aa74-b56e-46ca-a620-66c59cfeaf19]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-77d4aa74-b56e-46ca-a620-66c59cfeaf19] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-77d4aa74-b56e-46ca-a620-66c59cfeaf19] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-77d4aa74-b56e-46ca-a620-66c59cfeaf19] {
    font-size: 14px;
  }
}

.sd[data-s-c0e00c12-bfe1-476a-81a8-801bba18ff96] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 19px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

@media screen and (max-width: 320px) {
  .sd[data-s-c0e00c12-bfe1-476a-81a8-801bba18ff96] {
    margin: 25px 0px 0px 0px;
    max-width: 100%;
  }
}

.sd[data-s-9706806a-2438-4885-b8b1-ef8c52386764] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-c2aff281-1b46-4025-9d88-2111d3078b1c] {
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

.sd[data-s-c2aff281-1b46-4025-9d88-2111d3078b1c]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-c2aff281-1b46-4025-9d88-2111d3078b1c] {
    font-size: 10px;
    text-align: left;
    justify-content: flex-start;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-c2aff281-1b46-4025-9d88-2111d3078b1c] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-c2aff281-1b46-4025-9d88-2111d3078b1c] {
    font-size: 14px;
  }
}

.sd[data-s-aa8f7cce-b16e-4014-b636-115e89064c30] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 19px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

@media screen and (max-width: 890px) {
  .sd[data-s-aa8f7cce-b16e-4014-b636-115e89064c30] {
    margin: 19px 0px 0px 0px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-aa8f7cce-b16e-4014-b636-115e89064c30] {
    margin: 25px 0px 0px 0px;
    max-width: 100%;
  }
}

.sd[data-s-8def129c-583f-4870-8b82-c372c84b6244] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-f0f8902c-6c8c-45e4-bfb4-a341fd08144f] {
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

.sd[data-s-f0f8902c-6c8c-45e4-bfb4-a341fd08144f]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-f0f8902c-6c8c-45e4-bfb4-a341fd08144f] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-f0f8902c-6c8c-45e4-bfb4-a341fd08144f] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-f0f8902c-6c8c-45e4-bfb4-a341fd08144f] {
    font-size: 14px;
  }
}

.sd[data-s-4d7e80be-69b0-4c44-9c27-42695679e0ae] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 5px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

.sd[data-s-9d1efb8a-1128-4648-a003-8bd91c374e59] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-81cf55b2-b542-425c-a453-a2670877617f] {
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

.sd[data-s-81cf55b2-b542-425c-a453-a2670877617f]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-81cf55b2-b542-425c-a453-a2670877617f] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-81cf55b2-b542-425c-a453-a2670877617f] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-81cf55b2-b542-425c-a453-a2670877617f] {
    font-size: 14px;
  }
}

.sd[data-s-f54550ac-e915-435a-bafe-e70c60618dd3] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 5px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

.sd[data-s-635818fb-e18b-444e-9ea5-0442a0453544] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-3c9c64a5-9688-49bf-a65e-f03e956db0a5] {
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

.sd[data-s-3c9c64a5-9688-49bf-a65e-f03e956db0a5]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-3c9c64a5-9688-49bf-a65e-f03e956db0a5] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-3c9c64a5-9688-49bf-a65e-f03e956db0a5] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-3c9c64a5-9688-49bf-a65e-f03e956db0a5] {
    font-size: 14px;
  }
}

.sd[data-s-99e2a2a5-0e16-4907-a1c2-8123642ce152] {
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px;
}

.sd[data-s-08bd6399-bbfa-4f6c-a11f-9dd0f50f0da5] {
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

.sd[data-s-08bd6399-bbfa-4f6c-a11f-9dd0f50f0da5]:hover {
  text-decoration: underline;
}

@media screen and (max-width: 890px) {
  .sd[data-s-08bd6399-bbfa-4f6c-a11f-9dd0f50f0da5] {
    font-size: 10px;
  }
}

@media screen and (max-width: 630px) {
  .sd[data-s-08bd6399-bbfa-4f6c-a11f-9dd0f50f0da5] {
    font-size: 12px;
  }
}

@media screen and (max-width: 320px) {
  .sd[data-s-08bd6399-bbfa-4f6c-a11f-9dd0f50f0da5] {
    font-size: 14px;
  }
}

.sd[data-s-a736a70b-82c4-40fd-85a2-df1d3ec1dfff] {
  color: rgba(18, 87, 95, 0.5);
  font-size: 14px;
  height: 14px;
  margin: 5px 0px 0px 0px;
  width: 12px;
  max-width: 100%;
}

.sd[data-s-544c2d48-0aaf-4f7b-8d33-364faddfe2a2] {
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




.sd[data-r-0_0_0_7_3_13d6982b-6a58-4059-abce-6a3fb4df1c60]:before {
  background-image: url("./../../assets/navpage/icon_feature_01_1.svg")
}
.sd[data-r-0_0_1_0_7_3_1fb6bfe1-acdf-4181-a495-a6731c0be3e7]:before {
  background-image: url("./../../assets/navpage/icon_feature_02_1.svg")
}
.sd[data-r-0_0_8_3_1dfffff9-90d8-4c21-935a-43fe3d267ba3]:before {
  background-image: url("./../../assets/navpage/icon_feature_03_1.svg")
}
.sd[data-r-0_1_1_0_7_3_1bcc3714-1196-4020-9cae-f3a4ebe3cefc]:before {
  background-image: url("./../../assets/navpage/icon_feature_03_1.svg")
}
.sd[data-r-1_0_0_0_3_3_06a2554d-2e24-4dd3-89a1-e4685b01a0a3]:before {
  background-image: url("./../../assets/navpage/s-260x240_webp_f51b03cb-208f-46bd-bd00-3beaf86e7d98.webp")
}
</style>
