function graphql() {
    document.getElementById("loader").style.display = "block";

    fetch('https://147.45.237.133:65112/api/v1/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: `
            query getDayReview {
            day_review {
            name
            threat_level
            }
            }
            `
        })
    })
    .then(response => response.json())
        .then(data => {
            document.getElementById("loader").style.display = "none";

            const reviews = data.data.day_review;
            if (reviews && reviews.length > 0) {
                let resultText = '';

                reviews.forEach(review => {
                    resultText += `<tr><td>${review.name}</td><td>${review.threat_level}</td></tr>`;
                });

                document.getElementById("result").innerHTML = resultText + `<td align="center">Норма: < 1</td>`;
            } else {
                document.getElementById("result").textContent = 'Данные не найдены';
            }
        })
        .catch(error => {
            document.getElementById("loader").style.display = "none";
            console.error('Error:', error);
            document.getElementById("result").textContent = error.message;
        });
}
