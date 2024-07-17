// document.addEventListener('DOMContentLoaded', function () {
//     const tocHTML = `
//         <div id="sub">
//             <h2>Subject</h2>
//             <ul id="sub-list"></ul>
//         </div>
//     `;
//     document.body.insertAdjacentHTML('afterbegin', tocHTML);

//     const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
//     const subList = document.getElementById('sub-list');

//     headers.forEach(header => {
//         if (!header.id) {
//             header.id = header.textContent.replace(/\s+/g, '-').toLowerCase();
//         }

//         const listItem = document.createElement('li');

//         listItem.classList.add(`sub-${header.tagName.toLowerCase()}`);

//         const link = document.createElement('a');
//         link.href = `#${header.id}`;
//         link.textContent = header.textContent;

//         listItem.appendChild(link);
//         subList.appendChild(listItem);
//     });
// });