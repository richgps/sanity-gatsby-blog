export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e972636f34cfa8616aebc82',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-qkk6sz6c',
                  apiId: 'b5c5d98c-3b93-47d9-ac79-4b87a5ec3726'
                },
                {
                  buildHookId: '5e972636bbeabea8096867d0',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-eecxori6',
                  apiId: '020b92e3-0036-4649-bb73-24cd6b74935e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/richgps/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-eecxori6.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
