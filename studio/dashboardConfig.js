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
                  buildHookId: '5ebd9a060210295f46007f3d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-2-studio-6qvq6ea9',
                  apiId: 'a52da79e-3c50-4992-a41a-40fe5cb983a8'
                },
                {
                  buildHookId: '5ebd9a07ed34beb749e30997',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-2-web-1whub612',
                  apiId: 'e2298ec1-9dee-4661-b9bb-6efa411f4679'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/evenwestvang/sanity-gatsby-portfolio-2',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-2-web-1whub612.netlify.app',
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
