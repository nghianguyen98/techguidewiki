import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '071'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '18d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '154'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '69b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '3e5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '519'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'e2b'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '9b2'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '924'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', 'c25'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ae'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '7b8'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'bf9'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'ea4'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '26c'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'aee'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '2e3'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'cce'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'bd1'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '47d'),
    routes: [
      {
        path: '/docs/05b5532f-34b7-41cb-b24d-a65e88ccca83',
        component: ComponentCreator('/docs/05b5532f-34b7-41cb-b24d-a65e88ccca83', '7ce'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/09d7c45a-37c8-48c3-886b-e8a36468e56f',
        component: ComponentCreator('/docs/09d7c45a-37c8-48c3-886b-e8a36468e56f', 'e97'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/0d8dc90b-74e8-4e98-a036-a54c82afa217',
        component: ComponentCreator('/docs/0d8dc90b-74e8-4e98-a036-a54c82afa217', '39f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/169e768f-d7e9-4c5f-84b9-3448c1ae442f',
        component: ComponentCreator('/docs/169e768f-d7e9-4c5f-84b9-3448c1ae442f', 'c6b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/1c1f4612-3fd5-451e-969d-26f5a47c5eeb',
        component: ComponentCreator('/docs/1c1f4612-3fd5-451e-969d-26f5a47c5eeb', 'c32'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/1d0bb999-fd19-49a3-92c6-ebfb4326f49f',
        component: ComponentCreator('/docs/1d0bb999-fd19-49a3-92c6-ebfb4326f49f', '758'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/22187126-43bb-4385-bc04-48c7d77cb0c0',
        component: ComponentCreator('/docs/22187126-43bb-4385-bc04-48c7d77cb0c0', '289'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/2c7a1a14-3b04-4592-b7e2-2607b7bc9dd7',
        component: ComponentCreator('/docs/2c7a1a14-3b04-4592-b7e2-2607b7bc9dd7', '905'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/2d227b95-8841-45d4-aa0c-cc21d9f570cf',
        component: ComponentCreator('/docs/2d227b95-8841-45d4-aa0c-cc21d9f570cf', 'dc5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/3559eac6-385d-4aec-8022-9d2c8556e71e',
        component: ComponentCreator('/docs/3559eac6-385d-4aec-8022-9d2c8556e71e', 'f2a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/3a73a159-9e51-4242-9df5-7c9010c37895',
        component: ComponentCreator('/docs/3a73a159-9e51-4242-9df5-7c9010c37895', 'af7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/3b669bf3-4f8e-43cb-899d-f0944026f13a',
        component: ComponentCreator('/docs/3b669bf3-4f8e-43cb-899d-f0944026f13a', '153'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/40b017ed-28dc-4ecb-8cfa-96cd05539eb1',
        component: ComponentCreator('/docs/40b017ed-28dc-4ecb-8cfa-96cd05539eb1', '938'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/41c00288-791c-47a8-8516-a96ae8571d13',
        component: ComponentCreator('/docs/41c00288-791c-47a8-8516-a96ae8571d13', '72b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/41d5ef63-efce-4f7c-966b-8b41f02cb295',
        component: ComponentCreator('/docs/41d5ef63-efce-4f7c-966b-8b41f02cb295', '376'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/4260fcd8-4eac-4c5e-aba6-7a3cd4f245d7',
        component: ComponentCreator('/docs/4260fcd8-4eac-4c5e-aba6-7a3cd4f245d7', 'b74'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/4a060acb-3e35-4ebc-b82d-422655fb4d68',
        component: ComponentCreator('/docs/4a060acb-3e35-4ebc-b82d-422655fb4d68', 'd08'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/50db929f-8887-4c8c-a602-1d0c7eedb341',
        component: ComponentCreator('/docs/50db929f-8887-4c8c-a602-1d0c7eedb341', 'e44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/54cbef43-95d5-449d-a7db-99b9ddd0bfb3',
        component: ComponentCreator('/docs/54cbef43-95d5-449d-a7db-99b9ddd0bfb3', 'ff3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/581872ff-5c29-4bc9-84f9-c69b939b0a74',
        component: ComponentCreator('/docs/581872ff-5c29-4bc9-84f9-c69b939b0a74', '5e1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/5fbb2e5e-4c4f-46a9-a5ab-0da89cc4c0cd',
        component: ComponentCreator('/docs/5fbb2e5e-4c4f-46a9-a5ab-0da89cc4c0cd', 'e22'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/6790e962-7708-46ac-bc9d-7607055b2000',
        component: ComponentCreator('/docs/6790e962-7708-46ac-bc9d-7607055b2000', '917'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/67972286-85f0-45e7-8e57-108bea8a4272',
        component: ComponentCreator('/docs/67972286-85f0-45e7-8e57-108bea8a4272', '607'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/68bd0f30-4142-462c-9d2e-d2808e0a3a1c',
        component: ComponentCreator('/docs/68bd0f30-4142-462c-9d2e-d2808e0a3a1c', '7bc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/6de4abd7-b0bf-48df-8c60-47083805287a',
        component: ComponentCreator('/docs/6de4abd7-b0bf-48df-8c60-47083805287a', '9c8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/6f703b80-eeb1-441e-b3d8-729996b4fc89',
        component: ComponentCreator('/docs/6f703b80-eeb1-441e-b3d8-729996b4fc89', '848'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/70be76b8-e83e-4586-8c50-dd63217ac8ef',
        component: ComponentCreator('/docs/70be76b8-e83e-4586-8c50-dd63217ac8ef', 'a52'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/71dc791f-72d1-4c41-9ab5-083c52aef8dd',
        component: ComponentCreator('/docs/71dc791f-72d1-4c41-9ab5-083c52aef8dd', 'da0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/71df0144-3d36-4277-ad93-04f6dc86cdbc',
        component: ComponentCreator('/docs/71df0144-3d36-4277-ad93-04f6dc86cdbc', 'd84'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/72c70904-4588-4ccd-9511-f41380155709',
        component: ComponentCreator('/docs/72c70904-4588-4ccd-9511-f41380155709', '9d0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/75192299-a448-4568-8555-00c00f265ff8',
        component: ComponentCreator('/docs/75192299-a448-4568-8555-00c00f265ff8', '11c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/75c3c24c-e16b-468c-98be-53ced33dbebc',
        component: ComponentCreator('/docs/75c3c24c-e16b-468c-98be-53ced33dbebc', '176'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/7c4a6486-d0f6-4981-9cf8-722eb4e7fb5a',
        component: ComponentCreator('/docs/7c4a6486-d0f6-4981-9cf8-722eb4e7fb5a', '989'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/7f85b971-e5d0-476d-a5d7-06cf30a7644a',
        component: ComponentCreator('/docs/7f85b971-e5d0-476d-a5d7-06cf30a7644a', '564'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/862b0848-bd29-4b37-bfaa-ff52e889f558',
        component: ComponentCreator('/docs/862b0848-bd29-4b37-bfaa-ff52e889f558', '7a8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/869daff0-d239-42e0-a0aa-67a6a56db3ef',
        component: ComponentCreator('/docs/869daff0-d239-42e0-a0aa-67a6a56db3ef', '176'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/87246985-ce29-47e6-9f3c-738513162564',
        component: ComponentCreator('/docs/87246985-ce29-47e6-9f3c-738513162564', '5fa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/87fdc7b5-4227-410b-9e80-0ba7e8564746',
        component: ComponentCreator('/docs/87fdc7b5-4227-410b-9e80-0ba7e8564746', '792'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/8b2cfc51-d406-4152-b590-5fd3afd5a26b',
        component: ComponentCreator('/docs/8b2cfc51-d406-4152-b590-5fd3afd5a26b', 'e8a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/8ca9ef53-cb0f-4b15-b3c5-91abbdcc4a41',
        component: ComponentCreator('/docs/8ca9ef53-cb0f-4b15-b3c5-91abbdcc4a41', 'a72'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/8dbb022c-88d4-4e73-b01e-ba1406de095f',
        component: ComponentCreator('/docs/8dbb022c-88d4-4e73-b01e-ba1406de095f', 'e08'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/8f7c98eb-6ff2-4c86-8f10-3e54cda40361',
        component: ComponentCreator('/docs/8f7c98eb-6ff2-4c86-8f10-3e54cda40361', '5d6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/95da1f4f-597d-4cb1-86c4-568f58c98c8d',
        component: ComponentCreator('/docs/95da1f4f-597d-4cb1-86c4-568f58c98c8d', '65d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/9aca9796-000f-4af4-b7c7-6359e251ec03',
        component: ComponentCreator('/docs/9aca9796-000f-4af4-b7c7-6359e251ec03', '1a4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/a2adcf1f-1988-4c86-988a-a2972224801c',
        component: ComponentCreator('/docs/a2adcf1f-1988-4c86-988a-a2972224801c', '4d7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/a4f1f89d-256e-4ca1-88a8-103190bf3d07',
        component: ComponentCreator('/docs/a4f1f89d-256e-4ca1-88a8-103190bf3d07', '5f4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/a7eab833-e7d2-4b54-bcb3-01a71d2cf9c7',
        component: ComponentCreator('/docs/a7eab833-e7d2-4b54-bcb3-01a71d2cf9c7', 'c94'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/aff4ca0f-d794-4e6e-8674-ce12a101d023',
        component: ComponentCreator('/docs/aff4ca0f-d794-4e6e-8674-ce12a101d023', '715'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/b74e2a72-a13e-4f4c-bf7d-aaeafc9652d2',
        component: ComponentCreator('/docs/b74e2a72-a13e-4f4c-bf7d-aaeafc9652d2', 'b59'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/b7aca39c-a24e-43ab-b045-33b5d9900499',
        component: ComponentCreator('/docs/b7aca39c-a24e-43ab-b045-33b5d9900499', '330'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/b930ae49-3eeb-4db8-9c4e-c833de32c9ef',
        component: ComponentCreator('/docs/b930ae49-3eeb-4db8-9c4e-c833de32c9ef', '1cb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/bba55aae-45cd-4c6e-bc37-07eb4b93c435',
        component: ComponentCreator('/docs/bba55aae-45cd-4c6e-bc37-07eb4b93c435', '9e1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/bc8bf0cb-91bf-4654-a409-651c22661e2d',
        component: ComponentCreator('/docs/bc8bf0cb-91bf-4654-a409-651c22661e2d', '397'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/c4d02bd8-580b-49dd-8540-4ef17f13ba17',
        component: ComponentCreator('/docs/c4d02bd8-580b-49dd-8540-4ef17f13ba17', '193'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/c5888a04-dddd-456a-bc04-62b75aac6969',
        component: ComponentCreator('/docs/c5888a04-dddd-456a-bc04-62b75aac6969', 'eaf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/c645643a-87de-49e1-acf2-3321a6e2c0d3',
        component: ComponentCreator('/docs/c645643a-87de-49e1-acf2-3321a6e2c0d3', '809'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/d1d1f97d-bc87-4c82-981d-166bcef402b2',
        component: ComponentCreator('/docs/d1d1f97d-bc87-4c82-981d-166bcef402b2', '65e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/daa46c8c-e0e4-4760-8779-9a81c7b13fd0',
        component: ComponentCreator('/docs/daa46c8c-e0e4-4760-8779-9a81c7b13fd0', '309'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dde261ef-7626-4208-8b93-94b5fa87edf9',
        component: ComponentCreator('/docs/dde261ef-7626-4208-8b93-94b5fa87edf9', 'd50'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/e1062e52-c1c4-432d-a743-491bf7fcc2f5',
        component: ComponentCreator('/docs/e1062e52-c1c4-432d-a743-491bf7fcc2f5', '7fc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/e40e3ae5-8cb2-4838-9836-d8d6ce86ea51',
        component: ComponentCreator('/docs/e40e3ae5-8cb2-4838-9836-d8d6ce86ea51', '6e3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/e893e8de-e3ea-4c18-9320-9e2046eceda2',
        component: ComponentCreator('/docs/e893e8de-e3ea-4c18-9320-9e2046eceda2', '9a9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ea112448-a40e-4bbc-801a-0b3e422ec45d',
        component: ComponentCreator('/docs/ea112448-a40e-4bbc-801a-0b3e422ec45d', '1a2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ede7e90d-4d98-432f-b6bd-c4e8ece77762',
        component: ComponentCreator('/docs/ede7e90d-4d98-432f-b6bd-c4e8ece77762', '1fa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ee4c016a-5dfb-4acd-9583-754bbced289e',
        component: ComponentCreator('/docs/ee4c016a-5dfb-4acd-9583-754bbced289e', 'aa5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ee50824a-b7e3-4c22-8e59-62926d9058d9',
        component: ComponentCreator('/docs/ee50824a-b7e3-4c22-8e59-62926d9058d9', 'cce'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/f011d317-f7ea-46a6-9266-e2c678cae352',
        component: ComponentCreator('/docs/f011d317-f7ea-46a6-9266-e2c678cae352', '86b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/f294c298-3731-4137-8f6a-b75cf2522e04',
        component: ComponentCreator('/docs/f294c298-3731-4137-8f6a-b75cf2522e04', '735'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/f53c4e0d-2135-4670-b804-1858476b081f',
        component: ComponentCreator('/docs/f53c4e0d-2135-4670-b804-1858476b081f', '22b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/fbc9b0d0-04ba-4976-90ea-5b2c665559fd',
        component: ComponentCreator('/docs/fbc9b0d0-04ba-4976-90ea-5b2c665559fd', 'e05'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/fcfd72b5-7a27-443a-a59a-b4e0d72efef7',
        component: ComponentCreator('/docs/fcfd72b5-7a27-443a-a59a-b4e0d72efef7', '2aa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/wellcome',
        component: ComponentCreator('/docs/wellcome', '237'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'c88'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
