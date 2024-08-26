<script>
	let showSidebar = true;

	function toggleSidebar() {
		showSidebar = !showSidebar;
	}
</script>

<div class="container">
	<div class="sidebar {showSidebar ? 'show' : ''}">
		<h2>Menu</h2>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/about">About</a></li>
			<li><a href="/contact">Contact</a></li>
		</ul>
		<button>
			<a href="/logout">Logout</a>
		</button>
		<button class="toggle-button" on:click={toggleSidebar}> ☰ </button>
	</div>

	<div class="main {showSidebar ? 'shrink' : ''}">
		<slot />
	</div>
</div>

<style>
	.container {
		display: flex;
		height: 100%;
		background-color: #333;
		overflow: hidden;
	}
	.sidebar {
		width: 250px;
		transition: transform 0.3s ease;
		transform: translateX(-100%);
		background-color: #333;
		color: white;
		padding: 15px;
		position: absolute;
		height: 100%;
	}
	.sidebar.show {
		transform: translateX(0);
	}
	.main {
		flex-grow: 1;
		padding: 15px;
		background-color: white;
		margin: 10px;
		border-radius: 5px;
		transition: margin-left 0.3s ease;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.main.shrink {
		margin-left: 250px;
	}
	.toggle-button {
		position: absolute;
		top: 10px;
		right: -30px;
		background-color: #333;
		color: white;
		border: none;
		padding: 10px;
		cursor: pointer;
		border-bottom-right-radius: 5px;
	}
</style>
