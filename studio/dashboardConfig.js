export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '63292279d8ebff20fd59fbd3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-1v7e7nsn',
                  apiId: '2e8dcef4-5720-492b-8bf2-f1d9b340f245'
                },
                {
                  buildHookId: '6329227aa9491e26e60b24d3',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-jakvxw9a',
                  apiId: '82bf092b-4aca-4e7b-96a2-ca66f795e0b4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/WilliamThomsonNZ/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-jakvxw9a.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
