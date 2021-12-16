export const createFooter = () => `
    <footer class="kanban-footer">
    <div class="container">
        <div class="footer-flexRow">
            <div class="footer-flexRow-Left">
                <div class="footer-flexRow__activeTask">
                    <p>Active tasks: &#60;<span>N</span>&#62;</p>
                </div>
                <div class="footer-flexRow__finishedTasks">
                    <p>Finished tasks: &#60;<span>M</span>&#62;</p>
                </div>
            </div>
            <div class="footer-flexRow-Rigth">
                <div class="footer-flexRow__userName">
                    <p>Kanban board by &#60;<span>NAME</span>&#62;, &#60;<span>YEAR</span>&#62;</p>
                </div>
            </div>
        </div>
    </div>
    </footer>
`;
