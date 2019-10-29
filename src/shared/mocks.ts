const mockData = {
  post_summary: {
    title: "abc",
    content: "dce",
    created_at: "2019-09-30"
  },
  post_summary_list: {
    posts: [
      {
        post_id: "1",
        title: "Read-Only Array and Tuple Types in TypeScript",
        content:
          "TypeScript 3.4 added a bit of syntactic sugar to the language that makes it easier to work with read-only array and tuple types.",
        created_at: "August 29, 2019",
        updated_at: "August 29, 2019"
      },
      {
        post_id: "2",
        title: "The --showConfig Compiler Option in TypeScript",
        content:
          "TypeScript 3.2 added a new --showConfig compiler flag to the tsc executable. It calculates the effective tsconfig.json file and prints it to the console.",
        created_at: "August 27, 2019",
        updated_at: "August 27, 2019"
      },
      {
        post_id: "3",
        title: "Setting the Node.js Version for an Azure DevOps Build",
        content:
          "A quick explanation of how to set a specific Node.js version for an Azure DevOps build using the Node.js Tool Installer task.",
        created_at: "August 5, 2019",
        updated_at: "August 5, 2019"
      }
    ]
  }
};

export default mockData;
