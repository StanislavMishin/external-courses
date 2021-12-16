export const createHeader = () => `
        <header class="kanban-header">
            <div class="container">
            <div class="header-flexRow">
                <div>
                    <div class="header-flexRow__menuBurger">
                        <a href="#"><img src="https://img.icons8.com/material-outlined/48/ffffff/list.png" /></a>
                        <div class="header-flexRow__title">
                            <p>Awesome Kanban Board</p>
                        </div>
                    </div>
                </div>

                <div class="header-flexRow-Rigth">
                    <a href="#" class="header-flexRow__buttonCreateNewList">
                        <div class="iconButton">
                            <img src="https://img.icons8.com/doodle/48/000000/add.png" />
                        </div>
                        <div class="titleButton">
                            <p>Create new list</p>
                        </div>
                    </a>
                    <div class="header-flexRow-blockUser">
                        <div class="header-flexRow-blockUser__avatar">
                            <img src="https://img.icons8.com/doodle/100/000000/user-male-circle.png" />
                        </div>
                        <a href="#" id="blockUser__buttonMenu" class="header-flexRow-blockUser__buttonMenu">
                            <img id="img" src="https://img.icons8.com/material/50/ffffff/chevron-down.png" />
                        </a>
                    </div>
                </div>

            </div>
        </div>
        </header>
`;
