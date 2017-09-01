@extends('layout.master')

@section('content')
    @include('includes.cover.struct')

    @include('home.includes.quote')

    <div class="ui vertical stripe">
        <div class="ui equal width stackable internally grid">
            <div class="center aligned row">
                <div class="eight wide column">
                    <img src="{{ asset('/assets/logo/animation/startDCC.gif')}}" class="ui image big middle aligned">
                </div>
                <div class="left aligned eight wide column">
                    <h3>Sem accumsan lacus arcu.</h3>
                    <p>
                        Lorem ipsum dolor sit amet, urna maecenas aenean, integer felis turpis velit, taciti lorem aenean, non aliquam mattis suscipit. Id magna augue dolor, sed ut, a nec lectus nam eu, est sagittis massa velit fames, ac mollis risus velit. Leo lacinia pede malesuada nam amet nulla, lacus et sed porta vitae wisi eros. Leo architecto amet arcu in tempor aliquam, leo a semper, dui magna quam amet nec.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <!--
    <div class="ui vertical stripe segment">
        <div class="ui grid container two column segment">
            <div class="ui column four wide">
                <div class="ui vertical menu">
                    <a class="item">
                        <h4 class="ui header">Promotions</h4>
                        <p>Check out our new promotions</p>
                    </a>
                    <a class="item active">
                        <h4 class="ui header">Coupons</h4>
                        <p>Check out our collection of coupons</p>
                    </a>
                    <a class="item">
                        <h4 class="ui header">Rebates</h4>
                        <p>Visit our rebate forum for information on claiming rebates</p>
                    </a>
                </div>
                <div class="ui pagination menu">
                    <a class="item active">
                        1
                    </a>
                    <div class="disabled item">
                        ...
                    </div>
                    <a class="item">
                        10
                    </a>
                    <a class="item">
                        11
                    </a>
                    <a class="item">
                        12
                    </a>
                </div>
            </div>
            <div class="ui column text">
                <p>Veja isso.</p>
            </div>
        </div>
    </div>
    -->

    @include('includes.footer.footer')

@endsection
