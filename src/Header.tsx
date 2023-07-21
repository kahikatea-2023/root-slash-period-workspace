import * as elements from 'typed-html'

function Header() {
  return (
    <div>
      {/* Main Header */}
      <div class="bg-[#ef4136] w-screen flex flex-row items-end justify-between">
        <img
          class=" w-80 h-16"
          src="https://github.com/kahikatea-2023/root-slash-period-workspace/blob/73bfc0907ba057104d0d3c533a4efed6433d8d1f/src/public/header.png?raw=true"
          alt="Marbecks logo"
        />
        <h1 class="text-white font-bold ">
          NEW ZEALAND’S LEADING MUSIC SPECIALIST
        </h1>
      </div>
      <div class="w-full flex justify-between">
        {/* Sub Header */}
        <ul class="flex flex-row items-end justify-evenly text-[#ef4136] font-bold space-x-4">
          <li>Classical</li>
          <li>Pop & Jazz</li>
          <li>DVD</li>
          <li>Vinyl</li>
          <li>Contact Us</li>
        </ul>

        {/* Search Header */}
        <ul class="flex flex-row items-end space-x-4">
          <li>My Account</li>
          <li>Cart</li>
          <li>Checkout</li>
        </ul>
      </div>
    </div>
  )
}
export default Header
