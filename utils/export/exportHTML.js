import { Share } from 'react-native';
import { Buffer } from 'buffer';

const header = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo List</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        ul {
            list-style-type: none; /* Enlève les puces */
            padding: 0;
        }
        li {
            margin: 5px 0;
            padding: 10px;
            background-color: #f4f4f4;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        .completed {
            color: green;
        }
        .not-completed {
            color: red;
        }
    </style>
</head>
<body>
`
const footer = `
</body>
</html>
`

const MakeHtml = (todoList) => {
    let html = ""
    html += header

    html += "<h1>Todo List</h1>"
    html += "<ul>"
    todoList.forEach(todo => {
        html += `<li class=${todo.done ? "completed" : "not-completed"}>${todo.content}</li>`
    })
    html += "</ul>"

    html += footer

    return html
}


export const exportHTML = async (todoList) => {
    let htmlString = MakeHtml(todoList)
    try {
        const result = await Share.share({
            message: 'Voici le contenu HTML.',
            url: 'data:text/html;base64,' + Buffer.from(htmlString, 'utf-8').toString('base64'), // convertir en base64
            title: 'Exporter HTML',
        });

        if (result.action === Share.sharedAction) {
            if (result.activityType) {
            } else {
                console.error('Succès', 'Fichier partagé avec succès !');
            }
        } else if (result.action === Share.dismissedAction) {
            console.error('Annulé', 'Le partage a été annulé.');
        }
    } catch (error) {
        console.error('Erreur', `Erreur lors du partage : ${error.message}`);
    }
};
