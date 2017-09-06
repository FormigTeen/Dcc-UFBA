@extends('layout.master')
@section('stylesheet')
    <link rel="stylesheet" type="text/css" href="{{ asset('css/compiled/home-page.css') }}">
@endsection
@section('external-home')
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
@endsection

@section('content')

    <div class="ui vertical stripe segment news">
        <div class="ui grid container two column segment">
            <div class="ui column four wide">
                <div class="ui vertical menu">
                    <a class="item">
                        <div class="content">
                            <h3 class="header">Header</h3>
                            <p>Hoje é dia, veja que coisa interessante isso!!! Hahahaha eu sei que você é <asism class=""></asism></p>
                        </div>
                    </a>
                    <a class="item active">
                        <div class="content">
                            <h3 class="header">Header</h3>
                            <p>Hoje é dia</p>
                        </div>
                    </a>
                    <a class="item">
                        <div class="content">
                            <h3 class="header">Header</h3>
                            <p>Hoje é dia</p>
                        </div>
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
            <div class="ui column twelve wide">
                <div class="content">
                    <h3 class="header">Header</h3>
                    <p>Hoje é dia, veja que coisa interessante isso!!! Hahahaha eu sei que você é <asism class=""></asism></p>
                    <div class="extra">
                        <div class="ui right floated primary button">
                            Saiba mais!
                            <i class="right chevron icon"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    @include('includes.footer.footer')

@endsection
@section('script')
    @parent
    <script src="{{asset('js/compiled/home-page.js')}}"></script>
@endsection