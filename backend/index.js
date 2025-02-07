import express from 'express';
import cors from 'cors';

const app = express();

// ✅ Use dynamic origin instead of "*"
app.use(cors({
  origin: function (origin, callback) {
    callback(null, true);
  },
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

app.get('/api/jokes', (req, res) => {
    const jokes = [
        { id: 1, title: 'A joke', content: 'This is joke' },
        { id: 2, title: 'Another joke', content: 'This is another joke' },
        { id: 3, title: 'A third joke', content: 'This is joke' },
        { id: 4, title: 'A fourth joke', content: 'This is fourth joke' },
        { id: 5, title: 'A fifth joke', content: 'This is fifth joke' },
    ];
    res.json(jokes);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));

export default app;


// import express from 'express';
// import cors from 'cors';

// const app = express();

// // ✅ Enable CORS for all origins
// app.use(cors({
//   origin: '*',  // Allow requests from any domain
//   methods: ['GET', 'POST'],
//   allowedHeaders: ['Content-Type']
// }));

// app.get('/api/jokes', (req, res) => {
//     const jokes = [
//         { id: 1, title: 'A joke', content: 'This is joke' },
//         { id: 2, title: 'Another joke', content: 'This is another joke' },
//         { id: 3, title: 'A third joke', content: 'This is joke' },
//         { id: 4, title: 'A fourth joke', content: 'This is fourth joke' },
//         { id: 5, title: 'A fifth joke', content: 'This is fifth joke' },
//     ];
//     res.json(jokes);
// });

// export default app;





// import express from 'express';
// import cors from 'cors'

// const app = express();
// app.use(cors());

// // app.get('/', (req, res) =>{
// //     res.send('Server is ready');
// // });

// app.get('/api/jokes', (req,res) =>{ 
//     const jokes = [
//         {
//             id: 1,
//             title: 'A joke',
//             content: 'This is joke'
//         },
//         {
//             id: 2,
//             title: 'Another joke',
//             content: 'This is another joke'
//         },
//         {
//             id: 3,
//             title: 'A third joke',
//             content: 'This is joke'
//         },
//         {
//             id: 4,
//             title: 'A fourth joke',
//             content: 'This is fourth joke'
//         },
//         {
//             id: 5,
//             title: 'A fifth joke',
//             content: 'This is fifth joke'
//         },
//     ];
//     res.send(jokes);
// })

// const port = process.env.PORT || 3000;

// app.listen(port, ()=>{
//     console.log(`Server at http://localhost:${port}`);
// }
// );

// export default app;
