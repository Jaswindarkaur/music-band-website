<script>
    function closeModal(modalId) {
        document.getElementById(modalId).style.display = "none";
    }

    function openModal(modalId) {
        document.getElementById(modalId).style.display = "block";
    }

    function switchModal(currentModalId, targetModalId) {
        closeModal(currentModalId);
        openModal(targetModalId);
    }

    window.onclick = function(event) {
        let login = document.getElementById("loginModal");
        let signup = document.getElementById("signupModal");
        if (event.target === login) login.style.display = "none";
        if (event.target === signup) signup.style.display = "none";
    }
</script>
