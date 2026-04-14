document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.filter_tab');
    const contents = document.querySelectorAll('.cases--content');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();

            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            tab.classList.add('active');
            
            if (contents[index]) {
                contents[index].classList.add('active');
            }
        });
    });

    const cardGroups = document.querySelectorAll('.text_block__v12--cards');

    cardGroups.forEach(group => {
        const cards = group.querySelectorAll('.stack_card');

        cards.forEach(card => {
            card.addEventListener('click', (e) => {
                group.classList.toggle('active');
            });
        });
    });
});